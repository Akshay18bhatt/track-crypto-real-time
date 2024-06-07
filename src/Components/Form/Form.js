import React, { useState } from "react";
import styles from "./form.module.css"
import GitHub from "../Github";
import { useCryptoContext } from "../../context";



const Form = () => {

    const [login, setLogin] = useState(true);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");

    const [loginEmail, setLoginEmail]= useState("");
    const [loginPassword, setLoginPassword]= useState("");


    const {createUser,loginUser,logOut ,signInwithGoogle,signInwithGithub}= useCryptoContext();


    function handleSignUpSubmit(e){
        e.preventDefault();
        if((email!=="" && password!=="") && (confirmPassword===password) ){
            
            createUser(email,password)
        }
        else if(confirmPassword!==password){
            alert("wrong password");
            return
        }
    }

    function handleLoginSubmit(e){
        e.preventDefault();
        loginUser(loginEmail,loginPassword);

    }

    return (
        <div className={styles.form_container}>
            <div className={styles.sl_buttons_container} >
                <p onClick={(e)=>setLogin(true)} style={login ? {"backgroundColor": "orange"}: {backgroundColor:"white"}} >LogIn</p>
                <p style={login ? {backgroundColor: "white"}:{backgroundColor:"orange"}} onClick={e=>setLogin(false)}  >SignUp</p>
            </div>

            {
                !login ?
                    (
                        <form onSubmit={handleSignUpSubmit}  className={styles.signUp_form}  key="signUp_form">
                            <label>Enter your Email</label>
                            <input 
                                type="email"
                                required 
                                placeholder="example@gmail.com"
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <label>Create Password</label>
                            <input 
                                type="password" 
                                required 
                                placeholder="Example@123pass" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <label>Re-Enter Password</label>
                            <input 
                                type="text" 
                                required 
                                placeholder="Re-enter password to confirm" 
                                value={confirmPassword} 
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            />
                            <button>
                                Create Account
                            </button>


                        </form>
                    )
                    :
                    (
                        <form onSubmit={handleLoginSubmit} className={styles.logIn_form} key="login_form" >
                            <label>Enter your Email</label>
                            <input 
                                type="email" 
                                required 
                                placeholder="example@gmail.com" 
                                value={loginEmail} 
                                onChange={(e)=>setLoginEmail(e.target.value)}
                            />
                            <label>Enter Password</label>
                            <input 
                                type="password" 
                                required 
                                placeholder="enter your password" 
                                value={loginPassword} 
                                onChange={(e)=>setLoginPassword(e.target.value)}
                            />
                            <button>
                                Login
                            </button>

                            <strong style={{ "textAlign": "center", "margin": "10px 0" }}>or</strong>

                            <div className={styles.google_github} >
                                <p onClick={e=>signInwithGoogle()} ></p>
                                <p onClick={e=>signInwithGithub()} ><GitHub /></p>
                            </div>




                        </form>
                    )
            }
            
        </div>
    )
}

export default Form