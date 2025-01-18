# Aquí pongo las complicaciones y como lo he corregido


## En esta parte que ha sido la home de la pagina con sus wheel hacia arriba y hacia abajo que cambiaban de escena, he tenido varias complicaciones.

Primero lo hice con dos fondos, es decir dos opciones a y b. En ese momento me funcionaba bastante bien, salvo porque intentaba que funcionara con el evento `scroll` y por lo tanto no hacia nada, ya que non tiene scroll la página. Más tarde investigando por w3School, por chatGPT y copilot me enteré que eixistía el evento `wheel`  y ahí solucioné uno de mis problemas iniciales. Además también jugué bastante con las transiciones para cuadrarlo al tiempo necesario para que cuando hiciera el evento de wheel, tuviese una transición de abajo a arriba. Por lo que tuve que añadir `setTimeOut` para jugar con los segundos para añadir clases de visibilidad, o para lo contrario, porque al principio me hacia la transicion hacia arriba de la pagina siguiente pero la anterior desaparecia y quedaba un fondo blanco hasta que acababa la transición de la página que aparecía.

Luego más tarde decidí añadir otro fondo, y al componerse de 3 opciones de fondos pensé que habría que crear una función para evitar muchísimo código `else if`. Aquí tuve problemas para arrancar a funcionar, el mayor obstáculo en esta sección fue jugar con los tiempos de  `setTimeOut()` y, SOBRETODO averiguar el motivo de que  no me funcionara la transición de que aparezca la pagina siguiente desde abajo hacia arriba era que estaba intentando ajustar esa animación con display: none y por lo visto, esta no aplica ninguna animación. 

```js

        const fondoInicial = document.querySelector('.FondoInicial');
        const fondoSegundo = document.querySelector('.FondoSegundo');
        const fondoTercero = document.querySelector('.FondoTercero');
        const transitionDuration = 500; // son 0.5s que es lo q dura la transicion en el css(así no se queda el fondo en blanco cuando hace el cambio de fondo)

        function showSection(sectionToShow, sectionToHide) {
            //ocultar la seccion actual 
            sectionToShow.classList.remove('isHidden');
            sectionToShow.classList.add('isVisible');

            setTimeout(() => {
                sectionToHide.classList.remove('isVisible');
                sectionToHide.classList.add('isHidden');
            }, transitionDuration); //delay para que la trnsicion se complete sin ser brusco el cambio

        }

        window.addEventListener('wheel', (evento)=>{
            if(evento.deltaY > 0){
                console.log('scroll hacia abajo');

                //si desplazo la rueda del raton hacia abajo...
                if(fondoInicial.classList.contains('isVisible') ){ //contains significa si contiene algo, en este caso si contiene la clase isVisible

                    showSection(fondoSegundo, fondoInicial);
                } //si el fondoInicial tiene puesto el display flex entonces se aplica el if de arriba, que hace q se ejecute la funcion showSection por la que fondoSegundo actua como "sectionToShow" y fondoInicial como "sectionToHide"
                else if(fondoSegundo.classList.contains('isVisible')){
                    showSection(fondoTercero, fondoSegundo);
                }
                else if(fondoTercero.classList.contains('isVisible')){
                    showSection(fondoInicial, fondoTercero);
                }
                
            } else if(evento.deltaY < 0){
                //si desplazo la rueda del raton hacia arriba...
                if(fondoInicial.classList.contains('isVisible')){
                    showSection(fondoTercero, fondoInicial);
                }
                else if(fondoSegundo.classList.contains('isVisible')){
                    showSection(fondoInicial, fondoSegundo);
                }
                else if(fondoTercero.classList.contains('isVisible')){
                    showSection(fondoSegundo, fondoTercero);
                }
                //aqui estoy haciendo lo mismo, poero hacia arriba
            }
        })

```

## Problemas para ajustar el sticky en la info basica de las casas de estilo mediterréano

En esta sección me encontré ante uno de los mayores problemas que he tenido en el proyecto. Aunque parece simple, tuve la mala suerte de poner `overflow:hidden` en toda la página `*{}` por un problema en el que se me expandía al principio las imagenes en el eje X. Y más tarde, al tratar de poner el `position: sticky` no ocurría nada con el texto, es decir, no se desplazaba hacia abajo. Después de mucho tiempo probando y errando e intentando ayudarme tanto con ChatGPT como con el ejercicio que hicimos en clas de "diccionario-sticky.html". Logré al final averiguar que el overflow no dejaba desplazar al sticky.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #e0e0e0;
}

.Header-navList {
    display: flex;
    gap: 20px;
    list-style: none;

}

.Header-navItem {
    text-decoration: none;
    color: black;
}

.Header-navItem:active {
    color: #f8f8f8;
}

.Main {
    display: flex;
    flex-direction: column;

}

.Main-text {
    display: flex;
    margin: 70px 30px;
}

/**
este es el contenedor al que el sticky toma de referencia para desplazarse
*/
.Image-container {
    position: relative;
    height: 120vh;
    width: 100%;
    

}

.Image-item {

    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}



/**
este es la clase al que se le aplica el STICKY
*/
.Location-image { 
    position: sticky;
    top: 20px;
    left: 20px;
    /* color: var(); */
    color: #e0e0e0;
    font-size: 1.4rem;
    z-index: 1;
}

```


## Problema / conflicto en las transiciones de las imagenes al hacer hover.

Tuve un problema al querer aplicar alguna transición suave en la sección de la web "Materiales". Mi primera idea era, que al hacer hover hiciera una pequeña transición de giro de la tarjeta de unos segundos. Pero al intentar aplicarlo no lo conseguí, ya que al parecer con la forma de incorporar las imagenes mediante un cambio de src no funcionaba esa opción.

Busqué un poco por internet y encontré que podría haber hecho el cambio mediante CSS en el hover con `background-image: url()`. O también otra manera podría haber sido superponer una con otra y aplicar un opacity 0 en la que no quiero que se vea cuando se haga hover o no.

Para solucionar ese problema y dejar este código de JS, pero aplicando alguna transición en el hover le puse un cambio en el hover tanto de `scale` como en `opacity` al hacer el hover y cambiar de img.



```js
        //seleccionamos todas las imagenes
        const images = document.querySelectorAll('.Material-img');

        images.forEach(image => {

            image.addEventListener('mouseenter', () => {
                image.src = image.dataset.hover; //cambiamos la imagen por la que tiene el data-hover puesto en la img (data no actua como src si no q guardo el src ahi para luego ponerlo/devolverlo al src)
            });


            //restauramos la imagen que estaba antes al salir del hover

            image.addEventListener('mouseleave', () => {
                image.src = image.dataset.original; //cambiamos la imagen por la que tiene el data original
            });
        });
```


## Creación proyecto, configurar los archivos con sus respectivos JS y arhivos CSS

A la hora de la creación del proyecto, al trabajarlo durante las navidades, empezando un poco antes pero sobretodo en navidades, decidí que haría un .html por sección, juntando ahí tanto los estilos en el head con las etiquetas `<style>` como poniendo el JS correspondiente al final del body con `<script>`. Ya que me parecía una manera rápida de trabajar en el proyecto durante los días de vacaciones de navidad donde los días pasan muy rápido, y por lo tanto no quería perder tiempo en pensar como enlazar los archivos JS y CSS si los tuviera fuera, y decidir en que posición ponerlos ni nada. Fue entonces cuando decidí "abandonar" el repositorio de `Proyecto final`, para empezar a trabajar todo el proyecto en otro `PruebasRandom`, que lo había creado para toquetear funciones en la página sin hacerme un lio en el código que ya dejaba como válido en el otro repositio, y a partir de ese momento completé todo el proyecto en el repositorio `PruebasRandom` . Por tanto una vez tuve todo el proyecto realizado, con todo el JS y CSS en bruto en cada html, hice la tarea de pasar a "limpio" el contenido, tanto haciendo alguna correción en el código de JS para dejarlo más reutilizable, de igual forma con CSS revisando el código para quitar código repetido o que no era útil. Y más tarde, para que al hacer el traspaso del código de JS y CSS me funcionara, dejé los archivos en bruto en el repositorio `PruebasRandom` por si tenía problemas a la hora de enlazar el código JS poder volver a ver cómo tenía el código, y pase todas las carpetas y archivos en `Proyecto final` donde ahí si, quitaba el JS del final del body y los puse en un archivo js enlazandolos con el atributo `defer`al final del head.

De cara al futuro veo conveniente trabajar desde el principio con los archivos externos enlazados. Porque de cara a una fecha límite de entrega puede ser muy arriesgado tener que pasar todo a limpio (especialmente si vas justo de tiempo).


## Problema con GITHUB pages.

Al abrir la pagina que crear github del repositorio, no se me aplicaba el CSS.
La solución, al haberme ocurrido ya en alguna actividad de clase durante el curso, fue quitar el pimer `/` en los css enlazados ya que la carpeta se situaba en la raiz del repositorio.

error: src="/img/fondo-segundo.jpg"

solución: src="img/fondo-segundo.jpg" 


## Problema para enlazar

En la parte de las entradas de las casas, en la que comparten un css común, al principio lo tenia enlazado en las paginas locales con las que trabajamos. como `http://127.0.0.1:5500/casas.html?id=Amaro`. Una vez pasado a github tuve que cambiarlo por el link que genera github para que tuviese correspondencia. El cambio fue a `https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=Amaro `


También tuve un problema a la hora de enlazar el archivo de JS `global.js` ya que comparaba la ruta del local del href de los navs con el actual para activarle la clase isActive 

```js
const currentPath = window.location.pathname; //agarra el final de la URL 
headerNavs.forEach(nav => {
    if (nav.getAttribute('href') == currentPath) { //compara el atributo href del enlace con el final de la URL y si es el mismo ejecuta el codigo
        nav.classList.add('isActive');
    }
});
```

El siguiente problema fue que en github la comparación con el final de la URL se necesita incluir el repositorio donde está. Por eso aquí solo estaría funcional en local ya que compararía solo el archivo html. ej: `contact.html`

Y el necesitado sería: `/proyecto-final/contact.html`

Para solucionar esto, con ayuda en esta parte de chatGPT utilizo lo siguiente:

```js
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

    // //y finalmente hago que se quite la clase isActive de los todos los nav cuando le doy click a algun nav y se lo pongo al que le toque
    // nav.addEventListener('click', () => {
    //     headerNavs.forEach(a => a.classList.remove('isActive'));
    //     nav.classList.add('isActive');
    // });

});
```
Dejo esto último del problema anterior comentado ya que en este caso, no se necesita que cuando le de click se borre el anterior `isActive` incluido en algún `a`. Ya que al recargar la página ya se reinicia solo. A base de probar me di cuenta de este comportamiento.
```js

// //y finalmente hago que se quite la clase isActive de los todos los nav cuando le doy click a algun nav y se lo pongo al que le toque
     nav.addEventListener('click', () => {
         headerNavs.forEach(a => a.classList.remove('isActive'));
         nav.classList.add('isActive');
     });

```
