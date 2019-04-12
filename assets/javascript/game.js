// Trivia Questions Array
let triviaArr = [
    {
        question: 'Riddle me this. Who is the first artist to draw Batman?',
        answers: ['Rob Shnieder', 'Bob Kane', 'George Lucas'],
        correct: 'Bob Kane'  //might need to change
    },
    {
        question: 'Riddle me this. Who is most known as the voice of Batman?',
        answers: ['Adam West', 'Val Kilmer', 'Kevin Conroy'],
        correct: 'Kevin Conroy'  //might need to change
    },
    {
        question: 'Riddle me this. Name of the first Robin.',
        answers: ['Richard Hammon', 'Dick Grayson', 'Damian Wayne'],
        correct: 'Dick Grayson'  //might need to change
    },
    {
        question: 'Riddle me this. Who is the Son of Batman?',
        answers: ['Richard Grayson', 'Damian Wayne', 'Tim Drake'],
        correct: 'Damian Wayne'  //might need to change
    },
    {
        question: 'Riddle me this. Which Super Hero patrols BloodhavenNightwing',
        answers: ['Red Robin', 'Bat Girl', 'Nightwing'],
        correct: 'Nightwing'  //might need to change
    },
    {
        question: 'Riddle me this. Which actor is known as the worst Batman ever?',
        answers: ['George Clooney', 'Val Kilmer', 'Christian Bale'],
        correct: 'George Clooney'  //might need to change
    },
    {
        question: 'Riddle me this. Which is NOT a nickname of Batman?',
        answers: ['Batsy-Poo', 'Bats', 'Caped Detective'],
        correct: 'Caped Detective'  //might need to change
    }
]
let questNum = 0;
let score = 0;
// Displays first question to User.
$(document).ready(function () {
    $('#question').append('<h2>' + triviaArr[questNum].question + '</h2>');
    for (let i = 0; i < triviaArr[questNum].answers.length; i++) {
        var logo = $('<div class = "logo" id=' + i + '></div>')
        var h3 = $('<h3 class = "answer">' + triviaArr[questNum].answers[i] + '</h3>');
        $('#answers').append(logo);
        $('#' + i).append(h3);
    }
});

// Timer
let counter = 30;

timeLeft = () => {
    counter--;

    $('#timer').html('Time Remaining: ' + counter + ' seconds');

    if (counter === 0) {
        alert('You lose!')
        counter = 30;
        $('#timer').html('Time Remaining: ' + counter + ' seconds')

        alert('You lose, maybe next time detective!')
        questNum = 0;
        score = 0;
        $('#question').empty();
        $('#answers').empty();
        $('#question').append('<h2>' + triviaArr[questNum].question + '</h2>');
        for (let i = 0; i < triviaArr[questNum].answers.length; i++) {
            var logo = $('<div class = "logo" id=' + i + '></div>')
            var h3 = $('<h3 class = "answer">' + triviaArr[questNum].answers[i] + '</h3>');
            $('#answers').append(logo);
            $('#' + i).append(h3);
        }
        counter = 30;
    }
}
let intervalID = 0;
timeCounter = () => {

    intervalID = setInterval(timeLeft, 1000);
}
// Timer End
timeCounter();

$('#answers').on('click', 'h3.answer', function () {
    // If Correct....
    // test
    console.log($(this).attr('data-answer'));
    console.log($(this).text());
    console.log(triviaArr[questNum].correct);
    // test end
    if ($(this).text() === triviaArr[questNum].correct) {
        // Increase Question var, clear out old quest and ans populate the next one. reset timer.
        questNum++;
        score++;
        // Has the last question been answered?
        // Yes it has.
        if (score === 7) {
            clearInterval(intervalID);
            $('#question').empty();
            $('#answers').empty();
            alert('You win! A great Detective you are!')

        }
        // No it hasn't.
        else {
            $('#question').empty();
            $('#answers').empty();
            $('#question').append('<h2>' + triviaArr[questNum].question + '</h2>');
            for (let i = 0; i < triviaArr[questNum].answers.length; i++) {
                var logo = $('<div class = "logo" id=' + i + '></div>')
                var h3 = $('<h3 class = "answer">' + triviaArr[questNum].answers[i] + '</h3>');
                $('#answers').append(logo);
                $('#' + i).append(h3);
            }
            counter = 30;
        }
    }
    // If Wrong...
    else {
        alert('You lose, maybe next time detective!')
        questNum = 0;
        score = 0;
        $('#question').empty();
        $('#answers').empty();
        $('#question').append('<h2>' + triviaArr[questNum].question + '</h2>');
        for (let i = 0; i < triviaArr[questNum].answers.length; i++) {
            var logo = $('<div class = "logo" id=' + i + '></div>')
            var h3 = $('<h3 class = "answer">' + triviaArr[questNum].answers[i] + '</h3>');
            $('#answers').append(logo);
            $('#' + i).append(h3);
        }
        counter = 30;
    }
});