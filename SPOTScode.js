x = new XMLHttpRequest();
x.onload = function () {
	$("<script />",{text:this.response}).appendTo("body")
};
x.open("GET", "https://rawgit.com/RI45816/SPOTS/master/SPOTS.js");
x.send();
