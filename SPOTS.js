$("<textarea />",{text:JSON.stringify(Object.entries(config).filter(i=>["bgColor","themeColor","accentColor","bgFooter","bgFooterHeight"].indexOf(i[0])+1).reduce((i,j)=>{i[j[0]]=j[1];return i},{}))}).appendTo("body").select();document.execCommand("copy")

configAPI.setMultiple({"bgColor":"#e8d1b2","bgFooter":null,"themeColor":"#e8d1b2","accentColor":"#ffcc88","bgFooterHeight":null,bgImage:"https://raw.githubusercontent.com/RI45816/SPOTS/master/Christmas%20Trees.png"})

configAPI.setMultipleDefault({"bgColor":"#e8d1b2","bgFooter":null,"themeColor":"#e8d1b2","accentColor":"#ffcc88","bgFooterHeight":null,bgImage:"https://raw.githubusercontent.com/RI45816/SPOTS/master/Christmas%20Trees.png"})
	