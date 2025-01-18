/* Aquí declaro las variables que voy a utilizar */

const btnNxt = document.querySelectorAll('.Btn-nxt');

const fondoInicial = document.querySelector('.FondoInicial');
const fondoSegundo = document.querySelector('.FondoSegundo');
const fondoTercero = document.querySelector('.FondoTercero');
const transitionDuration = 500; // son 0.5s que es lo q dura la transicion en el css(así no se queda el fondo en blanco cuando hace el cambio de fondo)


/**
 *function showSection(sectionToShow, sectionToHide) - MOSTRAR Y OCULTA EL FONDO
 * 
 *@param sectionToShow - La sección/fondo que quieres que muestre
 *@param sectionToHide - la sección/fondo que quieres que se oculte
 */


function showSection(sectionToShow, sectionToHide) {
    //ocultar la seccion actual 
    sectionToShow.classList.remove('isHidden');
    sectionToShow.classList.add('isVisible');

    setTimeout(() => {
        sectionToHide.classList.remove('isVisible');
        sectionToHide.classList.add('isHidden');
    }, transitionDuration); //delay para que la trnsicion se complete sin ser brusco el cambio

};

window.addEventListener('wheel', (evento) => {
    if (evento.deltaY > 0) {
        console.log('scroll hacia abajo');

        //si desplazo la rueda del raton hacia abajo...
        if (fondoInicial.classList.contains('isVisible')) { //contains significa si contiene algo, en este caso si contiene la clase isVisible

            showSection(fondoSegundo, fondoInicial);
        } //si el fondoInicial tiene puesto el display flex entonces se aplica el if de arriba, que hace q se ejecute la funcion showSection por la que fondoSegundo actua como "sectionToShow" y fondoInicial como "sectionToHide"
        else if (fondoSegundo.classList.contains('isVisible')) {
            showSection(fondoTercero, fondoSegundo);
        }
        else if (fondoTercero.classList.contains('isVisible')) {
            showSection(fondoInicial, fondoTercero);
        }

    } else if (evento.deltaY < 0) {
        //si desplazo la rueda del raton hacia arriba...
        if (fondoInicial.classList.contains('isVisible')) {
            showSection(fondoTercero, fondoInicial);
        }
        else if (fondoSegundo.classList.contains('isVisible')) {
            showSection(fondoInicial, fondoSegundo);
        }
        else if (fondoTercero.classList.contains('isVisible')) {
            showSection(fondoSegundo, fondoTercero);
        }
        //aqui estoy haciendo lo mismo, poero hacia arriba
    }
});


//para que funcione tambien el boton de avanzar...
btnNxt.forEach(button => { // al agarrar con querySelectorAll tengo que recorrer la lista en vez de darle directamente a btnNxt addEventListener
    button.addEventListener('click', () => {
        if (fondoInicial.classList.contains('isVisible')) {
            showSection(fondoSegundo, fondoInicial);
        } else if (fondoSegundo.classList.contains('isVisible')) {
            showSection(fondoTercero, fondoSegundo);

        } else if (fondoTercero.classList.contains('isVisible')) {
            showSection(fondoInicial, fondoTercero); //showSection(1 ,3) aqui la 1 se muestra y la 3 se oculta
        }
    });
});
