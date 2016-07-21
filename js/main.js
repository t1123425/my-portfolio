$(function(){
	var menu = $('.navbar');
	var nav_toggle = $('#nav-toggle');
	var menu_button = menu.find('li a');

	var count = $('.value');


	
	$('.home').click(function(){ 
		$('html,body').animate({scrollTop:$('#header').position().top}, 800);
		menu.removeClass('active');
		nav_toggle.removeClass('active');
		return false;
	});	
	$('.about,.page-down').click(function(){ 
		$('html,body').animate({scrollTop:$('#about').position().top}, 800);
		menu.removeClass('active');
		nav_toggle.removeClass('active');
		return false;
	});
	$('.work').click(function(){ 
		$('html,body').animate({scrollTop:$('#portfolio').position().top}, 800);
		menu.removeClass('active');
		nav_toggle.removeClass('active');
		return false;
	});
	$('.contact').click(function(){ 
		$('html,body').animate({scrollTop:$('#contact').position().top}, 800);
		menu.removeClass('active');
		nav_toggle.removeClass('active');
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
		var winWidth = $(window).width();

		if($(this).scrollTop() > 1000 &&  winWidth > 796){
			// $(this).off('scroll');
			setTimeout(function(){
				showProgress();
			},500);
			
		}else if($(this).scrollTop() > 1200 && winWidth < 426){
			setTimeout(function(){
				showProgress();
			},500);
		}
		if($(this).scrollTop() > 2000 &&  winWidth > 796){
			showOut();
		}else if($(this).scrollTop() > 2800 && winWidth < 426){
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
		$('.websiteLink').html("");
	});

	
	
	
	
	//carousel slider 

		$( ".carousel" ).carousel({ 
			interval:  false
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
	//work loading
	function workLoad(n,p){
		var div ="";
		var imgDiv = "";
		for(i=0;i<p;i++){
			imgDiv += "<div class='item'><img src='img/portfolio/work"+n+"/demo"+(i+1)+".png' class='img-responsive'></div>";
			div += "<li data-target='#Demo-Carousel' data-slide-to="+i+"></li>";
		}
		$('.carousel-inner').html(imgDiv);
		$('.carousel-indicators').html(div);
		$('.carousel-inner').find('.item').eq(0).addClass('active');
		$('.carousel-indicators li').eq(0).addClass('active');
		$('#demo').show();
		$('.my-work').fadeIn();
	}

	// get work content from JSON 
	function getWorkData(n){
		$.getJSON('js/infor.json',function(data){
			$('.chInfo').text(data[n].ch);
		    $('.enInfo').text(data[n].en);
		});
	}

	$('#portfolio1').click(function(){
		workLoad(1,3);
		getWorkData(0);
	});
	$('#portfolio2').click(function(){
		workLoad(2,3);
		getWorkData(1);
		$('.websiteLink').html("<a href='https://www.qmi.emome.net/' target='_blank' class='urlLink'>Visit site</a>");
	});
	$('#portfolio3').click(function(){
		workLoad(3,4);
		getWorkData(2);
		
	});
	$('#portfolio4').click(function(){
		workLoad(4,2);
		getWorkData(3);
		$('.websiteLink').html("<a href='http://www.nuibi168.com/Home/Index' target='_blank' class='urlLink'>Visit site</a>");
	});
	$('#portfolio5').click(function(){
		workLoad(5,10);
		getWorkData(4);
	});
});