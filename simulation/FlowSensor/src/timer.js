var hours ;
var minutes ;
var secs;
let timerInterval1;
let seconds = 0;
$(document).ready(function () {
    
    });
 // Function to format time as HH:MM:SS
 function formatTime(seconds) {
    hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    secs = (seconds % 60).toString().padStart(2, '0');
   return `${hours}:${minutes}:${secs}`;
 }

 // Update the counter display
 function updateCounter() {
   $('#counter').text(formatTime(seconds));
 }

 // Start the timer
 function startTimer() {
   if (!timerInterval1) {
     timerInterval1 = setInterval(() => {
       seconds++;
       updateCounter();
     }, 1000);
   }
 }

 startTimer();

 // Initialize the counter display
 updateCounter();