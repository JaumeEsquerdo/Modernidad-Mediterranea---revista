console.log(window.location.href)




/* declaro variables para el slider dinámico según la entrada actual */
const casas = [
    { id: 'SonSerra', titulo: 'Casa en Mallorca', ubicacion: 'Mallorca, España', descripcion: ['En Les Cases de Son Serra, tradición y modernidad se fusionan en un diseño que reinterpreta lo rústico con sutiles toques art nouveau. Los arquitectos Feliu Rullan y Victoria Vidal lograron dar vida a un espacio minimalista que honra su historia. Desde la reutilización de la piedra original hasta la incorporación de losas tradicionales, cada detalle refleja una conexión respetuosa con el pasado.', 'Esta casa en Les Cases de Son Serra combina la esencia agrícola de 1773 con un diseño contemporáneo lleno de carácter. La chimenea, inspirada en la antigua cocina de leña, y las losas de Binissalem evocan el espíritu del lugar. Feliu Rullan y Victoria Vidal, con su enfoque joven e innovador, logran un equilibrio perfecto entre lo tradicional y lo moderno.'], img: 'img/cases-de-son-serra-7.jpg', imagenPrincipal: 'img/cases-de-son-serra-2.jpg', link: 'https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=SonSerra', gridImages: ['img/cases-de-son-serra-2.jpg', 'img/cases-de-son-serra-3.jpg', 'img/cases-de-son-serra-4.jpg', 'img/cases-de-son-serra-5.jpg', 'img/cases-de-son-serra-6.jpg', 'img/cases-de-son-serra-7.jpg', 'img/cases-de-son-serra-8.jpg', 'img/cases-de-son-serra-9.jpg',] },
    { id: 'Amaro', titulo: 'Casa de Amaro Sánchez', ubicacion: 'Ibiza, España', descripcion: ['Frente a un acantilado ibicenco, esta casa remodelada por Amaro Sánchez de Moya dialoga con el Mediterráneo como si fuera la proa de un barco. La madera local, el roble con pátina dorada y los muebles a medida crean una atmósfera natural y relajante, mientras que las paredes encaladas y el jardín mediterráneo completan este refugio atemporal.', 'Con vistas a una cala esmeralda, esta villa en Ibiza refleja la esencia de la isla con materiales nobles y colores neutros. Desde puertas arqueadas texturizadas hasta un baño exterior rodeado de flores, el diseño captura la serenidad mediterránea en cada rincón, creando un espacio que respira libertad y autenticidad.'], img: 'img/casa-amaro-sanchez-1.jpg', imagenPrincipal: 'img/casa-amaro-sanchez-1.jpg', link: 'https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=Amaro', gridImages: ['img/casa-amaro-sanchez-2.jpg', 'img/casa-amaro-sanchez-3.jpg', 'img/casa-amaro-sanchez-4.jpg', 'img/casa-amaro-sanchez-5.jpg', 'img/casa-amaro-sanchez-6.jpg', 'img/casa-amaro-sanchez-7.jpg', 'img/casa-amaro-sanchez-8.jpg', 'img/casa-amaro-sanchez-9.jpg',] },
    { id: 'Hollywood', titulo: 'Casa en Hollywood', ubicacion: 'Los Angeles, EEUU', descripcion: ['Las Bird Streets, en las colinas de Hollywood, son un emblema del glamour que unió a estrellas como Elizabeth Taylor y Katharine Hepburn. Hoy, esta zona exclusiva sigue siendo un refugio para celebridades, con villas llenas de estilo y un enclave que combina privacidad, lujo y la esencia del Hollywood más icónico.', 'En las colinas de Hollywood, Robert y Cortney Novogratz transformaron una villa de 1931 en un espacio contemporáneo y elegante. Duplicaron su tamaño manteniendo el espíritu original, convirtiendo el patio central en el corazón de la casa. Cada detalle refleja su visión: un lujo que honra la historia del lugar.'], img: 'img/casa-hollywood-1.jpg', imagenPrincipal: 'img/casa-hollywood-1.jpg', link: 'https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=Hollywood', gridImages: ['img/casa-hollywood-2.jpg', 'img/casa-hollywood-3.jpg', 'img/casa-hollywood-4.jpg', 'img/casa-hollywood-5.jpg', 'img/casa-hollywood-6.jpg', 'img/casa-hollywood-7.jpg', 'img/casa-hollywood-8.jpg', 'img/casa-hollywood-9.jpg',] },
    { id: 'Jaime-Salva', titulo: 'Casa de Jaime Salva', ubicacion: 'Mallorca, España', descripcion: ['Diseñar una casa en suelo rústico mallorquín supone un desafío normativo que Jaime Salvá Arquitectura superó con maestría. La combinación de tejas árabes, grandes ventanales y microcemento da como resultado una vivienda contemporánea que dialoga con el paisaje, manteniendo su esencia vernácula.', 'Esta vivienda mallorquina, diseñada por Jaime Salvá Arquitectura, equilibra tradición y modernidad. Con techos inclinados de teja y tonos ocres, se integra perfectamente en el entorno, mientras que las vistas abiertas, la ventilación cruzada y el uso del microcemento la convierten en un ejemplo de sofisticación contemporánea.'], img: 'img/casa-jaime-salva-1.jpg', imagenPrincipal: 'img/casa-jaime-salva-1.jpg', link: 'https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=Jaime-Salva', gridImages: ['img/casa-jaime-salva-2.jpg', 'img/casa-jaime-salva-3.jpg', 'img/casa-jaime-salva-4.jpg', 'img/casa-jaime-salva-5.jpg', 'img/casa-jaime-salva-6.jpg', 'img/casa-jaime-salva-7.jpg', 'img/casa-jaime-salva-8.jpg', 'img/casa-jaime-salva-9.jpg',] },
    { id: 'Plugia', titulo: 'Casa en Puglia', ubicacion: 'Puglia, Italia', descripcion: ['En Puglia, Andrew Trotter transformó una antigua escuela en un refugio mediterráneo donde la cal en las paredes y los materiales orgánicos narran la historia del lugar. Este Casolare Scarani, con un tamaño perfecto y una rica esencia histórica, conecta el pasado de la región con un diseño sobrio y auténtico.', 'Entre las colinas de Carovigno, Andrew Trotter encontró en una modesta masseria el lienzo ideal para su visión. Conservando su esencia como escuela de los años 60, logró un equilibrio entre el carácter histórico del edificio y un diseño minimalista que respeta las raíces locales.'], img: 'img/casa-puglia-1.jpg', imagenPrincipal: 'img/casa-puglia-1.jpg', link: 'https://jaumeesquerdo.github.io/proyecto-final/casas.html?id=Puglia', gridImages: ['img/casa-puglia-2.jpg', 'img/casa-puglia-3.jpg', 'img/casa-puglia-4.jpg', 'img/casa-puglia-5.jpg', 'img/casa-puglia-6.jpg', 'img/casa-puglia-7.jpg', 'img/casa-puglia-8.jpg', 'img/casa-puglia-9.jpg',] },
]

/* declaro las variables y constantes*/
const prevBtn = document.querySelector('.Slider-anterior');
const nextBtn = document.querySelector('.Slider-siguiente');
let currentIndex = 0;
let sliderImages; //no la inicializo aun

/* variables y constantes del mosaico */
const mosaicoBtn = document.getElementById("mosaicoBtn");
const gridBtn = document.getElementById("gridBtn");
const gridContainer = document.getElementById("gridCasa");
const mosaicoSpan = document.getElementById("mosaicoSpan");
const gridSpan = document.getElementById("gridSpan");



//función para obtener los parámetros de la URL
const obtenerParametroURL = (parametro) => {
    const params = new URLSearchParams(window.location.search); // window.location.search trae la parte de la URL después del signo ? para poder después modificarla
    return params.get(parametro);
    //con params.get() obtengo el parametro del id
}


// función para cargar los datos de la entrada.
const cargarEntrada = () => {
    const idCasa = obtenerParametroURL("id"); //agarra el Id de la casa
    const casa = casas.find((casa) => casa.id === idCasa); //busca la casa en el array que corresponde a ese id

    if (!casa) {
        //si no ha encontrado la casa...
        document.body.innerHTML = "<h2>Casa no encontrada</h2>";
        return;
    }


    /* aqui relleno los datos de la entrada*/
    document.getElementById('firstImg').src = casa.imagenPrincipal;
    document.getElementById('firstImg').alt = `Imagen principal de ${casa.titulo}`;
    document.getElementById('tituloCasa').textContent = casa.titulo;
    document.getElementById('ubicacion').textContent = casa.ubicacion;
    document.getElementById('descripcion1').textContent = casa.descripcion[0];
    document.getElementById('descripcion2').textContent = casa.descripcion[1];

    /* para cargar las imágenes del grid */
    const gridContainer = document.getElementById('gridCasa');
    casa.gridImages.forEach((src, i) => {
        const img = document.createElement("img");
        img.className = `Grid-casaItem Grid-casaItem--${i + 1}` // se le suma 1 al indice para que quede en su numero el de la entrada
        img.src = src;
        img.alt = `Foto de ${casa.titulo}`;
        img.loading = "lazy";
        gridContainer.appendChild(img);
    });
};





const cargarSlider = () => { //se encargar de generar las imagenes dentro de .Slider-images
    const idCasaActual = obtenerParametroURL("id"); //ID de la casa actual 
    const otrasCasas = casas.filter((casa) => casa.id !== idCasaActual); //filtra las cass cuyo ID no es el actual

    if (otrasCasas.length == 0) {
        console.log("no hay casas para mostrar");
        return;
    }

    const sliderContainer = document.getElementById("sliderImages");




    /* crear y añadir imagenes al Slider */
    otrasCasas.forEach((casa) => {

        //crear el enlace para redirigir
        const link = document.createElement("a");
        link.href = casa.link;
        link.className = "Slide-itemLink"


        //crear div
        const slideItem = document.createElement("div");
        slideItem.className = "Slide-item";

        const img = document.createElement("img");
        img.src = casa.imagenPrincipal;
        img.alt = `Imagen principal de ${casa.titulo}`;
        img.className = "Slider-image";
        img.loading = "lazy";


        //crear el texto para las img
        const texto = document.createElement("p")
        texto.className = "Slider-text";
        texto.textContent = casa.titulo;

        //añadir img y texto al contenedor
        slideItem.appendChild(img);
        slideItem.appendChild(texto);

        //añadir slideItem al enlace(img mas texto)
        link.appendChild(slideItem)

        //añadir el enlace al slider
        sliderContainer.appendChild(link);



    });
    sliderImages = document.querySelectorAll('.Slider-image'); //ahora si que se puede inicializar el slider, ya que ya están añadidas las imagenes dinámicas
    updateSlider();
}









function updateSlider() { //función para actualizar el slider(para ponerla cuando se hace click en anterior y siguiente)

    const offset = -currentIndex * 25; //como cada imagen ocupa el 25%,  se moverá un 50% cada vez que se haga click porque realmente mueve dos imagenes, el signo negativo lo mueve a la izq
    document.querySelector('.Slider-images').style.transform = `translateX(${offset}%)`; //genera con el offset adquirido el movimiento en .Slider-images

    /* blur para las imagenes del slider que están fuera y se ven solo un poco en la derecha*/
    sliderImages.forEach((img, i) => {
        if (i == currentIndex || i == currentIndex + 1) {
            img.classList.remove('--blur') // si la imagen es la primera en el index o la segunda se le quita el blur

        } else {
            img.classList.add('--blur'); // si no es ni la img 1 ni la 2, se añade el blur
        }

    });
    if (currentIndex == 0){
        prevBtn.style.display='none'; //ocultar el btn Anterior cuando esté en la primera posición, porque no tiene botón anterior
    } else{
        prevBtn.style.display = 'block';
    }


};

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { // verifica si no estamos en la primera imagen para retroceder
        currentIndex -= 2; //para retroceder dos imágenes

    } else {
        currentIndex = sliderImages.length - 2; //si estamos en las primeras imagenes, volvemos al final
    }
    updateSlider(); //actualiza el slider y mueve las imágenes a la posición correspondiente
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < sliderImages.length - 2) { //si no estamos en las dos ultimas imagenes...
        currentIndex += 2; // avanzamos dos imagenes

    } else {
        currentIndex = 0; // si no estamos en las primeras imagenes (es decir las ultimas ), para regresar a las primeras imágenes
    }
    updateSlider();
});

/* ARRASTRAR EL SLIDER */


/*MODO MOSAICO/GRID */


function toggleClass(button, span){
    //primero quitar la clase activa de los spans
    mosaicoSpan.classList.remove('isActive');
    gridSpan.classList.remove('isActive');

    //agregar la clase activa solo al span que le corresponde
    span.classList.add('isActive')
}


// para hacer el cambio a modo mosaico
mosaicoBtn.addEventListener("pointerdown", () => { //pongo pointerdown porque es como click pero sirve para movil tambien
    gridContainer.classList.remove("Grid-casa");
    gridContainer.classList.add("Mosaico");

    
    
});

//para hacer el cambio de vuelta al modo "normal" o "default"
gridBtn.addEventListener("pointerdown", () => {

    gridContainer.classList.remove("Mosaico");
    gridContainer.classList.add("Grid-casa");

    
    toggleClass(gridBtn, gridSpan);
});


/*agrego aqui los eventos a los botones MOSAICO/GRID */
mosaicoBtn.addEventListener('pointerdown',()=> toggleClass(mosaicoBtn, mosaicoSpan));
gridBtn.addEventListener('pointerdown',()=> toggleClass(gridBtn, gridSpan));




/*cargar los datos tanto de la entrada como los del slider (al cargar la página) */
window.addEventListener("DOMContentLoaded", () => {
    cargarEntrada();
    cargarSlider();
});
