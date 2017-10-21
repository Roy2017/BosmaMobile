// JavaScript Document
$(function(){

	var windowHeight = $(window).height()/2;
	$(".to-top").hide();

	$(window).scroll(function(){
		if($(document).scrollTop()>windowHeight){
			$(".to-top").fadeIn();
		}else{
			$(".to-top").fadeOut();
		}
	});
	$(".to-top").click(function(){

		$('body').animate({scrollTop:0},500);
	});
});