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
    if($('#dropdownmenu').css('display') == 'none'){
      $(this).css("background-image", "url(../images/exit.png)");
    } else {
      $(this).css("background-image", "url(../images/menu.png)");
    }
    $('#dropdownmenu').slideToggle('slow');
  });

});
