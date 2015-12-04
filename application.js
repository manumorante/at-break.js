$(document).ready(function() { setLayout(); });
$(window).resize(function(e) { setLayout() });

function setLayout(){
  $(".info-window").html($(window).width() +" x "+ $(window).height() +" px");
  $(".info-container").html($(".container").width() +" x "+ $(".container").height() +" px");
  $(".breakpoint").html(
    breakpoint().horizontal +"<sup>"+ breakpoint().horizontalValue +"</sup> x "+ breakpoint().vertical +"<sup>"+ breakpoint().verticalValue +"</sup>");
  }
  
