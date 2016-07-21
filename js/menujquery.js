$(document).ready(function(){
  $('menuitem').mouseenter(function(){
    $(this).animate({
      opacity: "+=0.5"
    },150);
  }).mouseleave(function(){
    $(this).animate({
      opacity: "-=0.5"
    },150)
  });
});
