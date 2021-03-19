//async will automatic return promise
// ถ้ามี error จะ reject
/*const sync = async() => {
    throw new Error("Error occur")
    return "async test"
}

sync().then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log("Found error: ",err)
})

const login = async(usrname,pass) => {
    if( !usrname || !pass) throw 'Missing Credentials'
    if(pass === 'Corgi') return 'welcome'
    throw 'Invalid password'
}

login('abcde')
    .then(msg => {
        console.log("Login")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })
*/

// await wait execution till promise is complete and continue do anything

const delayedColorChange = (color, delay) => {
    return new Promise ( (resolve,reject) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}
//await จะคู่กับ async
/*
async function rainbow(){
    await delayedColorChange('red', 1000)
    console.log('Hi')
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)

}
async function printRainbow(){
    await rainbow()
    console.log("End of rainbow")
}
printRainbow()
*/
const fakeRequest = (url) => {
    return new Promise((resolve, reject) =>{
        const rand = Math.random()
        setTimeout(() => {
            if (rand > 0.7){
                resolve('Your fake data here')
            }
            reject('This is reject: Request Error !!!')
        }, 1000)
    })
}

async function makeTwoRequests(){
    try{
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1)
        console.log(data2)
        console.log('DONE')
    }
        //if reject happen without handle the line below will not be execute
    catch(e){
        //e is reject
        console.log('Error catch: ',e)
       // console.log(e)
    }
} 


makeTwoRequests()
