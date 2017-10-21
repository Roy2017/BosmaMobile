$(document).ready(function(){
	m_prod_catalog2();
	m_prod_catalog();
	
$("#ads1").hover(function(){
	var self=$(this);
	self.children(".ads1box").show();
},
function(){
	var self=$(this);
	self.children(".ads1box").hide();
}
)

 $("#zc").click(function(){
 $("#mybox").fadeIn();
  $(".bglayout").fadeIn();
})

$("#dl").click(function(){
 $("#logindiv").fadeIn();
 $(".bglayout").fadeIn();
})
$(".close_x").click(function(){
	$(this).parent().hide();
	 $(".bglayout").hide();
})


$(window).scroll(function() {		
		if($(window).scrollTop() >= 150){
			$('.backtop').fadeIn(300); 
		}else{    
			$('.backtop').hide();    
		}  
	});
	$('.backtop').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});	
	
	
	//下拉菜单
	$(".navinput p").click(function(){
		var ul=$(this).next(".new");
		if(ul.css("display")=="none"){
			ul.slideDown();
		}else{
			ul.slideUp();
		}
	});
	
	$(".set").click(function(){
		var _name = $(this).attr("name");
		if( $("[name="+_name+"]").length > 1 ){
			$("[name="+_name+"]").removeClass("select");
			$(this).addClass("select");
		} else {
			if( $(this).hasClass("select") ){
				$(this).removeClass("select");
			} else {
				$(this).addClass("select");
			}
		}
	});
	
	$(".navinput li").click(function(){
		var li=$(this).text();
		$(this).parent("ul").prev("p").html(li);
		//$(".navinput p").html(li);
		$(".new").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select") ;   
	});

});

function m_prod_catalog2(){
	$("#navfilter").hover(
		function(){
			var self = $(this);
			self.children("#navclass").stop(true,true).show();
		},
		function(){
			var self = $(this);
			self.children("#navclass").stop(true,true).hide();
		}
	);
};

function m_prod_catalog(){
	$("#navclass > li").hover(
		function(){
			var self = $(this);
		
			self.addClass("hover").children(".navbox").stop(true).animate({'width': 158+'px'}, 500);
		},
		function(){
			var self = $(this);
			self.children(".navbox").stop(true).animate({'width': 0}, 500);
			//slideUp
			self.removeClass("hover");
		}
	);
};




$(function(){
	$('#navigation li a').append('<span class="hover"></span>')
	$('#navigation li a').hover(function(){
		$('.hover', this).stop().animate({'opacity': 1}, 700,'easeOutSine')
	},function(){
		$('.hover', this).stop().animate({'opacity': 0}, 700, 'easeOutQuad')
	});
	
});
	

$(function(){
  $(".bxslider li ul li").hover(function(){ 
    $(".x",this).stop().css({'left':'35px'}).animate({'left':"40px"},400).show();
    $(".y",this).stop().css({'right':'35px'}).animate({'right':"40px"},400).show();
    $('.fire',this).fadeIn(500);
  },function(){
    // $('.x, .y',this).stop().animate({"top":"30px"},400);
    $('.fire, .x, .y',this).fadeOut(500);
  }); 
});


