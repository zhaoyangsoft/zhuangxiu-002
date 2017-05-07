
//商品分类
$(function(){
	$(".pic_news_mode").hover(function(){
			$(this).find(".pic_news_tc").animate({height:"+140px",left:"0",bottom:"0"},200);
		},
		function(){
			$(this).find(".pic_news_tc").animate({height:"0",left:"0",bottom:"0"},200);
		})
		$(".menulink").mouseover(function(){
	$(this).children(".menuhide").show();
	})
	$(".menulink").mouseout(function(){
	$(this).children(".menuhide").hide();
	})
	$(".denlu_after").mouseover(function(){
	$(this).children(".graz_menu").show();
	})
	$(".denlu_after").mouseout(function(){
	$(this).children(".graz_menu").hide();
	})
		
	$(".h2_cat h3").bind({
		mouseenter:function(){
			$(this).siblings().show();
			$(this.lastChild).hide();
			$(this).parent().addClass("active_cat");
		},
		mouseleave:function(){
			$(this).siblings().hide();
			$(this.lastChild).show();
			$(this).parent().removeClass("active_cat");
		}
	})
	$(".h3_cat").bind({
		mouseenter:function(){
			$(this).show();			
			$(this).prev()[0].lastChild.style.display = "none";
			$(this).parent().addClass("active_cat");
		},
		mouseleave:function(){
			$(this).hide();
			$(this).prev()[0].lastChild.style.display = "block";
			$(this).parent().removeClass("active_cat");
		}
	});


//首横向页二级导航
	$('.nav_c').find('a').each(function(i){
		$(this).hover(
			  function(){  
				  //鼠标滑过
				  for(j=0;j<=7;j++){
					  if(i == j){
						   $("#menu_" + j).addClass('hover');
						   $("#nav_c_nr_" + j).slideDown(250);
						   $("#menu_" + j).prev().removeClass('dqye');
					  } else {
						  $("#menu_" + j).removeClass('hover');
						  $("#nav_c_nr_" + j).slideUp(250);
					  }
				  }
			  },
			  function(){
				  //鼠标划出
			  }
		);
	});
	$('#nav_menu').hover(function(){},function(){
			
		 for(j=0;j<=7;j++){
			  if(j == 0){
				  $("#menu_" + j).addClass('hover');
				  $("#nav_c_nr_" + j).slideDown(250);
			  } else {
				  $("#menu_" + j).removeClass('hover');
				  $("#nav_c_nr_" + j).slideDown(250);
			  }
		  }
			 								   
	});


//head购物车弹出	
$(".menulink").mouseover(function(){
	$(this)[0].className="gerbj";
	$(this).children("div").show();
	$(this).children().siblings("b").addClass("nd-hover");
	$(this).addClass("menulink_hover");
})
$(".menulink").mouseout(function(){
	$(this)[0].className=" ";
	$(this).children("div").hide();
	$(this).children().siblings("b").show().removeClass("nd-hover");
	$(this).removeClass("menulink_hover");
})

$("#syslink").mouseover(function(){
	$(this).children("div").show();
})
$("#syslink").mouseout(function(){
	$("#sysdiv").hide();
})

})

