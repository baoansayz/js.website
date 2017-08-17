// iterates through a JSON
/*
$.getJSON("https://jsonplaceholder.typicode.com/posts", function(person){

    $.each(person, function(key, value){
    	
        document.write(key+": "+value.id+ " " + value.title + "<br />"); 
    });
});
*/

function hi(){
$.getJSON("https://jsonplaceholder.typicode.com/posts",loga);
};

function loga(person){
	alert("asd");
    $.each(person, function(key, value){
    	
        document.write(key+": "+value.id+ " " + value.title + "<br />"); 
    })
    
};





function post (msg){
	$.ajax({
    type: 'POST',
    url: 'https://hooks.slack.com/services/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',
    data: JSON.stringify({ "text": msg }),
    success: function() { alert("success"); },
    contentType: "application/json",
    dataType: 'json'
});
}

post("post from the jquery! :D");

