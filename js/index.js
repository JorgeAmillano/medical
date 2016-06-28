/* MENU RESPONSIVE */
var contador = 0;

$( '#btn-menu' ).click(function() {
  if(contador == 0){

  $('#menu > ul').css('display', 'block');
  $('#menu > ul').css('-webkit-transition', '0.5s');
  $('#menu > ul').css('transition', '0.5s');

  contador = 1;

}else{

    $('#menu > ul').css('display', 'none');

    contador = 0;
  }

});


$( "nav > ul > li >a" ).click(function() {
  
  $('#menu > ul').css('display', 'none');

});


/** BARRA DE MENU APARECE */
$(document).ready(function(){
	$(window).scroll(function(event){

			var y = $(this).scrollTop();
			var ancho = $(window).width();


			if(y >= 40 && ancho >= 769){

        $('#menu').addClass('menu');
        $('#menu > a > img').css('top', '7px');
        $('#menu > a > img').css('width', '47px');
        $('#menu > a > img').css('height', '39px');
        $('.principal').css('height', '70vh');
        

			}else{
				
        $('#menu').removeClass('menu');
        $('#menu > a > .logo1').css('top', '50px');
        $('#menu > a > .logo1').css('width', '61px');
        $('#menu > a > .logo1').css('height', '50px');
       

			}
		

	});


	
	 
		
});








/*EFECTO SCROLL SMOOTH*/


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);

   
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);

        return false;
      }
    }
  });
});



