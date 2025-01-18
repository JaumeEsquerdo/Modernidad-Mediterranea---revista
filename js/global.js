const headerNavs = document.querySelectorAll('.Header-navItem');

//obtengo la URL completa de la pagina actual
const currentURL = window.location.href;

// detectar si estoy en github pages o en local
const basePath = window.location.pathname.includes('/proyecto-final') ? '/proyecto-final' : '/';

headerNavs.forEach(nav => {
    const href = nav.getAttribute('href'); // para obtener el href del .Header-navItem del html

    /**Creo yo la URL que tendría la página actual del github mediante colocar al final el href actual;
    * Es decir combino la URL de la base de la web + el href que he agarrado antes (como materiales.html)
    * .origin hace que me devuelva la raiz de la URL (si mi URL es //jaumeesquerdo.github.io/proyecto-final/materiales.html ; me devolveria  //jaumeesquerdo.github.io)
    * 
    * Para generar estas constantes me he apoyado con chatGPT para poder agarrar 
    * bien la base de la URL, ya que no sabía como podía hacerlo sin escribrir 
    * muchísimo código
    * 
    * Ejemplo de uso:
    * ejemplo basePath = `/proyecto-final/` (si estoy en github pages) y `/` (si estoy en local) 
    * ejemplo href = `index.html` (href es el atributo de algun enlace HTML)
    * ejemplo basePath + href = `/proyecto-final/index.html`
    * Y con window.location.origin incluyo el orgien de la URL actual en este caso, ejemplo = `https://jaumeesquerdo.github.io`
    * Y para que funcione se pone primero la parte que quiero modificar (basePath + href) y despues de la coma el origen de la base (window.location.origin)
     */
    const absoluteURL = new URL(basePath + href, window.location.origin).href;


    //añado la clase "isActive" al nav que le corersponda

    if (currentURL == absoluteURL) {
        nav.classList.add('isActive');
    }

    //y finalmente hago que se quite la clase isActive de los todos los nav cuando le doy click a algun nav y se lo pongo al que le toque
    nav.addEventListener('click', () => {
        headerNavs.forEach(a => a.classList.remove('isActive'));
        nav.classList.add('isActive');
    });

});

