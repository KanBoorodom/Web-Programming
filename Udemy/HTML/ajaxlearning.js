//?q=:query หมายถึงการ search query

//XML http request
/*
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE")
    //this คือตัวที่ request ไป
    console.log(this)
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price)
}

req.onerror = function(){
    console.log('Error')
    console.log(this)
}

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd')
req.send();
*/


//Fetch API
//Making request via javascript

//fetch will return or reject promise
/* fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log("RESPONSE, WAITING FOR DATA",res) //We got response obj but not have data yet.
        return res.json() //use json
    })
    .then(data => {
        console.log("DATA...")
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log("Error",e)
    })
 */

//Use async func
/* const fetchBitCoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    }
    catch(e){
        console.log("Something went wrong !!!")
    }
}
 */


//Axios library
//return promise with data
/* axios.get('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log('AXIOS lib')
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("Error: ",err)
    })
 */    

/* const fetchBitCoinPrice = async()=> {
    try{
        const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd")
        console.log(res.data.ticker.price)
    }
    catch (err) {
        console.log("Error: ",err)
    }
}  */


const getDadJoke = async()=> {
    //ต้องการข้อมูลแค่ส่วน json 
    const config = { headers: { Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com",config)
    //ถ้า res ไม่มี config ด้วยข้อมูลจะมาทั้งหมดเลย
    console.log(res.data.joke )

}
