
const testWrapper=document.querySelector(".text-wrapper");
const textArea=document.querySelector("#test-area");
var table_h=document.querySelector("#result-history");
var table_r=document.querySelector(".result_div");
var links = document.getElementsByTagName("a");
var ul = document.getElementsByTagName("ul");
// var table=document.querySelector(".jumbotron table");
var nextButton=document.querySelector("#nextlevel");
var originText = document.querySelector("#origin-text p").innerHTML;
const originaltext = document.querySelector("#origin-text p").innerHTML;
const  resetButton=document.querySelector("#reset");
const startButton=document.querySelector("#start");
const theTimer=document.querySelector(".timer span");
var timer=[0,0,0,0];
var interval,textEntered,originTextMatch,currentTime;
var i=j=k=0;
var timerunning=false;
var count=0;
var totalcount=0;
var remark;
var text = [["This now time set there see was none left right well I we their time sun soon once rock food dark light jump ride car sea dog box bed game table fridge.",
            "School pants shirt brush hat boots pictures phone facebook ring block beach water horse eyes text new fast door add for I'm out of random words to think of this is a simple paragraph made by alexis danyel martin hope you enjoy typing this I guess that's all cause I'm out of ideas I hope you have a very good day or night goodbye.",
             "It grew stronger as it moved northwest. It then made landfall on the western end of Cuba. The storm made a loop over open water and then began moving toward the United States."],
           
             ["After crossing Florida, the storm moved near the rest of the southeastern United States and passed out to sea. Because of the storm's loop, some reports said it was actually two hurricanes.In Cuba, the storm was one of the worst disasters in the island's history.",
             "Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching.",
             "The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize. When she saw that I had realized my mistake."],


        ];
            



            

var score=[];
var time=[];
var grade=[];
var Countwords=[];

function remark(remark=calWPM()){
    var grade='';
   if(remark>=80){
      grade='Excellent';
   } else if(remark>=60 && remark<80){
       grade='Brillient';
   } else if(remark>=40 && remark<60){
       grade='Best';
   } else if(remark>=30 && remark<40){
       grade='Better';
   } else{
       grade='Good';
   }
   return grade;
}

// for(var i=0;i<text[0].length;i++){
//     var count=0;    console.log(text[0][i].split(" "));
//     }

 function WordCount(str) { 
     console.log(str);
     for(k=0;k<str[j].length;k++){
     count+= str[j][k].split(" ").length;
     }
     return count;
 }
//  totalcount=WordCount(text);

// function wordcount(str){
//     var total=0;
//     for(var i=0;i<str.length;i++){
//         for(var j=0;j<str[i].length;i++){
//             if (str(i) === " "){
//                 totalSoFar = +1;
//             }
//              totalsoFar += 1;
//         }
//     }
// }


function start(){
    let textEnteredLength=textArea.value.length;
    if(textEnteredLength===0 && !timerunning){
        timerunning=true;
        interval=setInterval(clock,10);
    }
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

function calWPM(){
 var result=Math.round(totalcount/((timer[3])/6000));
return result;
}

function loader(){
    $("#loading").show(10000,function(){
        $("#loading").hide();
        });
        showresult();
        reset();
}

function showresult(){
    var string='<sub>'+'WPM'+'</sub>';
    // document.querySelector(".jumbotron p").innerHTML='';
    table_r.style.visibility="visible";
    document.querySelector(".time").innerHTML=currentTime;
    document.querySelector(".speed").innerHTML=calWPM()+string;
    document.querySelector(".remark").innerHTML=remark();
    document.querySelector(".words").innerHTML=totalcount;
    textArea.style.display="none";
    mainContent='';
    document.querySelector("#origin-text p").innerHTML=originaltext;
}
function hideresult(table){
    table.style.visibility="hidden";
    // document.querySelector(".jumbotron p").innerHTML=paragraph;
    // document.querySelector(".time").innerHTML='';
    // document.querySelector(".speed").innerHTML='';
    // document.querySelector(".remark").innerHTML='';
    // document.querySelector(".words").innerHTML='';
    // table.style.display="none";
}

function changeText(){
    ++i;
    if(text[j][i]!=null){
    originText= document.querySelector("#origin-text p").innerHTML=text[j][i];
   textArea.value='';
//    testWrapper.style.border="3px solid gray";
} else{
    record();
    showresult();
    reset();
    document.querySelector("#nextlevel").style.visibility="visible";
}
}

function next(){
        makeHistory();
        hideresult(table_r);
       changeLevel();
       reset();
       ready();
}

function resetRecord(){
    for(var i=0;i<score.length;i++){
        score[i].pop();
        time[i].pop();
        grade[i].pop();
    }
}

function record(){
    var s=calWPM();
    var t=currentTime;
    var g=remark();
    score.push(s);
    time.push(t);
    grade.push(g);
    Countwords.push(totalcount);
}
function makeHistory(){
   
    var table = document.getElementById("result-history");
    var row = table.insertRow(1);
    var t_level = row.insertCell(0);
    var t_word = row.insertCell(1);
    var t_time = row.insertCell(2);
    var t_s = row.insertCell(3);
    var t_remark = row.insertCell(4);
   
    t_level.innerHTML=j+1;
    t_word.innerHTML=Countwords[j];
    t_time.innerHTML=time[j];
    t_s.innerHTML=score[j];
    t_remark.innerHTML=grade[j];
   
}
function changeLevel(){
    count=0;
    $(links[j]).removeClass('active');
    ++j;
   if(text[j]!=null){
    document.querySelector("#nextlevel").style.visibility="visible";
       $(links[j]).addClass('active');
    originText = document.querySelector("#origin-text p").innerHTML=text[j][0];
    console.log(originText);
   totalcount= WordCount(text);
   }
   else {
       j=0;
       document.querySelector("#nextlevel").style.visibility="hidden";
       startButton.style.visibility="hidden";
       resetRecord();
    //    hideresult(table_h);
    //    hideresult(ul);
   }
}

function changelevelText(){
    i=0;
    originText = document.querySelector("#origin-text p").innerHTML=text[j][i];
}
function spellcheck(){
     textEntered=textArea.value;
      originTextMatch=originText.substring(0,textEntered.length);
    if(textEntered==originText){
        testWrapper.style.border="8px solid green";
        //   i++;
             changeText();
        //    //textArea.value='';
        //   // spellcheck();
        // originText= document.querySelector("#origin-text p").innerHTML=text[i];
      
    } else {
        if(textEntered==originTextMatch){
            testWrapper.style.border="9px solid orange";
        } else{
            testWrapper.style.border="8px solid red";
        }   
}
} 



function reset(){
    clearInterval(interval);
    timerunning=false;
    interval=null;
    totalcount=0;
    // textArea.style.display="none";
    timer=[0,0,0,0];
    textArea.value='';
    theTimer.innerHTML="00:00:00";
    testWrapper.style.border='3px solid gray';
    document.querySelector("#origin-text p").innerHTML=originaltext;

}

function ready(){
    i=0;
    textArea.style.display="Block";
    textArea.focus();
}
function initialText(){
    $(links[j]).addClass('active');
    textArea.style.display="Block";
    textArea.focus();
    originText = document.querySelector("#origin-text p").innerHTML=text[j][i];
    totalcount=WordCount(text);
}
 //event listener for keyboard input
 textArea.addEventListener("keypress",start,false);
 textArea.addEventListener("keyup",spellcheck,false);
 resetButton.addEventListener("click",reset,false);
 startButton.addEventListener("click",initialText,false);
 nextButton.addEventListener("click",next,false);

 