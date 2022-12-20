var timer;
var timerEl = document.getElementById('timer');
var quizEl = document.getElementById('quiz');
var beginEl = document.getElementById('display-page');
var startButtonEl = document.getElementById('start-button');
var nextButtonEl = document.getElementById('next-button');
var quizEndEl = document.getElementById('end');
var resultEl = document.getElementById('result');
var showEl = document.getElementById('show');
var optionsEl = document.getElementById('options');
var displayEl = document.getElementsByClassName('display-page');
var questionEl = document.getElementById('question');
var score = 0;
var qIndex = 0;
var questArr = [
    {
        question: "What is an element?",
        options: ['A pickle', 'Not a pickle', 'A dog', 'A cat'],
        answer: "A pickle"
    },
    {
        question: "What is <h1>?",
        options: ['heading 1', 'heading 2', 'heading 3', 'heading 4'],
        answer: "heading 1"
    }, {
        question: "What is <h2>?",
        options: ['heading 1', 'heading 2', 'heading 3', 'heading 4'],
        answer: "heading 2"
    }, {
        question: "What is <h3>?",
        options: ['heading 1', 'heading 2', 'heading 3', 'heading 4'],
        answer: "heading 3"

    }, {
        question: "What is <h4>?",
        options: ['heading 1', 'heading 2', 'heading 3', 'heading 4'],
        answer: "heading 4"
    }];

// Add a start button
var startButton = document.getElementById("start-button");
startButton.addEventListener('click', beginGame);
console.log(questArr[0].Answer)
function startTimer() {
    console.log("click")
}

// When Start button is clicked, first question should appear
var timerInterval;
var selectionEl = 'selection';
function beginGame() {
    showEl.setAttribute('class', 'hide');
    quizEl.removeAttribute('class');
    console.log('started');
    timerInterval = setInterval(startTimer, 1000);
    timerEl.innerHTML = "Time Remaining: " + secondsLeft;
    nextQuestion();
}

// Add a timer that counts down when first question is shown

var secondsLeft = 76;

function startTimer() {
    secondsLeft--;
    timerEl.innerHTML = "Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
        gameEnd();
    }
    // }, 1000)
}

startButton.addEventListener("click", startTimer);

// Next button needs to show next question
function nextQuestion() {
    var currentQ = questArr[qIndex];
    questionEl.textContent = currentQ.question;
    console.log('working');
    optionsEl.innerHTML = ''
    for (var i = 0; i < currentQ.options.length; i++) {
        var option = currentQ.options[i];
        var optionBtn = document.createElement('button');
        optionBtn.setAttribute('class', 'option');
        optionBtn.setAttribute('value', option);
        optionBtn.addEventListener('click', chooseAnswer)
        optionBtn.textContent = i + 1 + ". " + option;
        optionsEl.append(optionBtn);
    }
}


// When question is shown an array of objects that has questions and answers 
function chooseAnswer(event) {
    var userAnswer = event.target.innerText.split('.')[1].trim()
    console.log(userAnswer);
    var currentQ = questArr[qIndex];
    if (userAnswer == currentQ.answer) {
        alert('Correct!')
    } else { 
    alert('False!') 
    secondsLeft-=10
    }

    qIndex++;
    if (qIndex < questArr.length) {
        nextQuestion();
    } else {
        gameEnd()
    }
}

// Point system

// When timer = 0 or array questions are finished display score
function gameEnd() {
    clearInterval(timerInterval);
    
}
// Tally scores at the end with initials and save to local storage

