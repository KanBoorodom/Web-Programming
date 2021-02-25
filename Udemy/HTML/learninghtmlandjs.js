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
