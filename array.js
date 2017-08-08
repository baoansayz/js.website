a = [1,2,"hii"];
b = [];
b["lol"] = 444;

function poll(){
	a[0] = arguments[0];
	alert(a[0]);
}

poll("hello,secret");