// Trivia Questions Array
let triviaArr = [
    {
        question: 'Riddle me this. Who is the first artist to draw Batman?',
        answers: ['Rob Shnieder','Bob Kane','George Lucas'],
        correct: 'Bob Kane'  //might need to change
    },
    {
        question: 'Riddle me this. Who is most known as the voice of Batman?',
        answers: ['Adam West','Val Kilmer','Kevin Conroy'],
        correct: 'Kevin Conroy'  //might need to change
    },
    {
        question: 'Riddle me this. Name of the first Robin.',
        answers: ['Richard Hammon','Dick Grayson','Damian Wayne'],
        correct: 'Dick Grayson'  //might need to change
    },
    {
        question: 'Riddle me this. Who is the Son of Batman?',
        answers: ['Richard Grayson','Damian Wayne','Tim Drake'],
        correct: 'Damian Wayne'  //might need to change
    },
    {
        question: 'Riddle me this. Which Super Hero patrols BloodhavenNightwing',
        answers: ['Red Robin','Bat Girl','Nightwing'],
        correct: 'Nightwing'  //might need to change
    },
    {
        question: 'Riddle me this. Which actor is known as the worst Batman ever?',
        answers: ['George Cloony','Val Kilmer','Christian Bale'],
        correct: 'George Cloony'  //might need to change
    },
    {
        question: 'Riddle me this. Which is NOT a nickname of Batman?',
        answers: ['Batsy-Poo','Bats','Caped Detective'],
        correct: 'Caped Detective'  //might need to change
    }
]



// TODO
// Make Questions and answers ARRAY, 
// display questions
// Do something when they click an answer.
// if they get all answers right give alert and clear interval

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

