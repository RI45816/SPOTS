x = new XMLHttpRequest();
x.onload = function () {
	$("<script />",{text:this.response}).appendTo("body")
};
x.open("GET", "https://cdn.jsdelivr.net/gh/RI45816/SPOTS/SPOTS.js");
x.send();
