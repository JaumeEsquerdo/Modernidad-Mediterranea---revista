const headerNavs = document.querySelectorAll('.Header-navItem');


headerNavs.forEach(nav => {
    nav.addEventListener('click', event => {
        

        headerNavs.forEach(a => a.classList.remove('isActive'));

        nav.classList.add('isActive');
    });
});

const currentPath = window.location.pathname; //agarra el final de la URL 
headerNavs.forEach(nav => {
    if (nav.getAttribute('href') == currentPath) { //compara el atributo href del enlace con el final de la URL y si es el mismo ejecuta el codigo
        nav.classList.add('isActive');
    }
});