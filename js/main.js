$(function(){
	var menu = $('.navbar');
	var nav_toggle = $('#nav-toggle');
	var menu_button = menu.find('li a');
	var firstNum = 70;
	var secondNum = 70;
	var thridNum = 70;
	var count = $('.value');

	
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

	// language
	$('#ed').click(function(){
		$('#enContent').show().siblings('.infoContent').hide();
	});
	$('#ch').click(function(){
		$('#chContent').show().siblings('.infoContent').hide();
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 1000){
			// console.debug('123');
			showProgress();
		}
	});

	function showProgress(){
		// $('#firstValue').text(firstNum);
		// $('#secondValue').text(secondNum);
		// $('#thirdValue').text(thridNum);
		// $('.value').each(function () {
		//     $(this).prop('Counter',0).animate({
		//         Counter: $(this).text()
		//     }, {
		//         duration: 2000,
		//         easing: 'swing',
		//         step: function (now) {
		//             $(this).text(Math.ceil(now));
		//         }
		//     });
		// });

		$('#firstValue').css('width',''+firstNum+'%');
		$('#secondValue').css('width',''+secondNum+'%');
		$('#thirdValue').css('width',''+thridNum+'%');
	}

	//resize of background img
	function backImgResize(){
		var height = $(window).height();
		$('#header').css('height',height);
	}

	backImgResize();

	$(window).resize(function(){
		backImgResize();
	});



	nav_toggle.click(function(e){
		e.preventDefault();
		menu.stop().toggleClass('active');
		this.classList.toggle( "active" );
	});
	//work show and hide 
	$('.close-btn').click(function(){
		$('.my-work').fadeOut();
		$('.carousel').hide();
	});

	function showOut(n){
		if(n==1){
			$('#Demo1-Carousel').show();
			$('.my-work').fadeIn();
		}else {
			$('.my-work').fadeIn();
			$('#Demo2-Carousel').show();
		}

	}
	$('#portfolio1').click(function(){
		showOut(1);
	});
	$('#portfolio2').click(function(){
		showOut(2);
	});
	$.getJSON('js/infor.json',function(data){
		console.log(data);
	});
	
	//carousel slider 
	$( ".carousel" ).carousel({ 
		interval: 5000 
	});

});