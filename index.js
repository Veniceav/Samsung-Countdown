let countDownDate = new Date("Jan 2, 2023 7:00:00").getTime();//setting countdown date

let x = setInterval(function() {
    let now = new Date().getTime();//todays time n date
    
    let difference = countDownDate - now; //getting the difference between the countdown date n current date

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / (1000));

    document.getElementById('days').innerHTML = days + " Days";
    document.getElementById('hours').innerHTML = hours + " Hours";
    document.getElementById('minutes').innerHTML = minutes + " Minutes";
    document.getElementById('seconds').innerHTML = seconds + " Seconds"

    if (difference <= 0) {
        clearInterval(x);
        document.querySelector('.counter').innerHTML = "The GiveAway has Finished :(";
    }
}, 1000);


