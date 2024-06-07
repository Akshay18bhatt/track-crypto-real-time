import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseApp } from "./FirebaseConfig";
import { 
            getAuth, 
            createUserWithEmailAndPassword, 
            signInWithEmailAndPassword, 
            signOut,
            GoogleAuthProvider,
            signInWithPopup,
            GithubAuthProvider
            
        } from "firebase/auth";


const CryptoContext = createContext();

export const useCryptoContext = () => {

    return (
        useContext(CryptoContext)
    )

}



export const CryptoContextProvider = (props) => {

    const [currency, setCurrency] = useState("inr");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {

        if (currency === "inr") setSymbol("₹");
        else if (currency === "usd") setSymbol("$");
    }, [currency])


    const auth = getAuth(firebaseApp);
    const googleProvider= new GoogleAuthProvider() ;
    const githubProvider= new GithubAuthProvider() ;



    const createUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                alert("SignUp success")
                console.log(userCredentials)
            })
            .catch(err => {
                alert(err?.message);

            })
    }

    const loginUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                alert("Login success");
                console.log(userCredentials);
            })
            .catch(err => {
                console.log(err);
                alert(err.message);
            })
    }


    const logOut=()=>{
        signOut(auth).then(()=>{
            alert("Logout successful")
        })
        .catch(err=>{
            alert("An error has occurred")
        })
    }


    const signInwithGoogle= ()=>{
        signInWithPopup(auth, googleProvider)
        .then(userCredentials=>{
            alert("SignIn success");
            console.log(userCredentials);
        })
        .catch(err=>{
            alert(err.message);
            console.log(err);
        })
    }
    const signInwithGithub= ()=>{
        signInWithPopup(auth, githubProvider)
        .then(userCredentials=>{
            alert("SignIn success");
            console.log(userCredentials);
        })
        .catch(err=>{
            alert(err.message);
            console.log(err);
        })
    }

    return (
        <CryptoContext.Provider value={{
            currency,
            setCurrency,
            symbol,
            createUser,
            loginUser,
            logOut,
            signInwithGoogle,
            signInwithGithub
        }}  >
            {props.children}
        </CryptoContext.Provider>
    )
}

