$(document).ready(function(){
	$(".btnDownload").click(function(e){
		e.preventDefault();

		$("#popWhitepaper").fadeIn(300);
		$("#dim").fadeIn(300);
	});

	$("#dim").click(function(){
		$(".boxPopup").fadeOut(300);
		$(this).fadeOut(300);
	});

	$(".boxPopup .close").click(function(e){
		e.preventDefault();
		
		$(this).parent().fadeOut(300);
		$("#dim").fadeOut(300);
	});
});