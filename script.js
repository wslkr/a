$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $(".header").addClass("headeradd");
      $(".main").addClass("mainadd");
      $(".contents").fadeIn();
      $(".arrow").fadeOut();
    }
    else{
      $(".header").removeClass("headeradd");
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
 })

 //each of one
 $(document).ready(function(){
  var prevPosition = 0;
  $(window).on('scroll', function(event){
    var initPosition = $(this).scrollTop();
    if(initPosition < prevPosition){
      $(".close").fadeIn();
    } else {
      $(".close").fadeOut();
    }
    prevPosition = initPosition;
  });
  $(".up").hide();
  var upshow = $("#upshow").offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop()>upshow){
      $(".up").fadeIn();
    }
    else{
      $(".up").fadeOut();
    }
  });
 })