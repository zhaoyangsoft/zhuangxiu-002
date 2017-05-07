//导航
function baise(n){
		var daqb;
	daqb=document.getElementById("dahbq"+n);
	if (daqb.className!="gerbj")
	document.getElementById("dahbq"+n).className="gerbjh";
	var imgbai="/Public/images/dhrk_pc1."+n+".png"
	document.getElementById("dhpc"+n).src=imgbai;
	}
function hufu(n){

	daqb=document.getElementById("dahbq"+n);
	if (daqb.className!="gerbj")
	document.getElementById("dahbq"+n).className=" ";
	var imgbui="/Public/images/dhrk_pc"+n+".png"
	document.getElementById("dhpc"+n).src=imgbui;
	}

//优执
function yosmov(n){
	document.getElementById("ysbtmov"+n).className="gre";
	var yspcm="/Public/images/soy_ys1."+n+".jpg"
	document.getElementById("yspc"+n).src=yspcm;
	}
function yosout(n){
	document.getElementById("ysbtmov"+n).className="";
	var ysmout="/Public/images/soy_ys"+n+".jpg"
	document.getElementById("yspc"+n).src=ysmout;
	}
//流程
function liucmov(n){
	document.getElementById("licbt"+n).className="gre";
	var yspcm="/Public/images/yu_lc1."+n+".png"
	document.getElementById("lcpc"+n).src=yspcm;
	}
function liucout(n){
	document.getElementById("licbt"+n).className="";
	var ysmout="/Public/images/yu_lc"+n+".png"
	document.getElementById("lcpc"+n).src=ysmout;
	}
setTimeout(function(){  
$(function(){
var cc;
cc=$('#dhbjqu').text();
$(".baij_dlcn ul li").eq(cc).addClass("gerbj");
});},10);