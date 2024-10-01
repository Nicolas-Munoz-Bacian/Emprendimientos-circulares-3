new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

// Pagination bullets
pagination: {
    el: '.swiper-pagination',
    clickblade: true,
    dynamicBullets: true,
},

// Nvigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// Responsive breakpoints
breakpoints: {
    0: {
        slidePerView: 1
    },

    768: {
        slidePerView: 2
    },
    
    1024: {
        slidePerView: 3
    },
}
})

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickblade: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsve breakpoints
    breakpoints: {
        0: {
            slidePerView: 1
        },
        620: {
            slidesPerview: 2
        },

        1024: {
            slidesPerview: 3
        }
    }
  });


  
  jQuery('document').ready(function($){

    var subir= $('.back-to-top');

    subir.cliick(function(e){
        e.preventDefault();

        $('html,body').animate({scrollTop: 0}, 500);
    });

    subir.hide();

    $(window).scroll(function()){

       if( $(this).scrollTop() > 200) {
        subir.fadeIn();
       }else {
        subir.fadeOut();
       }

    }

  });


  
  let listVideo = document.querySelectorAll('.video_list .vid');
  let mainVideo = document.querySelector('.main-video video');
  let tittle = document.querySelectorAll('.main-video .tittle');
  
  listVideo.forEach(video =>{
      video.onlick = () =>{
          listVideo.forEach(vid => vid.classList.remove('active'));
          video.classList.add('active');
          if(video.classList.contains('active')){
              let src = video.children[0].getAttribute('src');
              mainVideo.src = src;
              let text = video.children[1].innerHTML;
              tittle.innerHTML = text;
          }
      };
  });
  const videos = document.querySelectorAll('.vid'); // Selecciona todos los elementos con la clase 'vid'

videos.forEach(video => {
  video.addEventListener('click', () => {
    // Elimina la clase 'active' de todos los videos
    videos.forEach(v => v.classList.remove('active'));

    // Agrega la clase 'active' al video que se hizo clic
    video.classList.add('active');
  });
});

/*-------- HEADER Y MENÚ--------*/
 
 function marcarMenuActivo() {
  const urlActual = window.location.pathname; // Obtiene la ruta de la página actual
  const enlacesMenu = document.querySelectorAll('.header__menú__link'); // Selecciona todos los enlaces del menú

  enlacesMenu.forEach(enlace => {
    if (enlace.href.includes(urlActual)) {
      enlace.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
    }
  });
}

// Ejecuta la función al cargar la página
window.onload = marcarMenuActivo;


/*-------- NOTICIAS --------*/

const btnIrAModule = document.querySelector('.btn_Ver');

btnIrAModule.addEventListener('click', () => {
  // Obtiene la posición actual del botón
  const topPosition = btnIrAModule.offsetTop;

  // Mueve el botón hacia arriba
  btnIrAModule.style.top = `${topPosition - 10}px`; // Ajusta la cantidad de píxeles que quieres mover el botón

  // Agrega un pequeño retraso para que el botón se mueva antes de que se active el enlace
  setTimeout(() => {
    // Aquí se activa el enlace del botón
  }, 100); // Ajusta el tiempo de retraso según sea necesario
});

/*---VOLVER ARRIBA--- */

const botonVolver = document.getElementById('volver-cabecera');

botonVolver.addEventListener('click', () => {
    document.querySelector('logo_Empremdimientos_circulares').scrollIntoView({ behavior: 'smooth' });
});

const btnVolverArriba = document.querySelector('.btn-volver-arriba');

if (window.innerWidth <= 768) { // Verifica el ancho de la pantalla
  btnVolverArriba.style.display = 'none'; // Oculta el botón
}