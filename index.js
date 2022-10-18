let root = document.documentElement;

document.getElementById('tarjeta-html').addEventListener('click', ()=>cambiarFondo('rgb(253, 237, 225)'));
document.getElementById('tarjeta-css').addEventListener('click', ()=> cambiarFondo('rgb(228, 225, 253)'));
document.getElementById('tarjeta-js').addEventListener('click', ()=> cambiarFondo('rgb(247, 253, 225)'));

function cambiarFondo(color){
    if(root.style.getPropertyValue('--color-fondo') !== color){
        root.style.setProperty('--color-fondo', color)
    } else {
        root.style.setProperty('--color-fondo', "white")
    }
}