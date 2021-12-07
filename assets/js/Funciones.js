
// Sroll

$(document).ready(function(){
  // $('body').scrollspy({target: ".navbar", offset: 50});   
  resize();
  var typed = new Typed('#DesarrolloWeb', {
    strings: ["Desarrollador Web.", "Frond y Backend."],
    typeSpeed: 40,
    loop : false , 
    loopCount : Infinity
  });
 
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

function resize() {
  if(window.innerWidth <= 870){
    $("#Menu").addClass('fixed-bottom');
    $("#Menu").removeClass('fixed-top');
    $(".TitleRuta").addClass('d-none');
    $("#Logo").addClass('d-none');
  }else{
    $("#Menu").removeClass('fixed-bottom');
    $("#Menu").addClass('fixed-top');
    $(".TitleRuta").removeClass('d-none');
    $("#Logo").removeClass('d-none');
  }
  
}

window.onresize = resize;
var RutaAnterios = ''
function VerRuta(Ruta){      
    if(RutaAnterios != ''){
      RutaAnterios = Ruta
    }else{
      if(RutaAnterios != Ruta){
        // alert(RutaAnterios)
        // alert(Ruta)
      }
    }
    

}