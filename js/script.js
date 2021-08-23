
window.onload = function () {
    //'let' doesn't work bc it only has local scope
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var startButton = document.getElementById('start-button');
    var stopButton = document.getElementById('stop-button');
    var resetButton = document.getElementById('reset-button');
    var Interval ;
  
    //triggering the timer
    startButton.addEventListener('click', function (event) {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    });
    
    
      stopButton.addEventListener('click', function (event) {
         clearInterval(Interval);
    });
    
  

     resetButton.addEventListener('click', function(event) { 
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       appendTens.innerHTML = tens;
       appendSeconds.innerHTML = seconds;
    });
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }


