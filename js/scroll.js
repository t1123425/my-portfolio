$(function(){
	var firstNum = 70;
	var secondNum = 70;
	var thridNum = 70;
	var count = $('.value');



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
	$('.about,.page-down').click(function(){ 
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

	$(window).scroll(function(){
		if($(this).scrollTop() > 1000){
			// console.debug('123');
			showProgress();
		}
	});

	function showProgress(){
		$('#firstValue').text(firstNum);
		$('#secondValue').text(secondNum);
		$('#thirdValue').text(thridNum);
		$('.value').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});

		$('#firstValue').css('width',''+firstNum+'%');
		$('#secondValue').css('width',''+secondNum+'%');
		$('#thirdValue').css('width',''+thridNum+'%');
	}
});