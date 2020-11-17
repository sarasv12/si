var ac1=function()
{
var a1=document.getElementById("a1");
var s1=document.getElementById("s1");
var v1=document.getElementById("v1");

s1.autoplay=true;
s1.load();

if ("s1"=="s1")
{
setTimeout(stop2,1000);
}
}

var ac2=function()
{
var a2=document.getElementById("a2");
var s2=document.getElementById("s2");
var v2=document.getElementById("v2");

s2.autoplay=true;
s2.load();

if ("s2"=="s2")
{
setTimeout(stop2,1000);
}
}

var ac3=function()
{
var a3=document.getElementById("a3");
var s3=document.getElementById("s3");
var v3=document.getElementById("v3");

s3.autoplay=true;
s3.load();

if ("s3"=="s3")
{
setTimeout(stop2,1000);
}
}

var sp1=function()
{
var p1=document.getElementById("p1");
var m1=document.getElementById("m1");
var sn1=document.getElementById("sn1");

sn1.autoplay=true;
sn1.load();

if ("sn1"=="sn1")
{
setTimeout(stop2,1000);
}
}

var sp2=function()
{
var p2=document.getElementById("p2");
var m2=document.getElementById("m2");
var sn2=document.getElementById("sn2");

sn2.autoplay=true;
sn2.load();

if ("sn3"=="sn3")
{
setTimeout(stop2,1000);
}
}


var sp3=function()
{
var p3=document.getElementById("p3");
var m3=document.getElementById("m3");
var sn3=document.getElementById("sn3");

sn3.autoplay=true;
sn3.load();

if ("sn3"=="sn3")
{
setTimeout(stop2,1000);
}
}


var sp4=function()
{
var p4=document.getElementById("p4");
var m4=document.getElementById("m4");
var sn4=document.getElementById("sn4");

sn4.autoplay=true;
sn4.load();

if ("sn4"=="sn4")
{
setTimeout(stop2,1000);
}
}

var botona1=function()
{
	var crew=document.getElementById("an1");
	crew.className="crewi";
	var bot=document.getElementById("botona1");
	bot.className="botona1i";
	var screw=document.getElementById("crew");
	screw.autoplay=true;
	screw.load();
	setTimeout(an1,5000);
}

var an1=function()
{
	var c=document.getElementById("sig");
	c.className="sig";
	var crew=document.getElementById("an1");
	crew.className="an1";
	var bot=document.getElementById("botona1");
	bot.className="botona1";
}

var link2=function()
{
	window.location.href="animacion2.html";
}

var link3=function()
{
	window.location.href="animacion3.html";
}

var link4=function()
{
	window.location.href="animacion4.html";
}

var boton2=function()
{
	var bot2=document.getElementById("botona2");
	bot2.className="reportv";
}

var botona2=function()
{
	var an2=document.getElementById("an2");
	an2.className="em";
	var bot2=document.getElementById("botona2");
	bot2.className="reporti";
	var sem=document.getElementById("em");
	sem.autoplay=true;
	sem.load();
	document.getElementById("vid1").hidden=true;
	setTimeout(aa,1000);
}

var aa=function()
{
	var an2=document.getElementById("an2");
	an2.className="reu1";
	var escu=document.getElementById("esc");
	escu.className="esc";
}

var esc=function()
{
	var x=document.getElementById("conv");
	x.autoplay=true;
	x.load();
	setTimeout(vot,17700);
}

var vot=function()
{
	var escu=document.getElementById("esc");
	escu.className="invisible";
	var f=document.getElementById("an2");
	f.className="vot";
	setTimeout(exp,2000);
}

var exp=function()
{
	document.getElementById("vid2").hidden=false;
	var x=document.getElementById("sexp");
	x.autoplay=true;
	x.load();
	setTimeout(most,5000);
}

var most=function()
{
	var c=document.getElementById("sig");
	c.className="sig";
}

var most2=function()
{
	var c=document.getElementById("sig");
	c.className="fin";
}


var sonido=function()
{
	var bot3=document.getElementById("botona3");
	bot3.className="reportv";
}

var botona3=function()
{
	var an3=document.getElementById("an3");
	an3.className="em";
	var bot3=document.getElementById("botona3");
	bot3.className="reporti";
	var sem=document.getElementById("em");
	sem.autoplay=true;
	sem.load();
	document.getElementById("vid3").hidden=true;
	setTimeout(aa2,1000);
}

var aa2=function()
{
	document.getElementById("vid4").hidden=false;
	var x=document.getElementById("sexp");
	x.autoplay=true;
	x.load();
	setTimeout(most2,5000);
}

var final=function()
{
	document.getElementById("fing").hidden=true;
	document.getElementById("vid5").hidden=false;
	var t=document.getElementById("fin");
	t.autoplay=true;
	t.load();

}