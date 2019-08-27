$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $(".header").addClass("headeradd");
      $(".menu").addClass("menuadd");
      $(".main").addClass("mainadd");
      $(".contents").fadeIn();
      $(".arrow").fadeOut();
    }
    else{
      $(".header").removeClass("headeradd");
      $(".menu").removeClass("menuadd");
      $(".main").removeClass("mainadd");
      $(".contents").fadeOut();
      $(".arrow").fadeIn();
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $(".intro").addClass("transform");
    }
    else{
      $(".intro").removeClass("transform");
    }
  });
  var itrh = $(".intro").offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop()>itrh){
      $(".contact").css("transform","skewY(-5deg)");
    }
    else{
      $(".contact").css("transform","skewY(0deg)");
    }
  });
  var prevPosition = 0;
  $(window).on('scroll', function(event){
    var initPosition = $(this).scrollTop();
    if(initPosition > prevPosition){
      //
    } else {
      //
    }
    prevPosition = initPosition
  });
 }) 