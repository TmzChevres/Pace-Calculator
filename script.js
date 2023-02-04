var time = 0;
var dist = 0;
var pace = 0;
var speed = 0;
var meters = false;
var splitDist=50;

function setTime(){
    hr = parseInt(0 + document.getElementById("time-hr").value);
    min= parseInt(0 + document.getElementById("time-min").value);
    sec= parseInt(0 + document.getElementById("time-sec").value);
    time = 3600*hr + 60*min + sec;
    console.log(hr, min, sec, time);
    calcPace();
}
function setDist(){
    dist = document.getElementById("pace-dist").value;
    calcPace();
}
function changeUnit(){
    meters=!meters;
    console.log("meters="+meters);
    buttons = document.getElementsByClassName("unit-button")
    for (i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = (meters==true ? "Meters":"Yards");
        sButtons = document.getElementsByClassName("split-button");
        for (j=0; j<sButtons.length; j++) {
            sButtons[j].innerHTML = sButtons[j].innerHTML.replace((meters==true ? "Yards":"Meters"),(meters==true ? "Meters":"Yards"))
        }
    }
}
function setSplit(evt, sDist){
    splitDist = sDist;
    sButtons = document.getElementsByClassName("split-button")
    for (i = 0; i < sButtons.length; i++) {
        if(sButtons[i].innerHTML.indexOf(sDist)<0)
            sButtons[i].className = sButtons[i].className.replace(" active", "");
        else sButtons[i].className += " active";
    }
    calcPace();
}

function calcPace(){
    pace = (time/dist)*splitDist
    document.getElementById("pace-min").value = Math.floor(pace/60);
    document.getElementById("pace-sec").value = Math.floor(pace%60);
    document.getElementById("pace-ms").value = Math.round((pace%1)*1000);
    document.getElementById("pace-speed").value = Math.round(1000000*(dist * (meters==true?1:0.9144))/time)/1000000;
    console.log(time,dist,pace);
}