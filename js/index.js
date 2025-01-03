/* Aquí declaro las variables que voy a utilizar */

const fondoInicial = document.querySelector('.FondoInicial');
const fondoSegundo = document.querySelector('.FondoSegundo');

const transitionDuration = 500; // son 0.5s que es lo q dura la transicion en el css(así no se queda el fondo en blanco cuando hace el cambio de fondo)

/* Aquí declaro las funciones que voy a utilizar */

/* aquí tuve un problema porque intentaba poner scroll en vez de wheel, y claro no funcionaba porque la pagina no tenia scroll en si, lo que queria es que al girar la rueda del raton (simil a hacer scroll) se activara el fondoSegundo */
window.addEventListener('wheel', (event) => {
    // Asegurarte de que el fondoSegundo existe y añadirle la clase isVisible
    if (event.deltaY > 0) {
        // si desplazo la rueda hacia abajo

        fondoSegundo.style.display = 'flex';
        setTimeout(() => {
            fondoSegundo.classList.add('isVisible');

        }, 10); //pequeño delay para que de tiempo a la transicion

        setTimeout(() => {
            fondoInicial.style.display = 'none';
        }, transitionDuration); //pequeño delay para que de tiempo a la transicion y no se vea el cambio brusco
    } else if (event.deltaY < 0) {
        // si desplazo la rueda hacia arriba
        fondoInicial.style.display = 'flex';
        fondoSegundo.classList.remove('isVisible');
        setTimeout(() => {

            fondoSegundo.style.display = 'none';
        }, transitionDuration); //pequeño delay para que de tiempo a la transicion y no se vea el cambio brusco
    }
});
