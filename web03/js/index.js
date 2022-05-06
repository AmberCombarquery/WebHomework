var h1=document.querySelector("h1");
var ul=document.querySelector("ul");
var list=document.getElementsByTagName("li");
var mBox=document.getElementsByTagName("div");
var p1=document.querySelector("#p1");
var p2=list[1];
var p3=list[2];
var p4=list[3];
var p5=list[4];
var p6=list[5];
var p7=list[6];
var p8=list[7];
var date = new Date();


ul.addEventListener('click',function(ev){
	var ev = ev || window.event;  
    var target = ev.target || ev.srcElemnt;  

	for(var i=0;i<list.length;i++){
	if(list[i]==target){
			alert(i+1);
	}
}
}
);


p1.onclick=function(){
	p1.style.color="red";
};

p2.onclick=function(){
	var time="";
	var month=date.getMonth()+1;
	time=date.getFullYear()+"-"+month+"-"+date.getDate();
	h1.innerHTML=time;
};

p3.onclick=function(){
	p3.classList.add("fn-active");
}

p4.onclick=function(){
	ul.removeChild(p8);
}

p5.onclick=function(){
	window.location.href="https://www.taobao.com/";
}

p6.onclick=function(){
	var newLi=document.createElement("li");
	newLi.innerHTML+='<li class="m-item">'+"p9"+"</li>";
	ul.append(newLi);
}




p7.onclick=function(){
	console.log(1);
	mBox[0].style.width=document.body.clientWidth;
}