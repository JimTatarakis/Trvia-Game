// TODO
// Make Questions and answers ARRAY, 
// Randomly select questions
// display questions

// TODO
// Make SCORE counter (resets at loss)
// DISPLAY score counter




// Timer
let counter = 30;

timeLeft = () =>{
    counter--;

    $('#timer').html('Time Remaining: ' + counter + ' seconds');

    if(counter === 0){
        alert('You lose!')
        counter = 30;
        $('#timer').html('Time Remaining: ' + counter + ' seconds')
        // initialize reset game
    }
}

timeCounter = () =>{
setInterval(timeLeft,1000);
}
// Timer End

