import 'node_modules/owl.carousel/dist/owl.carousel.min.js';
import 'node_modules/jquery/dist/jquery.min.js';


//================ toggle-button

document.getElementById("mobile-menu-button").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("hidden");
});


//================ owl-carousel-events-slider

jQuery(document).ready(function() {
    jQuery(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        nav: true,
        dots: false
    });
});