// Loader inicial
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.animation = "fadeOut 1s forwards";
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none"; 
            document.getElementById("c_all").style.display = "flex";
        }, 1000);
    }, 4000); //6000
});

// Escritura del loader
const typed = new Typed('.typed',{
    strings:[
        '<i class="loader">Bienvenido a el portafolio de Arley Mantilla</i>'
    ],
    typeSpeed: 25
});

// Escritura de habilidades
const typedh = new Typed('.habilidades', {
    strings: [
        '<i class="habilidades">liderazgo</i>',
        '<i class="habilidades">empatía</i>',
        '<i class="habilidades">responsabilidad</i>',
        '<i class="habilidades">adaptabilidad</i>'
    ],
    typeSpeed: 65,
    loop: true,
    backDelay: 100,
    showCursor: true,
    backSpeed: 75
});

//Animaciones Scroll
const proyectos = document.getElementById("s_projects");
const lenguajes = document.getElementById("c_lenguajes");
const about_me = document.getElementById("e_main");
const estudios = document.getElementById("s_estudios");

const cargarproyectos = (entradas,observador)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }else(
            entrada.target.classList.remove('visible')
        )
    })
}

const observador = new IntersectionObserver(cargarproyectos,{
    root: null,
    rootMargin: '0px',
    threshold:0.1
});

observador.observe(proyectos);
observador.observe(lenguajes);
observador.observe(about_me);
observador.observe(estudios);


const t_about = document.getElementById("t_about");
const p_about = document.getElementById("p_about");
const b_mision = document.getElementById("b_mision");
const b_vision = document.getElementById("b_vision");
const b_sobremi = document.getElementById("b_sobremi");

//Oprimir boton Mision
b_mision.addEventListener('click', () => {
    // Destruir cualquier instancia previa de Typed
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }

    // Crear una nueva instancia de Typed
    window.typedInstance = new Typed('#t_about', {
        strings: ['Misión🪬'],
        typeSpeed: 25,
        backSpeed: 10, 
        startDelay: 100,
        loop: false
    });

    window.typedInstance = new Typed('#p_about', {
        strings: ['Contribuir al desarrollo de soluciones tecnológicas innovadoras y de impacto social, impulsando la eficiencia y el bienestar a través de software de calidad. Mi compromiso con el aprendizaje constante, la empatía y el liderazgo me permite colaborar de manera efectiva y responsable en la transformación digital de las organizaciones.'],
        typeSpeed: 25,
        backSpeed: 1,
        startDelay: 100,
        loop: false
    });
});

//Oprimir boton Vision
b_vision.addEventListener('click', () => {
    // Destruir cualquier instancia previa de Typed
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }

    // Crear una nueva instancia de Typed
    window.typedInstance = new Typed('#t_about', {
        strings: ['Visión🚀'],
        typeSpeed: 50,
        backSpeed: 10,
        startDelay: 100,
        backDelay: 1000,
        loop: false
    });

    window.typedInstance = new Typed('#p_about', {
        strings: ['Ser reconocido como un desarrollador backend confiable y visionario, capaz de liderar proyectos que revolucionen la industria tecnológica y promuevan un cambio positivo en la sociedad, mientras inspiro y colaboro con otros profesionales en la búsqueda de la excelencia y la innovación continua.'],
        typeSpeed: 50,
        backSpeed: 1,
        startDelay: 100,
        backDelay: 1000,
        loop: false
    });
});