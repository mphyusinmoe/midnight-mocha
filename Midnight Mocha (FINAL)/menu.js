
function openMenu(event,menuName){
	var i, x,tablinks;
	x=document.getElementsByClassName("menu");
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
	}
	tablinks=document.getElementsByClassName("tablink");
	for(i=0;i<x.length;i++){
		tablinks[i].className=tablinks[i].className.replace("w3-red","");
	}
	 document.getElementById(menuName).style.display = "block";
    event.currentTarget.firstElementChild.className += " img-box";
}
document.getElementById("myLink").click();
//owl-curosol
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
	items:6,
	autoplay:true,
	smartSpeed:1000,
	loop:true,
	autoplayHoverPause:true,
	
	dots:false,

});
});