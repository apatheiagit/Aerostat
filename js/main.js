$(document).ready(function(){  

    // Открывание и закрывание меню
    if($("a.sandwitch:visible").length>0){
      $(".nav-menu").removeClass("visible-md").removeClass("visible-lg").hide();
    }
    $('a.sandwitch').on("click", nav_toggle);


    // Активация слайдера
    $('.owl-my').owlCarousel({
      items:4,
      loop:true,
      center:true,
      margin:10,
      autoplayHoverPause:true,
      nav: true,
      navText:["<img src='http://placehold.it/20x20'>","<img src='http://placehold.it/20x20'>"],
      responsive:{
        0:{
          items: 1,
          nav:true
        },
        992:{
          items: 4,
          nav: true
        }
      }
    });
    $('#tabs ul li a').click(function(){
        $('.tabs-text').addClass('hidden');
        $($(this).attr('href')).removeClass('hidden');        
    });
    $('.accordion__title').click(function(){
      $('.accordion__title').removeClass('open');
      $(this).addClass('open');
      $('.accordion__text').addClass('hidden');
      $(this).next('.accordion__text').removeClass('hidden');
    });

});

// Функция раскрытия меню
function nav_toggle(){
  $(".nav-menu").slideToggle(400);
}

$( window ).resize(function() {
  if($("a.sandwitch:visible").length>0){
    $(".nav-menu").removeClass("visible-md").removeClass("visible-lg").hide();
  }else{
     $(".nav-menu").addClass("visible-md").addClass("visible-lg").show();
  }
});