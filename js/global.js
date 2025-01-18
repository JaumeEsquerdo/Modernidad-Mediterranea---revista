const headerNavs = document.querySelectorAll('.Header-navItem');

//obtengo la URL completa de la pagina actual
const currentURL = window.location.href;

headerNavs.forEach(nav => {
    const href = nav.getAttribute('href'); // para obtener el href del .Header-navItem del html

    /**creo yo la URL que tendría la página actual del github mediante colocar al final el href actual
    * Es decir combino la URL de la base de la web + el href que he agarrado antes (como materiales.html)
    * .origin hace que me devuelva la raiz de la URL (si mi URL es //jaumeesquerdo.github.io/proyecto-final/materiales.html ; me devolveria  //jaumeesquerdo.github.io)
    * Esta constante me he apoyado con chatGPT para poder agarrar bien la base de la URL, ya que no sabía como podía hacerlo sin escribrir muchísimo código
     */
    const absoluteURL = new URL(href, window.location.origin).href


    //añado la clase "isActive" al nav que le corersponda

    if (currentURL == absoluteURL){
        nav.classList.add('isActive');
    }

    //y finalmente hago que se quite la clase isActive de los todos los nav cuando le doy click a algun nav y se lo pongo al que le toque
    nav.addEventListener('click', () =>{
        headerNavs.forEach(a => a.classList.remove ('isActive'));
        nav.classList.add('isActive');
    });

});

