 //Keyboard event 24.2.21
 const but = document.querySelector('button').addEventListener('click',()=>{
     alert('Click')

 })

 const input = document.querySelector('input').addEventListener(
     'keydown',(evt)=>{
     console.log(evt.key)
     console.log(evt.code)
 })
