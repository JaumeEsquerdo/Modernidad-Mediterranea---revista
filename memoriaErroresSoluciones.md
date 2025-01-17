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