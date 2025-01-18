        /*constantes pagina MATERIALES */

        const navLinks = document.querySelectorAll('.Materials-nav a');
        const materialItems = document.querySelectorAll('.Material-item');
        const headerNavs = document.querySelectorAll('.Header-navItem');
        const images = document.querySelectorAll('.Material-img');

        /* funciones pagina MATERIALES */

        function activeNav() {
            const currentPath = window.location.pathname;

            headerNavs.forEach(nav => {
                if (nav.getAttribute('href') == currentPath) {
                    nav.classList.add('active');
                }
            });

            headerNavs.forEach(nav => {
                nav.addEventListener('click', event => {
                    event.preventDefault();

                    headerNavs.forEach(a => a.classList.remove('active'));

                    nav.classList.add('active');
                });
            });
        };

        /* función para cambiar las imágenes cuando hagas hover */

        function imageHover(){
            images.forEach(image => {

                image.addEventListener('mouseenter', () => {
                    image.src = image.dataset.hover; //cambiamos la imagen por la que tiene el data-hover puesto en la img (data no actua como src si no q guardo el src ahi para luego ponerlo/devolverlo al src)
                });
    
    
                //restauramos la imagen que estaba antes al salir del hover
    
                image.addEventListener('mouseleave', () => {
                    image.src = image.dataset.original; //cambiamos la imagen por la que tiene el data original
                });
            });
        }

        /* función para filtrar imgs segun el material*/

        function categoryFilter(){
            navLinks.forEach(link => {

                link.addEventListener('click', (i) => {
                    i.preventDefault(); //evitar que se recargue la pagina(comportamiento predterminaado de recargar la pagina de los links)
    
                    const category = link.textContent.toLowerCase().trim(); //obtengo el texto de los links de las taxonomias y los paso a minúscula y les quito los espacios en blanco de izq y derecha
    
                    materialItems.forEach(item => {
                        if (category == 'todos' || item.classList.contains(category)) { //comprueba si la clase del item tiene una clase que coincide con la constante category O categoria 'todos'(que siempre será verdadera en caso de clickar en todos)
    
                            item.style.display = 'block'; // muestra la imagen si coincide la clase del item con "todos" o si está en la constante category
                        } else {
                            item.style.display = 'none'; // oculta la imagen si no coincide la clase del item con "todos" o si no está en la constante category
                        }
                    });
    
                    //eliminar y agregar la clase activa para que se entienda que taxonomía/filtro has clickado
                    navLinks.forEach(nav => nav.classList.remove('active')); //primero elimo la clase active de todos los links para que no se quede con el active el link seleccionado anterior
    
                    link.classList.add('active'); // "link" es el elemento que ha sido clickado, sale de aqui "navLinks.forEach(link =>"" y se le añade la clase active
    
                });
    
                navLinks[0].click(); //para q al cargar siempre muestre la primera taxonomía con el active puesto (que muester 'todos')
            });
    
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            activeNav(); //marcar el nav activo del header
            imageHover(); //configura el hover de las img
            categoryFilter(); // configura el filtro segun material

        });



        