$(function(){
	var k,g,m;
	$("#zsxxk ul li").each(function(k){
	
		
		$(this).click(function(){
		$("#zsxxk ul li.dyj:not(focus)").css({background:"#fff",color:"#333"});
		$("#zsxxk ul li.dyj:not(focus) p").css("border-right","1px solid #ccc");
		$("#zsxxk ul li.dyj:last p").css("border","0px");
		//$("#zsxxk ul li.dyj").focus(function(){ $(this).css({background:"#9bc700",color:"#fff"});})
		//$("#zsxxk ul li.dyj").eq(k).css({background:"#9bc700"});
		$(this).css({background:"#9bc700",color:"#fff"});
		$("#zsxxk ul li.dyj p").eq(k).css({border:"0px"});
	//$("#zsxxk ul li.dyj:eq(k)").css({color:"#fff"});
		var turl = "./styles/xxkt0"+k+".jpg";
		$("#xxkt img").attr("src",turl);
	});
	
	
	/*	$(this).hover(function(){
			$(this).css({background:"#9bc700"});
			},
			function(){
			$(this).css({background:"#fff"})
			}
		);*/
		$("#ldx .bbjysk").each(function(g){
			$(this).mouseover(function(){
				m = 55+g*176;
				$("#ldx .bbjysk:not(focus)").css("background-position-y","0px");
				$(this).css("background-position-y","-341px");
				$("#jiant").css({left:m});
				switch(g){
					case 0:
					$("#bbjcpyser p").html("1. 自有品牌'帝仕蒂妮'新品首发，雄厚背景，超高参数产品，1.5厚橡木表皮，彰显自产优势 2. 全系马可波罗瓷砖 3. 国际标准内门，环保标准远超国家标准 4. 高标的门五金 5. 20mm石英石台面的极致 洁具全系HCG和成卫浴 6.行业顶级地漏 7. 厨卫吊顶采用行业顶级品牌友邦集成吊顶 8. 厨房全系BLUM 奥地利原装进口骑马阻尼抽屉");
					break;
					case 1:
					$("#bbjcpyser p").html("1. 包管道隔音处理，减少噪音污染 2. 环保乳胶漆、环保地板 3. 超环保木门 4. 橱柜高度高度可选择（充分考虑到夫妻双方及南北身高差异）5.吊柜免拉手:减少油烟堆积易于清洁 6.150MM调料拉篮和300MM拉篮可选满足不同户型的需求。7.阻尼静音滑轨，让厨房不再乒乒乓乓响个不停  8. 水盆改为台下盆，更加便于清理 9.飘窗不限尺寸都免费 10. 阳台低于150的窗台瓷砖满贴 11. 马桶后面安装插座，支持升级智能马桶12. 卫生间、主卧标配USB的插座，给手机充电带来极大的便利 13.卧室设计了双控开关 14. 卧室小夜灯设计，起夜不用开大灯 15.除霾新风系统 16.增加地柜铰链灯，让光线照耀到想要的每一处 17. 增加厨房挂杆，使厨房更加方便烹饪");
					break;
					case 2:
					$("#bbjcpyser p").html("1. 产品配置明明白白 2. 工艺标准清清楚楚 3. 施工进度实时播报 4. 与硬装产品无缝衔接的软装产品，一站式选购");
					break;
					case 3:
					$("#bbjcpyser p").html("1. 全屋电线国标不小于2.5平，安全用电，从芯防护。 2. 卫生间1.8米防水，远超国家标准0.3米要求 3. 阳台地面标配防水 4. 卧室标配入墙上式小夜灯，避免儿童玩耍夜灯带来的风险 5. 光波浴霸避免传统浴霸对儿童的视力伤害 6. 厨卫插座标配带防溅盒，防护到位 7. 厨房小铰链灯，让黑暗无从遁形");
					break;
					case 4:
					$("#bbjcpyser p").html("1. 客厅精选壁纸装饰，简约、新中、简欧随心选择 2. 风格各异的卫生间瓷砖，仿石材、仿壁纸纹理，简约而不简单 3. 厨房经典的白色墙面，灰色地面搭配，没有过多的颜色掺杂其中，简洁而明快 4. 白色亮面吊柜设计质感强烈,搭配木纹下柜，厨房显得清新自然而不失温暖");
					break;
					case 5:
					$("#bbjcpyser p").html("1. 壁纸的升级 2. 墙地砖的升级 3. 乳胶漆颜色的升级 4. 台上盆更改为台下盆 5. 乳胶漆基础工艺的升级 6. 针对部分用户电视墙墙体不能开深槽安装50管，研发了可以不用开槽的电视管线收纳线槽 7. 玄关柜模块化蜂窝鞋 8. 模块化快装式顶角线 9.针对用户提出的无设计师针对现场空间布局指导，研发了可视化 10. 研发了可以放置手机的可充电插座基于用户思维，优化设计流程 11. 站在用户的立场，将产品配置描述清晰 12. 以用户能看的明白的形式展示专业的工艺标准流程");
					break;
					
				}

			});
		
		});	
	});
});


var web_share = function(id, t){
    var url,content,image = '',title = document.title;
    url = 'http://www.youzhu.com/Yuyue/bbj13';

    if (id == 1) {
        content = '百变加V1.3，#让装修更"省"#。省心：一键下单，轻松搞定所有家装环节；省钱：大自然地板、马可波罗瓷砖、潜水艇地漏、海尔整体橱柜，只需599元/平米！让每一份钱都花在刀刃上；省时：施工流程全监管，再也不用每天跑工地！还有更多优惠，戳我戳我：';
        image = 'http://www.youzhu.com./styles/xxkt00.jpg';
    }

    if (id == 2) {
        content = '百变加V1.3，#让装修更"省"#。省心：一键下单，轻松搞定所有家装环节；省钱：大自然地板、马可波罗瓷砖、潜水艇地漏、海尔整体橱柜，只需599元/平米！让每一份钱都花在刀刃上；省时：施工流程全监管，再也不用每天跑工地！还有更多优惠，戳我戳我：';
        image = 'http://www.youzhu.com./styles/xxkt00.jpg';
    }

    if (t=='weibo') {
        void((function(s,d,e,r,l,p,t,z,c){var f='http://service.weibo.com/share/share.php?searchPic=false&c=',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent,'','', image, content,url,'utf-8'));
    }
    if (t=='tqq') {
        window.open('http://v.t.qq.com/share/share.php?title='+encodeURIComponent(content)+'&url='+encodeURIComponent(url)+'&source=bookmark','_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
    }
    if (t=='renren') {
        window.open('http://share.renren.com/share/buttonshare.do?link=' + url + '&title=' + encodeURIComponent(content), 'renren', 'scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
    }
    if (t=='douban') {
        window.open('http://shuo.douban.com/!service/share?image=&href=' + url + '&name='+encodeURIComponent(title) +'+&text='+encodeURIComponent(content), 'douban', 'scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
    }
    if (t=='kaixin001') {
        window.open('http://www.kaixin001.com/~repaste/repaste.php?rtitle='+encodeURIComponent(title)+'&rurl='+encodeURIComponent(url)+'&rcontent='+encodeURIComponent(content),'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
    }
};









