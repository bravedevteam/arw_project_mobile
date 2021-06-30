$(document).ready(function(){
	$(".btnDownload").click(function(e){
		e.preventDefault();

		$("#popWhitepaper").fadeIn(300);
		dim_open();
	});

	$("#dim").click(function(){
		$(".boxPopup").fadeOut(300);
		dim_close();
	});

	$(".boxPopup .close").click(function(e){
		e.preventDefault();
		
		$(this).parent().fadeOut(300);
		dim_close();
	});
	
	function dim_open(){
		$("body").css("overflow", "hidden");
		$("#dim").fadeIn(500);
	}
	function dim_close(){
		$("body").css("overflow", "auto");
		$(".basicPopup").removeClass("active");
		$("#dim").fadeOut(500);
	}
});