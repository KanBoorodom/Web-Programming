const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80'
//Use appendChild to append element to the body
//appendChild will append at last child of body
newImg.classList.add('square')
document.body.appendChild(newImg)

const newH3 = document.createElement('h3');
newH3.innerText = "I'm new H3"
document.body.appendChild(newH3)

//append
const p = document.querySelector('p');
p.append('i am new text !!!!!!!!!!!!!!!!')
//append can append more than one thing at the sametime
p.append("i'm the second thing","i'm the third thing")
//Use prepend to add at the begining 
const newB = document.createElement('b')
newB.append('Hi')
p.prepend(newB)

const h2 = document.createElement('h2')
h2.append("Are adorable chickens")
const h1 = document.querySelector('h1')
h1.after(h2)
h1.insertAdjacentElement('afterend',h2)

const h3 = document.createElement('h3')
h3.innerText = "I'm H3"
h1.after(h3)