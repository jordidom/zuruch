;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

// Función para subir al inicio de la página
function subir() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Función para mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
    var botonSubida = document.getElementById("botonSubida");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonSubida.style.opacity = 1;
        botonSubida.style.visibility = 'visible';
    } else {
        botonSubida.style.opacity = 0;
        botonSubida.style.visibility = 'hidden';
    }
};