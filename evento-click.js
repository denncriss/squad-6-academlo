// Evento para añadir la clase evento-click, la cual perimite desplegar el menu lateral

let menu = document.getElementById('menu');
let btn = document.getElementById('btn');
let closeMenu = document.getElementById('closeMenu');
let contador = 0;


function cambio(){
    if(contador==0){
        menu.classList.add('click-event');
        contador=1;
    }
    else{
        menu.classList.remove('click-event');
        contador=0
    }
}
btn.addEventListener('click',cambio,true)
closeMenu.addEventListener('click', cambio, true)