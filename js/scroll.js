$(function(){

	$(window).bind('scroll resize', function(){
		var $this = $(this);
		var $this_Top=$this.scrollTop();

		if($this_Top > 500){	
			$('.navbar').css({"background-color":"#18bc9c",
							  "transition": "background-color 0.5s linear", 
							"-moz-transition":"background-color 0.5s linear",  
							"-webkit-transition":"background-color 0.5s linear", 
							"-ms-transition":"background-color 0.5s linear" 
								});
		}
		if($this_Top < 500){
			$('.navbar').css({"background-color":"transparent"});
		}

	}).scroll();

});