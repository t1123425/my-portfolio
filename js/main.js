$(function(){
	var menu = $('.navbar');
	var nav_toggle = $('#nav-toggle');
	var menu_button = menu.find('li a');
	// var firstNum = 70;
	// var secondNum = 70;
	// var thridNum = 70;
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

	$(window).on('scroll',function(){
		if($(this).scrollTop() > 1000){
			// $(this).off('scroll');
			setTimeout(function(){
				showProgress();
			},500);
			
		}
		if($(this).scrollTop() > 2000){
			showOut();
		}
	});

	function showProgress(){
		$('#htmlValue').add('#cssValue').text(90);
		$('#jsValue').text(80);
		$('#nodeValue').add('#dbValue').text(60);
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

		$('.html').add('.css3').css('clip','rect(10px 150px 150px 0px)');
		$('.Js').css('clip','rect(20px 150px 150px 0px)');
		$('.nodeJS').add('.MongoDB').css('clip','rect(45px 150px 150px 0px)');
		
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
		
	});

	function popUp(n){
		if(n == 1){
			$('#demo1').show().siblings('.workContent').hide();
			$('.my-work').fadeIn();
		}else {
			$('.my-work').fadeIn();
			$('#demo2').show().siblings('.workContent').hide();
		}

	}
	$('#portfolio1').click(function(){
		$('#demo1').show().siblings('.workContent').hide();
		$('.my-work').fadeIn();
	});
	$('#portfolio2').click(function(){
		$('#demo2').show().siblings('.workContent').hide();
		$('.my-work').fadeIn();
	});
	$('#portfolio3').click(function(){
		$('#demo3').show().siblings('.workContent').hide();
		$('.my-work').fadeIn();
	});

	// $.getJSON('js/infor.json',function(data){
	// 	console.log(data);
	// });
	
	//carousel slider 
	$( ".carousel" ).carousel({ 
		interval: 5000 
	});

	// work showout
	function showOut(){
		var workList = $('.portfolio-item');
		a = 0;
		for(i=0 ;i<workList.length;i++){
			setTimeout(function(){
				workList.eq(a).css('transform','scale(1)');
				a++;
			},500*i);
		}

	}
	
});