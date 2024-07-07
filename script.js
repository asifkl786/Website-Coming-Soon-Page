let countDownDate = new Date("july 15, 2025 00:00:00").getTime();
let x = setInterval(function(){
    let  now = new Date().getTime();
    let  distance = countDownDate - now;
    console.log(distance);
    let  days = Math.floor(distance/ (1000*60*60*24));
    let  hours = Math.floor((distance % (1000*60*60*24))/ (1000*60*60));
    let  minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
    let  seconds = Math.floor((distance % (1000*60))/ (1000));

    // Thease line of code display data in UI
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minuts').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


},1000);
