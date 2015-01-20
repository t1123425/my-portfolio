$(function(){
//mobile Navigation bar
var buttom-icon = $('.nav-button-icon');
var pageWidth= $(window).width();
var menu = $('.nav-row');
var menu_buttom = menu.find('li a');

			$('.nav-button').toggle(
			function(){
				menu_buttom.animate({height:"50%",width:"50%"});
			});
			if(pageWidth < 767){
				menu_buttom.click(
					function(){
						menu.slideUp();
					});
			}



});