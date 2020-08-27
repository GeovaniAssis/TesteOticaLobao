$(function(){

  // --------Maenu Scrol
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 50) { $('.navbar').addClass('drop'); } else { $('.navbar').removeClass('drop'); }

    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      if (scrollPos > 50) {
        $('.navbar').addClass('drop');
      } else {
        $('.navbar').removeClass('drop');
      }
    });   

  // --------Menu Mobile
    $('.hamburguer-bt, #fundoMenu').click(function(){
      $('#opcao_menu').css({'transition':'none'});

      if( $('.hamburguer-bt').hasClass('activo')  ){
        $('.hamburguer-bt').removeClass('activo');
        $('#opcao_menu').slideUp();
        $('#fundoMenu').removeClass('activo');
        $('nav.navbar').removeClass('activo');
      }else{
        $('.hamburguer-bt').addClass('activo');
        $('#opcao_menu').slideDown();
        $('#fundoMenu').addClass('activo');
        $('nav.navbar').addClass('activo');
      }
    });

  // --------Carrossel

    $('#carrossel_marca').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: false,
      speed: 400,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });

});