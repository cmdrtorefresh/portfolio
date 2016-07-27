$(document).ready(function(){

  $('menuitem').mouseenter(function(){
    $(this).animate({
      opacity: "+=0.5"
    },200);
  }).mouseleave(function(){
    $(this).animate({
      opacity: "-=0.5"
    },200);
  });

  $('menulogo').click(function(){
    $('#sidemenu').animate({
      left: "+=100%"
    },200);
  });
});
