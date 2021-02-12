const button = document.querySelectorAll('button');
const randomColor = () =>{    
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}
for(let btn of button){
    btn.addEventListener('click',()=>{
        btn.style.backgroundColor = randomColor();
    })
}

const h1s = document.querySelectorAll('h1');
for(let h of h1s){
    h.addEventListener('click',colorize);
    /* this will refer to what click */
}

function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const evtBut = document.querySelector('.evt');
evtBut.addEventListener('click',function(evt){
    /* evt is what is doing to evtBut */
    console.log(evt)
})

/* const input = document.querySelector('input');
input.addEventListener('keydown',function(){
    console.log('KEYDOWN')
})
 กดปุ่มบน keyboard keydown ปล่อย up 
input.addEventListener('keyup',function(){
    console.log('KEYUP')
})
 */

const input = document.querySelector('input');
input.addEventListener('keydown',function(evt){
    console.log(evt.key)/* สิ่งที่กด เช่น a ctl shift */
    console.log(evt.code)/* สิ่งที่กดแบบเจาะจงเช่น lft control ,key a,right shift
     */
})
/* evt จะเก็บสิ่งที่เกิดจากการกดปุ่ม เช่น กด a evt= a */

window.addEventListener('keydown',function(e){
    console.log('From window')
    switch(e.code){
        case 'ArrowUp': 
            console.log('UP')
            break
        case 'ArrowDown': 
            console.log('DOWN')
            break
    }
})