$(document).ready(function() {

    console.log('Script is running!');

    // formstyler
    setTimeout(function() {
        $('.styler').styler();
    }, 100);

    // --- .top-meu ---
    // добавление класса к панелименю при прокрутке вниз
    $topMenu = $('.top-menu');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50 && !$topMenu.hasClass('scrolled')) {
            $topMenu.addClass('scrolled');
        }
        if ($(window).scrollTop() < 50) {
            $topMenu.removeClass('scrolled');
        }
    });

    // прокрутка к блоку
    $('.js-scroll-link').click(function(e) {
        e.preventDefault();
        var $target = $(this).attr('data-target');
        var $targetOffset = $('.' + $target).offset().top - 20;
        var $duration = 700;
        if ($targetOffset > 1000) {
            $duration = 900;
        }
        if ($targetOffset < 1000) {
            $duration = 700;
        }
        $('html, body').animate({
            scrollTop: $targetOffset
        }, {
            queue: false,
            easing: 'easeOutCubic',
            duration: $duration
        });
    });


    // --- .steps ---
    //вкладки
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').css({
                    opacity: '0'
                }).removeClass('active').eq($(this).index()).animate({
                    opacity: '1'
                }, 200).addClass('active');
        });
    });

    // --- .works ---
    // swiper слайдер
    var mySwiper = new Swiper('.works__slider', {
        loop: true,
        speed: 400,
        threshold: 100,
        effect: 'fade',
        fade: {
            crossFade: true
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    // --- .context ---
    // скрытие border на item
    $('.context-products__item').each(function() {
        if ($(this).hasClass('active')) {
            $(this).prev().css('border-right', '0');
        }
    });
    // --- .pack-1 ---
    // дроп списка на ссылке
    var $ddListOpen = false;
    $('.js-hover-dd-toggle').on('mouseenter', function() {
        $(this).find('.dd-list').stop().fadeIn(200);
        $ddListOpen = true;
    });
    $('.js-hover-dd-toggle').on('mouseleave', function() {
        $(this).find('.dd-list').stop().fadeOut(200);
        $ddListOpen = false;
    });

    // $('.js-hover-dd-toggle').on('touchstart click', function(e) {
    //     e.preventDefault();
    //     if ($ddListOpen === false) {
    //         $(this).find('.dd-list').stop().fadeIn(200);
    //         $ddListOpen = true;
    //     } else {
    //         $(this).find('.dd-list').stop().fadeOut(200);
    //         $ddListOpen = false;
    //     }
    // });

    // слайдер
    var mySwiper2 = new Swiper('.pack__slider.ps_1', {
        loop: false,
        speed: 400,
        threshold: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        slidesOffsetBefore: -250,
        onReachEnd: function (swiper) {
            console.log('end');
            $('.last-slide.ls1').addClass('show').animate({opacity: '1'}, 500);
        },
        onSlidePrevStart: function (swiper) {
            console.log('back');
            $('.last-slide.ls1').removeClass('show').animate({opacity: '0'}, 100);
        }
        //mousewheelControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
    });
    var mySwiper3 = new Swiper('.pack__slider.ps_2', {
        loop: false,
        speed: 400,
        threshold: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        slidesOffsetBefore: -250,
        onReachEnd: function (swiper) {
            console.log('end');
            $('.last-slide.ls2').addClass('show').animate({opacity: '1'}, 500);
        },
        onSlidePrevStart: function (swiper) {
            console.log('back');
            $('.last-slide.ls2').removeClass('show').animate({opacity: '0'}, 100);
        }
        //mousewheelControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
    });
    var mySwiper4 = new Swiper('.pack__slider.ps_3', {
        loop: false,
        speed: 400,
        threshold: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        slidesOffsetBefore: -250,
        onReachEnd: function (swiper) {
            console.log('end');
            $('.last-slide.ls3').addClass('show').animate({opacity: '1'}, 500);
        },
        onSlidePrevStart: function (swiper) {
            console.log('back');
            $('.last-slide.ls3').removeClass('show').animate({opacity: '0'}, 100);
        }
        //mousewheelControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
    });
    var mySwiper5 = new Swiper('.pack__slider.ps_4', {
        loop: false,
        speed: 400,
        threshold: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        slidesOffsetBefore: -250,
        onReachEnd: function (swiper) {
            console.log('end');
            $('.last-slide.ls4').addClass('show').animate({opacity: '1'}, 500);
        },
        onSlidePrevStart: function (swiper) {
            console.log('back');
            $('.last-slide.ls4').removeClass('show').animate({opacity: '0'}, 100);
        }
        //mousewheelControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
    });

    // --- .popup ---
    //magnific popup
    $('.js-popup-open').magnificPopup({
        type: 'inline',
        preloader: false,
        mainClass: 'mfp-fade',
        removalDelay: 160,
        closeMarkup: '<button title="Закрыть" class="mfp-close"></button>',
        callbacks: {
            open: function() {
                $('.styler').trigger('refresh');
            },
        },
    });
    //маска телефона
    var rusRegex =  {
      onKeyPress: function(cep, e, field, options){
       console.log(cep, e, field, options);
        //if(cep.length == 2){if((cep[0]=='+')&&(cep[1]=='7')) {e.target.value = '+7 ';}}
        if(cep.length == 4){if(cep[3]!=='9') {e.target.value = '+7 ';}}
        $('.phone_regex').mask('+7 000 000 00 00', rusRegex);
      },placeholder : ['+7 925 555 35 15']
    };
    $('.phone_regex').mask('+7 000 000 00 00', rusRegex);

    var IntRegex =  {
      onKeyPress: function(cep, e, field, options){
        if(cep.length == 2){if((cep[0] == '+') && (cep[1] == '8')) {e.target.value = '+7 ';}}
        $('.phone_regex__international').mask('+0 000 000 00 00', IntRegex);
      },placeholder : ['+7 925 555 35 15']
    };
    $('.phone_regex__international').mask('+0 000 000 00 00', IntRegex);

    // function result() {
    //     var input_1 = document.forms['phoneChecker']['input_1'].value.replace(/\D/g, '');
    //     var input_2 = document.forms['phoneChecker']['input_2'].value.replace(/\D/g, '');
    //     var input_3 = document.forms['phoneChecker']['input_3'].value.replace(/\D/g, '');
    //     var input_4 = document.forms['phoneChecker']['input_4'].value.replace(/\D/g, '');
    //     var display = document.getElementById('result');
    //     display.innerHTML = '<label style="height:6px;"></label><label>input_1:&nbsp;' + input_1 + '</label><label>input_2:&nbsp;' + input_2 + '</label>' +
    //         '<label style="height:2px;"></label><label>input_3:&nbsp;' + input_3 + '</label><label>input_4:&nbsp;' + input_4 + '</label>';
    //     return false;
    // }
});
