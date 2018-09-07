$(document).ready(function(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  console.log('Width:'+ windowWidth);
  console.log('Height:'+ windowHeight);

  //$('.align-items-center').css({'height': windowHeight });

  $('.gallery-slider').bxSlider({
    auto:true,
    pagerCustom:'.bx-pager'
  });

  $('.testimony-slider').bxSlider({
    auto:true,
    controls:false
  });

})
