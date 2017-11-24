$("<textarea />",{text:JSON.stringify(Object.entries(config).filter(i=>["bgColor","themeColor","accentColor","bgFooter","bgFooterHeight"].indexOf(i[0])+1).reduce((i,j)=>{i[j[0]]=j[1];return i},{}))}).appendTo("body").select();document.execCommand("copy")

configAPI.setMultiple({"bgColor":"#e8d1b2","bgFooter":null,"themeColor":"#e8d1b2","accentColor":"#f7ff00","bgFooterHeight":null,bgImage:"https://cdn.rawgit.com/RI45816/SPOTS/92d913ac/Christmas%20Trees.png"})

configAPI.setMultipleDefault({"bgColor":"#e8d1b2","bgFooter":null,"themeColor":"#e8d1b2","accentColor":"#f7ff00","bgFooterHeight":null,bgImage:"https://cdn.rawgit.com/RI45816/SPOTS/92d913ac/Christmas%20Trees.png"})
	