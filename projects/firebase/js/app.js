


var name1 = document.getElementById('name1');
var sec1 = document.getElementById('section1');
var msg1 = document.getElementById('msg1');

function add() {

if(name1.value == "" || sec1.value == "" || msg1.value == ""){
	alert("Inputs Are Empty!");
} else {
	var database = firebase.database().ref('/');

	var x  = {
		name: name1.value,
		sec: sec1.value,
		msg: msg1.value

	}

	database.child('sohrab').push(x);
	name1.value = "";
	sec1.value = "";
	msg1.value = "";
}
}

var database = firebase.database().ref('/');
database.child('sohrab').on('child_added', function(xampp){
	var nm = xampp.val().name;
	var mx = xampp.val().msg;
	var sc = xampp.val().sec;
	

	var node = document.createElement("tr");
	var nod2 = document.createElement("td"); 
	var nod3 = document.createElement("td");
	var nod4 = document.createElement("td");
	node.appendChild(nod2);
	node.appendChild(nod3);
	node.appendChild(nod4);           
var textnode = document.createTextNode(nm);  
var textnode1 = document.createTextNode(sc); 
var textnode2 = document.createTextNode(mx);        
nod2.appendChild(textnode);    
nod3.appendChild(textnode1);  
nod4.appendChild(textnode2);                           
document.getElementById("result").appendChild(node); 
})