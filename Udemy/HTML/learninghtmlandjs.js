 //Keyboard event 24.2.21
 /*const but = document.querySelector('button').addEventListener('click',()=>{
     alert('Click')

 })

 const input = document.querySelector('input').addEventListener(
     'keydown',(evt)=>{
     console.log(evt.key)
     console.log(evt.code)
 })*/

// 25.2.21
// 27.2.21 add remove when click on LI tag
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

// 26.2.21
 const form = document.querySelector('form')
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
 }


 
