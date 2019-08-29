$(document).ready(function(){
  $(".contents > *").hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $(".header").addClass("headeradd");
      $(".main").addClass("mainadd");
      $(".contents > *").fadeIn();
      $(".arrow svg").fadeOut();
    }
    else{
      $(".header").removeClass("headeradd");
      $(".main").removeClass("mainadd");
      $(".contents > *").fadeOut();
      $(".arrow svg").fadeIn();
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
 var closetop = $("#closehide").offset().top;
  $(window).scroll(function(){
    if($(this).scrollTop()>closetop){
      $(".close").fadeOut();
    }
    else{
      $(".close").fadeIn();
    }
  });
  $(".up").hide();
  $(window).scroll(function(){
    var upshow = $("#upshow").offset().top;
    if($(this).scrollTop()>upshow){
      $(".up").fadeIn();
    }
    else{
      $(".up").fadeOut();
    }
  });
  $(window).scroll(function(){
    if($(window).scrollTop() == $(document).height()-$(window).height()){
      $(".close").fadeIn();
    }
  });
  $(function(){
    $(".archive_list").draggable({containment:"body"})
  });
  $("#menu_open").click(function(){
    $(".archive_list").show();
    $("#menu_open").hide();
    $("#menu_close").show();
  });
  $("#menu_close").click(function(){
    $(".archive_list").hide();
    $("#menu_open").show();
    $("#menu_close").hide();
    $(".archive_list").animate({"margin-top":"5em", "margin-left":"1.8em"},100)
  });

})