import React from "react";
import styles from "./slider.module.css"
import { useCryptoContext } from "../../context";


const SlidingEffect = ({trendingCoins}) => {

    const {symbol}= useCryptoContext();

    return (
        <div className={styles.trending_coins_container}>
            <div className={styles.trending_coins_slide}>
                {
                    trendingCoins.length > 0 &&
                    trendingCoins.map((coin, ind) => {
                        // console.log(coin);
                        return (
                            <div key={coin.symbol} className={styles.trending_coin} >
                                <div className={styles.trending_coin_img_div}>
                                    <img src={coin.image} alt={coin.name} />
                                </div>
                                <div style={{ display: "flex", gap: "10px" }} >
                                    <em style={{ fontWeight: "700" }}>{(coin.symbol).toUpperCase()}</em>
                                    <p> {coin.price_change_percentage_24h.toFixed(2)} % </p>
                                </div>
                                <b style={{color:"green"}} >{symbol}{coin.current_price}</b>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.trending_coins_slide}>
                {
                    trendingCoins.length > 0 &&
                    trendingCoins.map((coin, ind) => {
                        // console.log(coin);
                        return (
                            <div key={coin.symbol} className={styles.trending_coin} >
                                <div className={styles.trending_coin_img_div}>
                                    <img src={coin.image} alt={coin.name} />
                                </div>
                                <div style={{ display: "flex", gap: "10px" }} >
                                    <em style={{ fontWeight: "700" }}>{(coin.symbol).toUpperCase()}</em>
                                    <p> {coin.price_change_percentage_24h.toFixed(2)} % </p>
                                </div>
                                <b style={{color:"green"}}>{symbol}{coin.current_price}</b>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default SlidingEffect