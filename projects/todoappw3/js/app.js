 // Initialize Firebase
       

//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyD9msb2trr8o1U4p9B4a8ZuTcNYfM1ebRQ",
//     authDomain: "fir-ffe1c.firebaseapp.com",
//     databaseURL: "https://fir-ffe1c.firebaseio.com",
//     projectId: "fir-ffe1c",
//     storageBucket: "",
//     messagingSenderId: "645506768962"
//   };
//     var app= firebase.initializeApp(config);
//     var db = app.database();
//     var rootRef = db.ref();


//        var input = document.querySelector('#myInput'); // learn it from https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//       var todoList = document.querySelector('.myUL');

//       function toDo() {
//     var todo = input.value;
//     if(todo !== ''){
//         var todoKey = rootRef.push().key; // get unique key
//         rootRef.child(todoKey).set(todo);
//         input.value = ''; // empty the input
//         input.focus(); // put the cursor again in the input
//     }
// }


// rootRef.on('child_added', function(data){
//     renderTodo(data);
// });
// rootRef.on('child_removed', function(data){
//     var itemToDelete = document.querySelector('.' + data.key);
//     itemToDelete.remove();
// });

// rootRef.on('child_changed', function(data){
//     var itemToChange = document.querySelector('.' + data.key);
//     var itemText = itemToChange.firstElementChild; // the firstElementChild will be the span element that contains todo text 
//     itemText.innerHTML = data.val();
// });

// function renderTodo(todo){
//     var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   var editBtn = document.createElement("button");
//   var editBtnTxt = document.createTextNode("Edit");
//   editBtn.className("btn btn-primary");
//   editBtn.appendChild(editBtnTxt);
//   li.appendChild(editBtn);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = deleteTodo( todo.key );
      
    
//   }
// }
//   // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);      

// function deleteTodo(key){
//     rootRef.child(key).remove();
// }
// function editTodo(key, value) {
//     var newValue = prompt('Edit todo', value);
    
//     if(newValue !== '' && newValue !== null){ // check if the value is not empty
//         var updates = {};
//         updates[key] = newValue; 
//         rootRef.update(updates);
//     }

// }



var database = firebase.database().ref('/');
var taskInput = document.getElementById('myInput');
var unOrderList = document.getElementById('myUL');

function toDo() {

    if(taskInput.value==='')
        {
            alert("Please Be Sure you Entered something !");
           
        }
    else
    {
        var obj = {
        item: myInput.value,
        // todo: 'DONE'
        }
        database.child('obj').push(obj);
        myInput.value='';
    }
}

database.child('obj').on("child_added", function (snapshot) {
    var demo = snapshot.val()
    demo.id = snapshot.key
    render(demo);

})

function render(obj)
{

    var list = document.createElement('LI');
    list.style.opacity= 0.9;
    
    var tagText = document.createTextNode(obj.item);
    list.setAttribute("class", "list-group-item lists");
    
    // list.setAttribute("class", "transp")
    
    list.appendChild(tagText)//<li>getInput</li>
    
   
    list.setAttribute("id",obj.id);


    var dltBtn=document.createElement("BUTTON");
    var btnText=document.createTextNode("Delete");
 
    dltBtn.setAttribute("class", "btn btn-danger float-right right");
    dltBtn.setAttribute("title","Are you sure?")

        dltBtn.appendChild(btnText);

        dltBtn.onclick=function()
        {
            _remove(obj.id)
        };

        list.appendChild(dltBtn);

        var editBtn=document.createElement("BUTTON");
        var editText=document.createTextNode("Edit");
       editBtn.setAttribute("class", "btn btn-primary edit-btn right");
       editBtn.appendChild(editText);
       editBtn.onclick=function(){
         editOne(obj.id)
       }

       list.appendChild(editBtn);

       // unOrderList.setAttribute("class", "list-group");

    unOrderList.appendChild(list)
}


function _remove(key)
    {
    database.child("obj/"+key).remove();
    }

database.child("obj").on("child_removed", function(data){
var deletedLi=document.getElementById(data.key);
deletedLi.remove();
})

 function deleteAll(){

                // if(obj.userTodo < 1)
                //     {
                //         alert("There is nothing to delete");
                //         input.focus();
                //     }
                //     else{
                        unOrderList.innerHTML = null ;
                        database.child('obj').remove()
                        
                        item = "";
                    // }
                }

 function editOne(key){
    var myelement=document.getElementById(key);
    var myvalue=myelement.childNodes[0].wholeText;
    
    var inputfield=document.createElement('INPUT');
    inputfield.setAttribute('type','text');
    inputfield.setAttribute('id',key+'omar');
    inputfield.setAttribute('value',myvalue);
    inputfield.setAttribute('style','background-color:rgba(0,0,0,0.5);color:white;padding:1%');
    

// // console.log(myelement);

 myelement.childNodes[0].remove();
 var x=myelement.childNodes[0];
 myelement.insertBefore(inputfield,x);
 document.getElementById(key+'omar').focus();

    var againElement=document.getElementById(key);
    var againValue=againElement.childNodes[2];
    againValue.childNodes[0].data='Update';
    againValue.onclick=function(){
        updateOne(key);
    }
}

function updateOne(key){
var newVal=document.getElementById(key+'obj').value;
if(newVal===""){
alert('Enter todo please you leave field empty!');
}
else{
database.child("todo/"+key).set({
    name:newVal
});
}
}

   database.child("todo").on("child_changed",function(data){
       //console.log(data.val(),data.key);
        var updatedLi = document.getElementById(data.key+"obj");
        var newVal=updatedLi.value;
        var s=updatedLi.parentNode;
        var childRemove=s.childNodes[0];
        childRemove.remove();
        var x=s.childNodes[0];
        var bla=document.createTextNode(newVal);
        s.insertBefore(bla,x);
        s.childNodes[2].innerText='Edit';
        s.childNodes[2].onclick=function(){
         editOne(data.key);
     }
   });