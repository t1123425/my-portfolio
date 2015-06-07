function parallax(){
	var prlx_lyr_1 = document.getElementById('header-image');
	prlx_lyr_1.style.top = -(window.pageYOffset / 4)+'px'; 
}

window.addEventListener("scroll", parallax, false);