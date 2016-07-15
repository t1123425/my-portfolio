//mobile Navigation bar
var pageWidth= $(window).width();
var menu = $('.nav-row');
var nav_toggle = $('#nav-toggle');
var menu_button = menu.find('li a');




 nav_toggle.click(
		function(e){
			e.preventDefault();
			menu.stop().slideToggle();
			this.classList.toggle( "active" );
 });
 
if($(window).width() < 767){

		menu_button.click(function(e){
			e.preventDefault();
			nav_toggle.removeClass("active");
			menu.stop().slideToggle();
		});
}


$(window).resize(function(){
	
	if($(window).width() < 767){

		menu_button.click(function(e){
			e.preventDefault();
			// nav_toggle.removeClass("active");
			// menu.stop().slideToggle();
		});
	}else{
		menu.show();
		menu_button.click(function(e){
			e.preventDefault();
			menu.css("display","block");
		});
	}

});
	






// if($(window).width() < 768){
// 	nav_toggle.click(
// 		function(e){
// 			e.preventDefault();
// 			this.classList.toggle( "active" );
// 			menu.stop().slideToggle();
// 	});
// 	$('.nav a').click(
// 			function(e){
// 				e.preventDefault();
// 				nav_toggle.removeClass("active");
// 				menu.stop().slideToggle();
// 	});

// }


// $(window).resize(function(){

// 	if($(window).width() > 769){
// 		menu.show();
// 	 	$('.nav a').click(
// 			function(e){
// 				e.preventDefault();
// 				menu.show();
// 		});
// 	}
// });