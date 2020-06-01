// Evento para añadir la clase evento-click, la cual perimite desplegar el menu lateral

let menu = document.getElementById('menu');
let btn = document.getElementById('btn');
let closeMenu = document.getElementById('closeMenu');
let navbarContent = document.getElementById('navbar-content');
let contador = 0;


function cambio(){
    if(contador==0){
        menu.classList.add('click-event');
        navbarContent.classList.add('content-left');
        contador=1;
    }
    else{
        menu.classList.remove('click-event');
        navbarContent.classList.remove('content-left');
        contador=0
    }
}
btn.addEventListener('click',cambio,true)
closeMenu.addEventListener('click', cambio, true)
