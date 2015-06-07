$(function(){

	$(window).bind('scroll resize', function(){
		var $this_Top=$(this).scrollTop();

		if($this_Top > 500){	
			$('.navbar').addClass('nav-color');
		}
		if($this_Top < 500){
			$('.navbar').removeClass('nav-color');
		}

	}).scroll();

	$('.home').click(function(){ 
		$('html,body').animate({scrollTop:$('#header').position().top}, 800);
		return false;
	});	
	$('.about').click(function(){ 
		$('html,body').animate({scrollTop:$('#about').position().top}, 800);
		return false;
	});
	$('.work').click(function(){ 
		$('html,body').animate({scrollTop:$('#portfolio').position().top}, 800);
		return false;
	});
	$('.contact').click(function(){ 
		$('html,body').animate({scrollTop:$('#contact').position().top}, 800);
		return false;
	});
	$('.page-down').click(function(){ 
		$('html,body').animate({scrollTop:$('#about').position().top}, 800);
		return false;
	});

});