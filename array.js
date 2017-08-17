a = [1,2,"hii"];
b = [];
b["lol"] = 444;

function poll(){
	a[0] = arguments[0];
	alert(a[0]);
}

$.getJSON("https://jsonplaceholder.typicode.com/posts", function(person){

    $.each(person, function(key, value){
    	
        document.write(key+": "+value.id+ " " + value.title + "<br />"); 
    });
});