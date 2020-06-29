$(document).ready(function(){
    
    
    //header 네비게이션 스크롤  
    var navOffset = $('.header_con').offset();
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){
            $('.header_con').addClass('header_fixed');
        }
        else{
            $('.header_con').removeClass('header_fixed');
        }
    })

    //header 네비게이션 sub_menu
    $('.main_menu>li').mouseenter(function(){
        $('.sub_menu').show();
    });
    $('header').mouseleave(function(){
        $('.sub_menu').hide();
    })
    
    
    
    //NOTICE slide
    var swiper = new Swiper('.notice-swiper-container', {
      direction: 'vertical',
      loop : true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    
    //NOTICE CARE toggle
    $('.notice_line_con_right>a').click(function(){
        $('.notice_card').slideToggle();
        
        
    //NOTICE CARD slide
        var swiper = new Swiper('.card-swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
        
    })
    
    //NEW MENU slide
    var swiper = new Swiper('.new-swiper-container', {
          slidesPerView: 1.5,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    
    //NEW MENU CONTROL
    $('.new_slide_label').click(function(){
        $('.new_slide_type').slideToggle();
    })

    
    
    //EVENT slide
    
    var swiper = new Swiper('.event-swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      /*
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      */
    });
    
    
    //footer family site
    $('.footer_familysite_label').click(function(){
        $('.footer_familysite_link').slideToggle();
    })
    
})
