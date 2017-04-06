$("<textarea />",{text:JSON.stringify(Object.entries(config).filter(i=>["bgColor","themeColor","accentColor","bgFooter","bgFooterHeight"].indexOf(i[0])+1).reduce((i,j)=>{i[j[0]]=j[1];return i},{}))}).appendTo("body").select();document.execCommand("copy")

configAPI.setMultiple({"bgColor":"#C91212","bgFooter":null,"themeColor":"#C91212","accentColor":"#f7ff00","bgFooterHeight":null})

