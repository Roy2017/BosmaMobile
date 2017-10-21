// JavaScript Document
$(function(){
	dropDown(".nav_btn","nav");
	dropDown(".follow>a",".follow_con");
});

function dropDown(btn,box){
  var $btn=$(btn);
  var $box=$(box);
  $btn.click(function(){
	  if($box.is(":visible")){
		 $box.slideUp(500);
	  }else{
		 $box.slideDown(500);
	  }
	  return false;
  });
}