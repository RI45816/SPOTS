x = new XMLHttpRequest()
x.onload = function () {
	$("<script />",{text:this.response}).appendTo("body")
};
x.open("GET", "file:///C:/Users/amozu/Google%20Drive/Scripts/SPOTS.js");
x.send();
