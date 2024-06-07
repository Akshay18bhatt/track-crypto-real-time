import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css"
import { getTrendingCoins } from "../../HitApi";
import SlidingEffect from "../../Components/Slider/SlidingEffect";
import { useCryptoContext } from "../../context";
import Form from "../../Components/Form/Form";



const Homepage = () => {

    const [trendingCoins, setTrendingCoins] = useState("");
    const {currency}= useCryptoContext();
    


    useEffect(() => {

        (async () => {
            const result = await getTrendingCoins(currency);
            // console.log(result.data);
            setTrendingCoins(result.data)
        })();
    }, [currency])

    return (
        <div>
            <div className={styles.homepage}>
                <div className={styles.homepage_left}>
                    <h1>Track Crypto<br />Real Time.</h1>
                    <p>In the highly volatile cryptocurrency market,
                         prices can undergo significant changes in a short period.
                          For traders and investors, real-time data means the ability to make quick decisions,
                           capturing the optimal moments to buy or sell.<br/><br/>
                           <b style={{"fontSize":"16px", "fontWeight":"600"}}>∴<br/><br/></b><em>"Our website is a comprehensive cryptocurrency data platform,<br/> offering a real-time market data to cater those needs." </em>
                           
                    </p>
                    <div className={styles.homepage_buttons}>
                        <button>Go To Dashboard</button>
                        <button>Share</button>
                    </div>
                </div>
                <div className={styles.homepage_right}>
                    <div className={styles.homepage_right_form_container}>
                        <Form />
                    </div>
                </div>
            </div>

            <SlidingEffect trendingCoins={trendingCoins} />
        </div>
    )
}

export default Homepage