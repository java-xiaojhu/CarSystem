//利用ajax同步验证session【非常重要】
var rsTxt=$.ajax({
	type:"get",
	url:"http://127.0.0.1:8080/lyh/Emps/getSessionUser",
	async:false
}).responseText;

if(rsTxt==""){
	location.href="/CarSystem/error.html";
}

//本地缓存验证session
/*if(window.sessionStorage.getItem("users")==null){
	location.href="sessionerror.html";
}*/


