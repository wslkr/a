$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>1){
      $('.main').css('background','#00f');
    }
    else{
      $('.main').css('background','#fff');
    }
  });
});