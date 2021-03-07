/* const input = document.querySelector("input");
const h1 = document.querySelector("h1");
/* input.addEventListener('change',function(e){
    console.log(e);
})
 *//* console.log จะ print ก็ต่อเมื่อมีการเปลี่ยนแปลงเกิดขึ้นมื่อคลิกเมาส์ออกจาก Input ถ้าลบแล้วพิมพ์เหมือนเดิมไม่ถือเป็น change*/
/* input.addEventListener('input',function(e){
    h1.innerText =  input.value;
    console.log('input');
    if(input.value == ''){
        console.log('hi')
    }
})
  ทุกครั้งที่พิมพ์ หรือ paste จะถือว่าเป็น input 

input.addEventListener('input',function(e){
    if(input.value == '')
    {
        console.log('hi')
        h1.innerText = "Enter Your Username";
    }
    else
    {
        h1.innerText = ` Welcome, ${input.value}`;
    }
}
)

 */

/* const randomColor = () =>{    
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

 const hide = document.querySelector('.container');
const change = document.querySelector('#changeColor');
 hide.addEventListener('click',()=>{
     hide.classList.toggle('hiden');
     
 })
 
 change.addEventListener('click',(e)=>{
     hide.style.backgroundColor = randomColor();
     e.stopPropagation();
 }) */

 //Keyboard event
/*  const but = document.querySelector('button').addEventListener('click',()=>{
     alert('Click')

 })

 const input = document.querySelector('input').addEventListener(
     'keydown',(evt)=>{
     console.log(evt.key)
     console.log(evt.code)
 })

 window.addEventListener('keydown',(evt)=>
    {console.log(evt)
    switch(evt.code){
        case 'ArrowUp':
            alert('Up')
            break;
        case 'ArrowDown':
            alert('Down')
            break; 
 }
 }
 ) */

 //Form

 //Prevent page to refresh
 /*
 const tweetForm = document.querySelector('#tweetForm')
 const usr = document.querySelectorAll('input')[0] 
 const tweet = document.querySelectorAll('input')[1]  
 const tweetContainer = document.querySelector('#tweet')
 
 tweetForm.addEventListener('submit',(e)=>{
     //alert('Submit')
     e.preventDefault();
     const usrname = tweetForm.elements.usrname
     const tweet = tweetForm.elements.tweet
     //console.log('Tweet')
     addTweet(usrname.value,tweet.value)
     usrname.value = '';
     tweet.value = '';
 })

 const addTweet = (username,tweet)=>{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${ tweet}`)
    tweetContainer.append(newTweet);
 }

 tweetContainer.addEventListener('click',function(e){
     //e.target.remove(); remove everything that in side container that u click
     e.target.nodeName === 'LI' && e.target.remove();
 })
*/
/*  const form = document.querySelector('form')
 const product = document.querySelector('#product')
 const ul = document.querySelector('ul');
 const qty = document.querySelector('#qty');

 form.addEventListener('submit',(evt)=>{
     evt.preventDefault();
     grocceryList(product,qty);

 })

 const grocceryList = (product,qty)=>{
     let li = document.createElement('li');
     li.innerText = `${qty.value} ${product.value}`;
     ul.appendChild(li)
     qty.value = '';
     product.value = '';
 } */

/*  const btn = document.querySelector('button');
 btn.addEventListener('click',(e)=>{
    e.stopPropagation() //disable bubble
    alert('btn Clicked')
 }) */

 //7.3.21 Browser web APIS ทำใน background ระหว่างที่รอเวลา
console.log("Sending request to server")
setTimeout(()=>{ //ส่งส่วนนี้ไปให้ Web API ทำ แ้วทำส่วนอื่นต่อไป
    console.log("Here is data from ther server")
},3000)
console.log("End")
