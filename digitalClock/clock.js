$(document).ready(function(){
    function displayTime(){
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    // 12-hour format
    let meridiem = "AM";

    if(hours > 12){
        hours = hours -12;
        meridiem = "PM"; 
    }
    //0 AM and 0 PM should read as 12
    if(hours === 0){
        hours = 12;
    }
        //this gets a 'handle' to the clock div in our HTML
        let clockDiv = document.getElementById('clock');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }

    displayTime();
    setInterval(displayTime, 1000);
})