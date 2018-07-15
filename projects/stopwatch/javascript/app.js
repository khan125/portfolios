var watch = document.getElementById('watch');
var start = document.getElementById('start');
var split = document.getElementById('split');
var reset = document.getElementById('reset');
var list = document.getElementById('list');

var mSeconds = 0, seconds = 0, minutes = 0, hours = 0;
var intervalTime = new Date(0, 0, 0, 0, 0, 0, 0);
var interval, counter = 1;

function timer() {
    interval = setInterval(startTimer, 10);
}

function startTimer() {
    mSeconds++;
    if(mSeconds > 99) {
        mSeconds = 0;
        seconds++;
        if(seconds > 59) {
            seconds = 0;
            minutes++;
            if(minutes > 59) {
                minutes = 0;
                hours++;
            }
        }
    }
    watch.innerText = (hours ? (hours > 9 ? hours : '0'+hours) : "00") + ':' + (minutes ? (minutes > 9 ? minutes : '0'+minutes) : "00") + ':' + (seconds ? (seconds > 9 ? seconds : '0'+seconds) : "00") + ':' + (mSeconds ? (mSeconds > 9 ? mSeconds : '0'+mSeconds) : "00");
}

start.addEventListener("click", function() {
    if(start.innerText == "Start") {
        timer();
        start.innerText = "Pause";
    }
    else {
        clearInterval(interval);
        start.innerText = "Start";
    }
});

function timerInerval(value) {

    var calcInterval = new Date(0, 0, 0, Number(value.slice(0, 2)), Number(value.slice(3, 5)), Number(value.slice(6, 8)), Number(value.slice(9, 11)));

    var timeDiff = calcInterval.getTime() - intervalTime.getTime();
    
    intervalTime.setMilliseconds(Number(value.slice(9, 11)));
    intervalTime.setSeconds(Number(value.slice(6, 8)));
    intervalTime.setMinutes(Number(value.slice(3, 5)));
    intervalTime.setHours(Number(value.slice(0, 2)));

    var dMSec = timeDiff.toString();
    dMSec = dMSec.slice(dMSec.length-2);
    var dSec = Math.floor(timeDiff/1000);
    var dMin = Math.floor(timeDiff/(1000*60));
    var dHr = Math.floor(timeDiff/(1000*60*60));
    
    return (dHr > 9 ? dHr : '0'+dHr) + ':' + (dMin > 9 ? dMin : '0'+dMin) + ':' + (dSec > 9 ? dSec : '0'+dSec) + ':' + (dMSec);
}

split.addEventListener("click", function(){
    timerValue = watch.innerText;

    list.innerHTML += '<tr><td>'+ counter++ + "|"+'</td><td>' + timerValue + "|"+'</td><td>' + timerInerval(timerValue) + '</td></tr>'
});


reset.addEventListener("click", function() {
    clearInterval(interval);
    watch.innerText = "00:00:00:00";
    list.innerHTML = "";
    start.innerText = "Start"
    mSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    intervalMSec = 0;
    intervalSec = 0;
    intervalMin = 0;
    intervalHr = 0;
    counter = 1;
})