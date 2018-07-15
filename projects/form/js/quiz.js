const startButton=document.querySelector("#start");
const helpButton=document.getElementById('help');
var resultDis=document.getElementById('resultDisplay');
var resultTab=document.getElementById('resultTable');
const theTimer=document.querySelector(".timer span");
const content=document.querySelector(".quiz");
// const nextButton=document.querySelector('#next');
const nextButton=document.getElementById('next');
const inputs=document.getElementsByTagName("input");
const scoreBoard=document.getElementById('scoreboard');
const scoreDiv=document.getElementById('score');
const resultButton=document.getElementsByClassName('resultButton');
var timer=[0,0,0,0];
var interval;
var totalMarks= 60;
var percent=0;
var x=0;
var mark=0;
var j=0;
var y=1;
var scoreX=0;
var score=0;
var totalMarkArray=[15,15,10,10,10,10];
var scoreArray=[];
$(document).ready(function(){
    $('.modal').modal();
  });
          
var contents =
[
  {RE: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$', choices: ['sdds#@dfd.dfd','#dds@fdd.com','21212dfd@dfsfd.pk','kkjjfd@dfdsfsd.ss'], correct:[1,2,3]},
  {RE: '^[a-zA-Z ]{2,30}$', choices: ['Asds','23232','adfd32323','adfs@#dsf'], correct:[0,1,2]},
//   {RE: '^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$', choices: ['03231234567','0345-1234567','+923211234567','0092-333-1234567'], correct:[0,1,2,3]},
//   {RE: '^[a-z0-9_-]{3,16}$', choices: ['my-us3r_n4m3','khan@@','KH','khi_213_khi'], correct: [0,3]},
  {RE: '^[a-z0-9_-]{6,18}$', choices: ['myp4ssw0rd','mypa$$w0rd','khi12','1267sd7sd'], correct: [0,3]},
  {RE: '^#?([a-f0-9]{6}|[a-f0-9]{3})$', choices: ['#a3c113','#as123b','eeee123','#abeeee'], correct: [0,3]},
  {RE: '^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$', choices: ['http://net.tutsplus.com/about','http://google.com/some/file!.html','http://google/some/file!.html','https://www.facebook.com'], correct: [0,3]},
  {RE: '^#?([a-f0-9]{6}|[a-f0-9]{3})$', choices: ['#a3c113','#as123b','eeee123','#abeeee'], correct: [0,3]},
];


//initially thy are invisible
theTimer.style.display="none";
scoreBoard.style.display="none";

function makeResult(){
   for(var k=0;k<scoreArray.length;k++){
    var table = document.getElementById('resultTable');
    var row = table.insertRow(k+2);
    var Q_no = row.insertCell(0);
    var t_marks = row.insertCell(1);
    var o_marks = row.insertCell(2);
    var n_marks = row.insertCell(3);
   
    Q_no.innerHTML=k+1;
    t_marks.innerHTML=totalMarkArray[k];
    o_marks.innerHTML=scoreArray[k];
    n_marks.innerHTML=totalMarkArray[k]-Math.abs(scoreArray[k]);
   
   }
}
   
function displayResult(){
   if(percent > 50){
    html = `<h1 class="clear-test">Congratulations! You have passed the test.</h1>
            <p><b>Your Score is: ${percent.toFixed(2)}% </b></p>`;
   }else{
    html = `<h1 class="fail-test">Oops! You have failed the test.</h1>
    <p><b>Your Score is: ${percent.toFixed(2)}% </b></p>`;
   }
   
   $('#resultDisplay').html(html);
}

function choices() {
    // const inputs=document.getElementsByTagName("input");
    if (contents[x] === undefined){

        percent = (score * 100)/totalMarks;

        content.style.display="none";
        theTimer.style.display="none";
        scoreBoard.style.display="none";
        nextButton.style.display="none";
        resultDis.style.display='block';
        resultTab.style.display='block';
        displayResult();
        makeResult();

    } else {
        removeDisabled();
    $(nextButton).addClass('disabled');
      var questionNumber = document.querySelector('.Qno');
      questionNumber.textContent = 'Question#' + y;
  
      var question = document.querySelector('.re');
      question.textContent = contents[x]['RE'];
  
      var choices = document.querySelectorAll('.check_value');
      for (var i = 0; i < choices.length; i++) {
        choices[i].textContent = contents[x]['choices'][i];
        $(inputs[i]).attr('value',contents[x]['choices'][i]);
      }
    }   
}
function start(){
    // scoreArray[]=null;
    x=0;
    y=1;
    helpButton.style.display="none";
  startButton.style.display="none"
  content.style.display="block";
  theTimer.style.display="block";
scoreBoard.style.display="block";
choices();
  startClock();
}

function startClock(){
    interval=setInterval(clock,10);
}

function clock(){
    currentTime=leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;
   timer[0]=Math.floor((timer[3]/100)/60);
//    if(timer[3]%6000==0){
//     document.querySelector("#origin-text p").innerHTML=text[Math.floor((timer[3]/100)/60)];
//  }
   timer[1]=Math.floor((timer[3]/100)-(timer[0])*60);
   timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

function leadingZero(time){
    if(time<9){
     time="0"+time;
    }
    return time;
}

// function next(){
//     var inputs = document.querySelectorAll('input');
//     if (content[x] === undefined) {
//         return false;
//       }
    
//       else if(inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
//         alert('Please select an answer');
    
//       } 
// }


function checkValue(id){
 $(nextButton).removeClass('disabled');
// $(id).click(function() {
//     $(this).addClass('disabled');
// });
doDisabled();
//make id for correct/wrong icon
var icon_id='check_'+id;
console.log(icon_id);
//value of input
var v=contents[x]['choices'][id];
var patt = new RegExp(contents[x]['RE']);
var result=patt.test(v);
// console.log(result);
// var rgx=contents[x]['RE'];

// var regx=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
// var result=rgx.test(v);

if(result){
    // $('#' + icon_id).text('done').addClass('make-it-correct');
    // document.getElementById(icon_id).style.display = 'inline';
    j++
    scoreX+=5;
    score+=5;
    scoreDiv.textContent=score;
} else{
    // $('#' + icon_id).text('clear').addClass('make-it-wrong');
    // document.getElementById(icon_id).style.display = 'inline';
    score-=3;
    scoreX-=3;
    scoreDiv.textContent=score;
}

// // var regx = '/'+contents[x]['RE']+'/';
    // if(result){
    //  valid(icon_id);
    // } else{
    //     invalid(icon_id);
    // }
}
// function returnRE(x){
//     var reX;
//     switch (x){
//        case 0:
//        rex=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
//        break;
//        case 1:
//        rex=/^[a-zA-Z ]{2,30}$/;
//     }
//     return reX;
// }

function valid(icon_id) {
    document.getElementById(icon_id).style.display= "block";
    document.getElementById(icon_id).setAttribute("class", "valid");
    // document.getElementById(clas).innerHTML = 'done';
    // document.getElementById(clas).setAttribute("class","icon");
    document.getElementById(icon_id).textContent = "done";
    document.getElementById(icon_id).style.color = "green";
  }
  function invalid(icon_id) {
    document.getElementById(icon_id).style.display = "block";
    document.getElementById(icon_id).setAttribute("class", "invalid");
    // document.getElementById(clas).innerHTML = 'done';
    // document.getElementById(clas).setAttribute("class","icon");
    document.getElementById(icon_id).innerHTML = "clear";
    document.getElementById(icon_id).style.color = "red";
  }
function doDisabled(){
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].checked){
            inputs[i].setAttribute('disabled','disabled');
        }
    }
}
function removeDisabled(){
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].checked=true){
            inputs[i].removeAttribute('disabled');
            inputs[i].checked=false;
        }
    }
}

function nextRE(){
    scoreArray.push(scoreX);
    scoreX=0;
    x++;
  y++;
    choices();
    
}
// startButton.addEventListener("click",start,false);
nextButton.addEventListener("click",nextRE,false);
startButton.addEventListener("click",start,false);