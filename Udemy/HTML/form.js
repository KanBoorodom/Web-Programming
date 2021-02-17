const tweetForm = document.querySelector('#tweetForm');
const tweetCont = document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault()      /* prevent default behavior ในกรณีนี้จะไม่มีการเปลี่ยนหน้า page */
    /*     const usrInput = document.querySelectorAll('input')[0];
        const tweetInput = document.querySelectorAll('input')[1];
        console.log(usrInput.value,tweetInput.value) ค่อนข้างเขียนเยอะและยุ่งยาก
    */
    const usr = tweetForm.elements.username.value
    const tweet = tweetForm.elements.comment.value
    console.log(usr,tweet)

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(usr)
    newTweet.append(bTag)
    newTweet.append(` said ${tweet}`)
    console.log(newTweet)

    tweetCont.append(newTweet)

})
