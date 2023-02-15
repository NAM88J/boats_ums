$('.homeslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    customPaging: function(slider, i) {
        return '<span></span>';
    },
    prevArrow: '<span class="arrow arrow_prev"></span>',
    nextArrow: '<span class="arrow arrow_next"></span>'
});

$('.maincontent_img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.maincontent_img-nav',
});
$('.maincontent_img-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.maincontent_img-main',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 788,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});

$(document).on('click', '.mobile_button, .header .menu.active a, .header .menu .close', function(e){
    e.preventDefault();
    $('.header .menu, .mobile_button').toggleClass('active');
});
$('.faq_item-button').on('click', function(e){
    e.preventDefault();
    let parent = $(this).parents('.faq_item'),
        all_element = $('.faq_item');
    all_element.removeClass('active');
    parent.addClass('active');
});

$(document).on('click', '.menu a[href^="#"], .slowmove', function (e) {
    e.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});

$(document).on('click', '.modal_link', function(e){
    e.preventDefault();
    let target_id = $(this).data('id'),
        target_window = $('.modal_windows[data-id="' + target_id + '"]'),
        custom_fon = $('.modal_fon');
    if (!custom_fon.hasClass('active')) {
        custom_fon.addClass('active').fadeIn('200');
        target_window.addClass('active').fadeIn('800');
    }
});

$(document).on('click', '.modal_windows .close, .modal_fon', function(e){
    e.preventDefault();
    let target_window = $('.modal_windows.active'),
        custom_fon = $('.modal_fon');
    if (custom_fon.hasClass('active')) {
        custom_fon.removeClass('active').fadeOut('800');
        target_window.removeClass('active').fadeOut('200');
    }
});