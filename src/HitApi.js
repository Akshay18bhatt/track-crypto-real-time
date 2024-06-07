

export const getTrendingCoins= async(currency)=>{
    console.log(currency);
    const trending_coins= `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en`;
    

    try{
        const response = await fetch(trending_coins);
        // console.log(response);

        if(response.status===200 && response.status<=299){

            const responseObj= await response.json();
            // console.log(responseObj);
            return{status:"success", data:responseObj}
        }
        else{
            return{status:"success", data:response.statusText}
        }
    }
    catch(err){
        console.log(err);
        return{status:"Error" ,data: err}
    }
}