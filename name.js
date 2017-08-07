var x = 23;
fname = prompt("What is your first name?");
lname = prompt("What is your last name?");
function person(fname,lname,age,eyecolor)
{
   this.firstname=fname;
   this.lastname=lname;
   this.age=age;
   this.eyecolor=eyecolor;
}
user = new person(fname,lname,null,"blue");
alert("Hello " + user.firstname + ", welcome to my first website. ENJOY!");



function hello(){
	alert("hello " + name + " i hope you are having a great day :D");
}
function hey(y){
	document.write(y);
}

function getAge(){
	age = prompt("what is your age?");
	return age;
}
