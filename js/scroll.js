$(function(){

	$(window).bind('scroll resize', function(){
		var $this = $(this);
		var $this_Top=$this.scrollTop();

		if($this_Top > 300){	
			$('#nav-toggle').css({"background-color":"#18bc9c"});
		}
		if($this_Top < 300){
			$('#nav-toggle').css({"background-color":"transparent"});
		}

	}).scroll();

});