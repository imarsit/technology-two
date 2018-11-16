
includeScript('/public/javascripts/core2.min.js');
includeScript('/public/javascripts/main-script.min.js');
includeScript('/public/javascripts/html5shiv.min.js');
includeScript('/public/javascripts/owl.carousel.js');
includeScript('/public/javascripts/respond.min.js');
includeScript('/public/javascripts/smoothscrolling.js');




function includeScript(url) {
	document.write('<script type="text/javascript" src="'+ url + '"></script>'); 
	return false;
}