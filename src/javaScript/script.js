$(document).ready(function () {
    //Menu mobile;
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    //Script de Sombras e pequenas animações na navbar;
    const sections = $('section');
    const navItems = $('.nav-item');
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        //Animação de transição na navBar;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
    });

    //Animações de Delay
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 3000,
        distance: '20%',
    });
    ScrollReveal().reveal('#banner', {
        origin: 'bottom',
        duration: 3000,
        distance: '20%',
    });
    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    });
});