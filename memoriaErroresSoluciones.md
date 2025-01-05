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