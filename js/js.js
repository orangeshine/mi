window.onload =function()
{
if(navigator.userAgent.indexOf("MSIE") > -1)
{
	document.write('<body style="text-align:center;"></body>')
	document.write('<img  style="display:block;width:171px;margin:50px auto;text-align:center;" src="img/robot.png">'); 
	document.write('<p style="text-align:center;font-size:18px;color:#AAAAAA;">你正在使用一个过时的浏览器,请更换你的浏览器以查看本页面。</p>');  
}

}

var cart = document.getElementById('cart');
var cartmenu = document.getElementById('cartmenu');
var cartmenudiv = cartmenu.getElementsByTagName('div')[0];
cart.onmouseover = function()
{
	cart.style.background = '#fff';
	cart.style.color = '#ff6700';
	cartmenu.style.height = 100+'px';
}
cart.onmouseout = function()
{
	cart.style.background = '#424242';
	cart.style.color = '#b0b0b0';
	cartmenu.style.height = 0;
}//购物车

var searchtext = document.getElementById('search-text');
var searchhotwords = document.getElementById('search-hot-words');
searchtext.onfocus = function()
{
	searchhotwords.style.display = 'none';
}
searchtext.onblur = function()
{
	searchhotwords.style.display = 'block';
}

var categoryList = document.getElementById('J_categoryList');
var categoryitem = categoryList.getElementsByTagName('li');
var itembox = categoryList.getElementsByTagName('div');
var atitle = getByClass(categoryList, 'title');

for(var i=0;i<atitle.length;i++)
{0
	var boxul = itembox[i].getElementsByTagName('ul');
	itembox[i].style.width = boxul.length*265+'px';
	atitle[i].index = i;
	itembox[i].index = i;

	itembox[i].onmouseover = atitle[i].onmouseover = function()
	{
		for(var i=0;i<atitle.length;i++)
		{	
		atitle[i].style.background = '';
		atitle[i].style.color = '';
		}	
		atitle[this.index].style.background = '#ff6700';
		atitle[this.index].style.color = '#fff';
		itembox[this.index].style.display = 'block';
	}
	itembox[i].onmouseout = atitle[i].onmouseout = function()
	{
		for(var i=0;i<atitle.length;i++)
		{	
		atitle[i].style.background = '';
		atitle[i].style.color = '';
		}
		itembox[this.index].style.display = 'none';				
	}
}//左侧产品菜单

var odiv = document.getElementById('lunbo');
var oul = odiv.getElementsByTagName('ul')[0];
var tli = oul.getElementsByTagName('li');
var ool = odiv.getElementsByTagName('ol')[0];
var oli = ool.getElementsByTagName('li');
var pre = document.getElementById('pre');
var onext = document.getElementById('next');

var now = 0;
for(var i=0;i<oli.length;i++)
{
	oli[i].index = i;

	oli[i].onclick = function()
	{						
		now = this.index;
		tab();
	}
}

function tab(){
	
for(var j=0;j<oli.length;j++)
{
	oli[j].className ='';
	move(tli[j], {opacity:0});							
}
oli[now].className ='click';

move(tli[now], {opacity:100});
}

pre.onclick = function(){
	now--;
	if(now == -1)
	{
		now = oli.length-1;
	}
	tab();
}

onext.onclick = function(){
	now++;
	if(now == oli.length)
	{
		now=0;
	}
	tab();
}

var timer0 = setInterval(onext.onclick, 3000);
odiv.onmouseover = function()
{
	clearInterval(timer0);
	move(onext, {opacity:100});
	move(pre, {opacity:100});
};
odiv.onmouseout = function()
{
	timer0 = setInterval(onext.onclick, 3000);
	move(onext, {opacity:0});
	move(pre, {opacity:0});
};//图片轮播

var headernav = document.getElementById('header-nav');
var siteheadr = document.getElementById('site-headr');
var navitem = getByClass(headernav, 'nav-item');
var navmenu = getByClass(siteheadr, 'navmenu');


for(var i=0;i<7;i++)
{
	navitem[i].index = i;
	navmenu[i].index = i;
	navitem[i].onmouseover = navmenu[i].onmouseover = function()
	{
		for(var i=0;i<navmenu.length;i++)
		{
			navmenu[i].style.display = 'none';
		}
		navmenu[this.index].style.display = 'block';
	}
	navitem[i].onmouseout = navmenu[i].onmouseout = function()
	{
		for(var i=0;i<7;i++)
			{
				navmenu[i].style.display = 'none';
			}
	}
}//导航栏子菜单

var boxhd = document.getElementById('boxhd');
var boxbd = document.getElementById('boxbd');
var boxhda = boxhd.getElementsByTagName('a');
var boxbdul = boxbd.getElementsByTagName('ul')[0];

var boxhd2 = document.getElementById('boxhd2');
var boxbd2 = document.getElementById('boxbd2');
var boxhda2 = boxhd2.getElementsByTagName('a');
var boxbdul2 = boxbd2.getElementsByTagName('ul')[0];


function startab(a, ul)
{
	a[0].onclick = function()
	{
		ul.style.marginLeft = 0;
		a[1].style.color = "#b0b0b0";
		a[0].style.color = "#e0e0e0";

	}
	a[1].onclick = function()
	{
		ul.style.marginLeft = -1240+"px";
		a[0].style.color = "#b0b0b0";
		a[1].style.color = "#e0e0e0";
	}
	function autostar()
			{
				if(ul.style.marginLeft == 0+"px")
				{
					ul.style.marginLeft = -1240+"px";
					a[0].style.color = "#b0b0b0";
					a[1].style.color = "#e0e0e0";
				}
				else
				{
					ul.style.marginLeft = 0;
					a[1].style.color = "#b0b0b0";
					a[0].style.color = "#e0e0e0";
				}
			}

	var timer = null;
	timer = setInterval(autostar,3000);
				
	for(var i=0;i<2;i++)
	{
		a[i].onmouseover = function()
		{
			clearInterval(timer);
		}
		a[i].onmouseout = function()
		{
			timer = setInterval(autostar,3000);
		}
	}
}
startab(boxhda, boxbdul);
startab(boxhda2, boxbdul2);
//明星单品

var chakanall = document.getElementById('chakanall');
var chakanalli = chakanall.getElementsByTagName('i')[0];
chakanall.onmouseover = function()
{
	chakanall.style.color = '#ff6700';
	chakanalli.style.background = '#ff6700';
}
chakanall.onmouseout = function()
{
	chakanall.style.color = '#000';
	chakanalli.style.background = '#b0b0b0';
}//查看全部 移入移出效果

var switchiem = document.getElementsByClassName('switchiem');
var reviewwrapper = document.getElementsByClassName('reviewwrapper');

for(var i=0;i<switchiem.length;i++)
{
	switchiem[i].index = i;
	switchiem[i].onmouseover = function()
	{	
		reviewwrapper[this.index].style.height = 75+'px';
	}
	switchiem[i].onmouseout = function()
	{
		reviewwrapper[this.index].style.height = 0;
	}
}//鼠标移入 评价内容高度从0变到75

var matchul = document.getElementsByClassName('switchul');
var tabswitch = document.getElementsByClassName('tabswitch')[0];
var tabswitchli = tabswitch.getElementsByTagName('li');
var matchul2 = document.getElementsByClassName('switchul2');
var tabswitch2 = document.getElementsByClassName('tabswitch2')[0];
var tabswitchli2 = tabswitch2.getElementsByTagName('li');
var matchul3 = document.getElementsByClassName('switchul3');
var tabswitch3 = document.getElementsByClassName('tabswitch3')[0];
var tabswitchli3 = tabswitch3.getElementsByTagName('li');

function switchtab(tabli, contentul)
{
	for(var i=0;i<tabli.length;i++)
	{
		tabli[i].index = i;
		tabli[i].onmouseover = function()
		{
			for(var i=0;i<contentul.length;i++)
			{
				contentul[i].style.display = 'none';
				tabli[i].className = ''
			}
			contentul[this.index].style.display = 'block';
			tabli[this.index].className = 'tabactive';
		}
	}
}
switchtab(tabswitchli, matchul);
switchtab(tabswitchli2, matchul2);
switchtab(tabswitchli3, matchul3);
//选项卡
var content = document.getElementById('content');
var conul = document.getElementsByClassName('conul');
var conpre = content.getElementsByClassName('pre');
var connext = content.getElementsByClassName('next');
var papersul = document.getElementsByClassName('papersul');
var papersli = null;
for(var i=0;i<conul.length;i++)
{
	conpre[i].index = i;
	connext[i].index = i;
	conul[i].now = 0;
	conpre[i].onclick = function()
	{		
		if(conul[this.index].style.left === 0+'px')
		{
			return;
		}

		papersli = papersul[this.index].getElementsByTagName('li');
		for(var i=0;i<papersli.length;i++)
		{
			papersli[i].className = '';
		}
		conul[this.index].now--;
		papersli[conul[this.index].now].className = 'papershover';
		conul[this.index].style.left = -296*conul[this.index].now+'px';
	}
	connext[i].onclick = function()
	{
		if(conul[this.index].style.left === -888+'px')
		{
			return;
		}

		papersli = papersul[this.index].getElementsByTagName('li');
		for(var i=0;i<papersli.length;i++)
		{
			papersli[i].className = '';
		}
		conul[this.index].now++;
		papersli[conul[this.index].now].className = 'papershover';
		conul[this.index].style.left = -296*conul[this.index].now+'px';
	}
}//内容 4个图片切换tab

function getByClass(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}
function getStyle(obj, name)
{
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj, false)[name];
	}
}

function move(obj, jason, fn)
{
	clearInterval(obj.timer); 
	obj.timer = setInterval(function()
	{
		var mstop = true;

			for( var attr in jason)
			{
				var cur = 0;
				if(attr == 'opacity')
				{
					cur =Math.round(parseFloat(getStyle(obj, attr))*100);
				}
				else
				{
					cur = parseInt(getStyle(obj, attr));
				}					

				var speed = (jason[attr] - cur)/6;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);  

				if(attr == 'opacity')
				{
					obj.style.opacity = (cur+speed)/100;
					obj.style.filter = 'alpha(opacity:'+cur+speed+')'
				}
				else
				{
					obj.style[attr] = cur+speed+'px';   
				}

				if(cur != jason[attr]) 
				{
					mstop = false;
				}
				
			}
		if(mstop == true) 
		{
			clearInterval(obj.timer);
			if(fn)fn();
		}
		
	},30)
}
