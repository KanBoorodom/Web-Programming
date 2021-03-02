//appendChild() ใช้กับ add element
//append() ได้ทั้ง element และ inner text
const container = document.querySelector('#container');

for(let i = 1;i<=151;i++){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const label = document.createElement('span'); 
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    label.innerText = i
    div.appendChild(img)
    div.appendChild(label)
    container.appendChild(div)
}