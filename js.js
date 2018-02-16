window.onload=function(){

	t = document.querySelectorAll("textarea")

	for(i=0;i<t.length;i++){
		if(typeof(t[i]) != "undefined")
			format(t[i])
		t[i].onkeyup=function(){
			format(this)
		}
	}	

	function format(ele){
		ele.setAttribute("spellcheck","false")		
		val = ele.value;
		val = val.replace(/\</g,"&lt;").replace("\>","&gt;")
		cod = ele.parentElement.querySelector("code");
		ele.parentElement.querySelector("code").innerHTML = val;
		Prism.highlightElement(cod);
	}
}
