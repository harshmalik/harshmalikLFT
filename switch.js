var l1=1;
function changeBackground(){
if(l1==1){
var n=document.getElementById('university');

n.id="u1";
var m=document.getElementById('body')
m.className="b1";
l1++;
}
else{
var n=document.getElementById('u1');

n.id="university";
var m=document.getElementById('body')
m.className="b2";
l1=1;
}
}
var e=document.getElementById('switch');
e.addEventListener('click', changeBackground, false);
var l=1;
var menu=document.getElementById('menuLogo');
function disp()
{
var displays1=document.getElementsByTagName('ul');
var disp1=document.getElementsByTagName('li');

var width=window.innerWidth;
if(l==1&&width<1000)
{
alert(width);
displays1[0].id="menu_inlineR";
l++;
}
else if(l==1)
{
displays1[0].id="menu_inline";
l++;
}
else{
displays1[0].id="menuXinline";
l=1;
}


}
menu.addEventListener('click',disp,false);

do{

var i=1;

var sshow=document.getElementsByClassName("slideshow-class-goes-here");
for(var q=1;q<3;q++)
{

var n1=setInterval(function(){sshow[0].id="slideshow-class-goes-here"+i;i++;
clearInterval(n1);
},5000);
}
c++;
}while(c>50);