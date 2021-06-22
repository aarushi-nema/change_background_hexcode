const button= document.querySelector('.color_changer_button');
const body= document.querySelector('body');
const hexvalues= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexcode= document.querySelector('.hex_container');



button.addEventListener('click', changeColor);

function changeColor(){
    let hex='#';

    for(let i=0; i<6; i++){
        const randomIndex= parseInt(Math.random()*hexvalues.length);
        hex+=hexvalues[randomIndex];
    }
    
    hexcode.textContent=hex;
    body.style.backgroundColor=hex;
}