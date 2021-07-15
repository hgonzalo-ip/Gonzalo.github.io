$('.multiple-items').slick({
    centerMode: true,
  centerPadding: '90px',
  arrows: false,
  slidesToShow: 3.5,
  slidesToScroll: 3.5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});
// Sroll
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   
});

//Footer 
function SobreDe(Nombre, none){
  $(Nombre).addClass('text-light');
  $(none).addClass('text-light');
  
}
function FueraDe(Nombre, none){
  $(Nombre).removeClass('text-light');  
  $(none).removeClass('text-light');
}
function Overlay(NombreClass){   
  $(NombreClass).css('display', 'block');
}

function DeleteOverlay(NombreClass){   
  $(NombreClass).css('display', 'none');
}