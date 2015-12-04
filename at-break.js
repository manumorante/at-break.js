$(document).ready(function() { setLayout(); });
$(window).resize(function(e) { setLayout() });

function setLayout(){
  $(".info-window").html($(window).width() +" x "+ $(window).height() +" px");
  $(".info-container").html($(".container").width() +" x "+ $(".container").height() +" px");
  $(".breakpoint").html(
    breakpoint().horizontal +"<sup>"+ breakpoint().horizontalValue +"</sup> x "+ breakpoint().vertical +"<sup>"+ breakpoint().verticalValue +"</sup>"
    );
  }

/*
  MM Breakpoint v1
  Manu Morante
  21/05/2014
*/

// Breakpoint
function breakpoint(){
  // Media Query Horizontal Breakpoints Values (mobile first)
  var hor_xs = 480,   // Xtra Small
      hor_sm = 768,   // Small
      hor_md = 992,   // Medium
      hor_lg = 1200,  // Large

  // Vertical Proportional Breakpoints
      ratio = 9/16, // 16:9 widescreen
      ver_xs = hor_xs * ratio,
      ver_sm = hor_sm * ratio,
      ver_md = hor_md * ratio,
      ver_lg = hor_lg * ratio,
      
      $window = $(window),
      W = $window.width(),
      H = $window.height();
  
    var hor = "none", hor_val = 0;
    if     (W >= hor_xs && W < hor_sm) { hor = "xsmall"; hor_val = 1; }  
    else if(W >= hor_sm && W < hor_md) { hor = "small";  hor_val = 2; }
    else if(W >= hor_md && W < hor_lg) { hor = "medium"; hor_val = 3; }
    else if(W >= hor_lg)               { hor = "large";  hor_val = 4; }
  
    var ver = "none", ver_val = 0;
    if     (H >= ver_xs && H < ver_sm) { ver = "xsmall"; ver_val = 1; }  
    else if(H >= ver_sm && H < ver_md) { ver = "small";  ver_val = 2; }
    else if(H >= ver_md && H < ver_lg) { ver = "medium"; ver_val = 3; }
    else if(H >= ver_lg)               { ver = "large";  ver_val = 4; }
  
  return {
    horizontal: hor,
    vertical: ver,
    horizontalValue: hor_val,
    verticalValue: ver_val
  };
};
  
