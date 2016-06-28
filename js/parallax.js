$(document).ready(function(){
 

	var ancho = $(window).width();
 
// Si trabajamos con una imagen desactivamos el background-size:cover;
	if (ancho <= 768){

		$('.principal').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});


		$('.').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});

	}



	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('.principal').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('.acerca').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});


	
 
});