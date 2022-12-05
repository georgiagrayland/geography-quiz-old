//start the game event listener

document.getElementById("initiate").addEventListener("click", function(event){
    event.preventDefault();
    createUsername();
});

let gameArea = document.getElementsByClassName("content-box");
let controlArea = document.getElementsByClassName("button");

/** Once the user clicks to enter the quiz they will be presented with the create username section */

function createUsername() {
    gameArea.innerHTML =
    `
    <div class="content-box">
    <form method="POST" action="">
        <label for="username-choice">Create a username to start the quiz:</label><br>
        <br>
        <input type="text" id="username-choice" name="username" placeholder="Enter your username here">
        <br>
        <input id="reset-form" type="reset">
        <input id="submit-form" type="submit" value="Submit">
    </form>
    <div>
    `;

    //let usernameInput = document.getElementById("username-choice");

    //Listen for submission of username

    let submitUsername = document.getElementById("submit-form");
    submitUsername.addEventListener("click", function(event) {
    event.preventDefault();
    submitUsername();
});
}


function submitUsername() {
//check a username has been entered before submitting
let username = document.getElementById("username-choice").innerText;
    if(username.value === "") {
        alert("You have not entered a username, Player 1 is the default");
        username.value = "Player 1";
    } else {
        displayRules();
    }

//If reset username button clicked 
    let resetUsername = document.getElementById("reset-form");

        resetUsername.addEventListener("click", function(event) {
        event.preventDefault();
        createUsername();
    });
}

//Display rules to the user 
function displayRules(){

    gameArea.innerHTML = 
    `
    <div class="content-box">
        <div class="rules-title">
                <h2>Rules for the Game</h2>
         </div>
        <div class="rules">
                    <p>You will have 30 seconds to answer each question</p>
                    <p>There will be 10 questions per difficulty level</p>
                    <p>You must only select one answer per question</p>
                    <p>You cannot change your answer once submitted</p>
                    <p>You will know if you have chosen the correct answer.</p>
                </div>
    </div>

    <div class="button">
    <button id="move-on-btn" type="submit" class="move-on-btn btn ">START QUIZ</button>
    </div>
    `;

    let moveOn = document.getElementById("move-on-btn")
        moveOn.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
    });

}

function selectDifficulty(username) {
    let difficultyName = document.getElementsByClassName("difficulty");
gameArea.innerHTML =
`
    <div class="content-box">
    <div>Welcome ${username.value}</p></div>
        <h2>Please choose a difficulty level:</h2>
        </div>
`;

controlArea.innerHTML =
`<div class="button">
<button id="basic-knowledge-btn" class="difficulty" value="1">Basic Knowledge</button>
<button id="intermediate-btn" class="difficulty" value="2">Intermediate</button>
<button id="geography-genius-btn" class="difficulty" value="2">Geography Genius</button>
</div>
`;

let selectedDifficulty = document.getElementsByClassName("difficulty").value;

let basic = document.getElementById("basic-knowledge-btn");
let basicDifficulty = basic.getAttribute("id");

let intermediate = document.getElementById("intermediate-btn");
let intermediateDifficulty = intermediate.getAttribute("id");

let genius = document.getElementById("geography-genius-btn");
let geniusDifficulty = genius.getAttribute("id");

//Listeners for topic buttons when clicked

basic.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(basicDifficulty, username, questionTracker, timer);
    });

intermediate.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(intermediateDifficulty, username, questionTracker, timer);
    });

genius.addEventListener("click", function(event) {
        event.preventDefault();
        displayQuestion(geniusDifficulty, username, questionTracker, timer);
    });

}

function confirmQuiz(){

    
    gameArea.innerHTML =
    `<div class="content-box">
                <h3 id="difficulty-title">You have chosen the ${difficultyName}</h3>
     
    <button id="start-btn" type="submit" class="start-btn ">START QUIZ</button>
    <button id="change-btn" class="change-btn">CHANGE DIFFICULTY</button>
    </div>
    `;

    let startGame = document.getElementById("start-btn");

        startGame.addEventListener("click", function(event){
        event.preventDefault();
        displayQuestion();
    });

    let changeDifficulty = document.getElementById("change-btn");

        changeDifficulty.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
        });
}


/** To display the current question, score and check answer
 * 
 */



function displayQuestion (questionNumber, correctScore, incorrectScore) {
    let questionNumber = document.getElementById("question-number");
    let currentQuestion =  selectQuestion (question, questionNumber);
    let currentAnswer = selectQuestion(correctAnswer);

    //Code to display the current question 
    gameArea.innerHTML=
    `
    
    <div id="content-box">
        <div id="game-info">
            <div id="question-counter">
                <h3>Question: <span id="question-number"></span></h3>
            </div>
        <div id="current-question">${currentQuestion.question}</div>
    <br>
    <form method="POST" action="">
    <input type="radio" id="answer1" name="answer" value="${currentQuestion.options[0]}">
    <label for="answer1">${currentQuestion.options[0]}"</label>
    <br>
    <input type="radio" id="answer2" name="answer" value="${currentQuestion.options[1]}">
    <label for="answer2">${currentQuestion.options[1]}"</label>
    <br>
    <input type="radio" id="answer3" name="answer" value="${currentQuestion.options[2]}">
    <label for="answer3">${currentQuestion.options[2]}"</label>
    <br>
    <input type="radio" id="answer4" name="answer" value="${currentQuestion.options[3]}">
    <label for="answer4">${currentQuestion.options[3]}"</label>
    </form>
    </div>
    <p id="score-count" class="trackers">
        Correct answers: ${correctScore} / Incorrect Answers: ${incorrectScore}
    </p>
</div>
    `;

// Add code that will display score, timer, and check answer buttons 

controlArea.innerHTML =
`
<button id="answer-check" type="button">Check Answer</button>
`;

let displayedScore = document.getElementById("score-count");
//When user clicks the check answer button
let confirmAnswer = document.getElementById("answer-check");
    confirmAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer();
})

}


//this is where the questions are returned correct or incorrect 
function selectQuestion(selectedDifficulty, questionNumber, correctScore, username) {
    let questions = [
        {
            question:"What is the Capital City of the USA?",
            correctAnswer: "Washington D.C.",
            difficulty: basicDifficulty,
            options: ["New York City", "Paris", "Washington D.C.", "Toronto"],
        },
        {
            question:"What is the longest river in the world?",
            correctAnswer: "The River Nile",
            difficulty: basicDifficulty,
            options: ["The Danube", "The River Nile", "The Seine", "The Thames"],
        },
        {
            question:"Where would you find the Great Wall?",
            correctAnswer: "China",
            difficulty: basicDifficulty,
            options: ["India", "Russia", "Sweden", "China"],
        },
        {
            question:"Which is the largest country on earth (by land mass)",
            correctAnswer: "Russia",
            difficulty: basicDifficulty,
            options: ["Russia", "Spain", "Brazil", "Nigeria"],
        },
        {
            question:"What is the tallest mountain in Europe?",
            correctAnswer: "Mont Blanc",
            difficulty: basicDifficulty,
            options: ["Ben Nevis", "Mount Everest", "Mont Blanc", "Kilimanjaro"],
        },
        {
            question:"Where are the Andes Mountains?",
            correctAnswer: "South America",
            difficulty: basicDifficulty,
            options: ["Europe", "Asia", "Australia", "South America"],
        },
        {
            question:"What is the largest waterfall on Earth?",
            correctAnswer: "Victoria Falls",
            difficulty: basicDifficulty,
            options: ["Angel Falls", "Victoria Falls", "Niagra Falls", "Sutherland Falls"],
        },
        {
            question:"Which is the largest ocean on Earth?",
            correctAnswer: "Pacific Ocean",
            difficulty: basicDifficulty,
            options: ["Pacific Ocean", "Atlantic Ocean", "Antarctic Ocean", "Indian Ocean"],
        },
        {
            question:"Where would you find Kangaroos in the wild?",
            correctAnswer: "Australia",
            difficulty: 1,
            options: ["Pakistan", "Australia", "South Africa", "Argentina"],
        },
        {
            question:"Which is the poorest Country?",
            correctAnswer: "Sudan",
            difficulty: basicDifficulty,
            options: ["United Kingdom", "Canada", "Brazil", "Sudan"],
        },
        {
            question:"Which Rainforest makes up half of the worlds Rainforest cover?",
            correctAnswer: "The Amazon Rainforest",
            difficulty: intermediateDifficulty,
            options: ["The Amazon Rainforest", "The Congo Rainforest", "Southeast Asian Rainforest", "The Daintree Rainforest"],
        },
        {
            question:"What is the Capital City of Malaysia?",
            correctAnswer: "Kuala Lumpar",
            difficulty: intermediateDifficulty,
            options: ["Beijing", "Bangkok", "Jakarata"],
        },
        {
            question:"Which is the highest country (by elevation) in the world?",
            correctAnswer: "Bhutan",
            difficulty: intermediateDifficulty,
            options: ["Ireland", "Colombia", "New Zealand", "Kuala Lumpar"],
        },
        { 
            question:"What is the second most populous country in the world?",
            correctAnswer: "India",
            difficulty: intermediateDifficulty,
            options: ["Iran", "India", "Japan", "Germany"],
        },
        {//Question 5 
            question:"Which Sea separates Europe and Africa?",
            correctAnswer: "The Mediterranean Sea",
            difficulty: intermediateDifficulty,
            options: ["The Dead Sea", "The North Sea", "The Mediterranean Sea", "The Baltic Sea"],
        },
        {
            question:"What is the longest River in Asia?",
            correctAnswer: "The Yangtze",
            difficulty: intermediateDifficulty,
            options: ["The Indus", "The Yellow River", "The Mekong", "The Yangtze"],
        },
        {
            question:"What is the largest River in North America?",
            correctAnswer: "Lake Superior",
            difficulty: intermediateDifficulty,
            options: ["Lake Erie", "Lake Superior", "Lake Michigan", "Lake Huron"],
        },
        {
            question:"Which Ocean lies between India and Africa?",
            correctAnswer: "The Indian Ocean",
            difficulty: intermediateDifficulty,
            options: ["The Indian Ocean", "The Atlantic Ocean", "The Pacific Ocean", "The Southern Ocean"], 
        },
        {
            question:"Which country has the lowest population density?",
            correctAnswer: "Mongolia",
            difficulty: intermediateDifficulty,
            options: ["Mongolia", "Bangladesh", "Argentina", "Chad"], 
        },
        {//this is question 10
            question:"Which Italian City is famous for its canals?",
            correctAnswer: "Venice",
            difficulty: intermediateDifficulty,
            options: ["Rome", "Naples", "Milan", "Venice"], 
        },
        {//start of hardest difficulty questions 
            question:"What is the oldest city in the world?",
            correctAnswer: "Damascus",
            difficulty: geniusDifficulty,
            options: ["Dublin", "Florence", "Damascus", "London"], 
        },
        { 
            question:"Which country has the highest number of Capital Cities?",
            correctAnswer: "South Africa",
            difficulty: geniusDifficulty,
            options: ["Greece", "Algeria", "Colombia", "South Africa"], 
        },
        { 
            question:"What is the Earth's approximate water to land ratio?",
            correctAnswer: "71:29",
            difficulty: geniusDifficulty,
            options: ["71:29", "35:65", "57:33", "42:58"], 
        },
        { 
            question:"What is the name of the supercontinent that existed 200 million years ago?",
            correctAnswer: "Pangea",
            difficulty: geniusDifficulty,
            options: ["Eurasia", "Rodinia", "Pangea", "Gondwana"], 
        },
        { 
            question:"Which country has the greatest number of international land borders?",
            correctAnswer: "China",
            difficulty: geniusDifficulty,
            options: ["France", "China", "Peru", "Indonseia"], 
        },
        { 
            question:"What is the distance between the USA and Russia at the narrowest point (The Bering Strait)?",
            correctAnswer: "55 miles",
            difficulty: geniusDifficulty,
            options: ["55 miles", "36 miles", "105 miles", "82 miles"], 
        },
        { // 7
            question:"Which is the tallest Mountain in the United Kingdom?",
            correctAnswer: "Ben Nevis",
            difficulty: geniusDifficulty,
            options: ["Great Gable", "Scafell Pike", "Snowdon", "Ben Nevis"], 
        },
        { //8
            question:"What is the currency of Sweden?",
            correctAnswer: "Krona",
            difficulty: geniusDifficulty,
            options: ["Lev", "Krona", "Euro", "Forint"], 
        },
        { //9
            question:"To what country do the Canary Islands belong?",
            correctAnswer: "Spain",
            difficulty: geniusDifficulty,
            options: ["Denmark", "Morocco", "Spain", "Italy"], 
        },
        { //10
            question:"To the nearest billion, how large is the world's population?",
            correctAnswer: "8",
            difficulty: geniusDifficulty,
            options: ["8", "5", "6", "10"], 
        },
    ];


//put in loop to go through questions 1 to 10 per difficulty
 //Go through Questions by difficulty selected
 let questionsbyDifficulty = [];
 for(let quesiton of questions){
    if (question.difficulty === selectedDifficulty){
    questionsbyDifficulty.push(quesiton);
 }
}

if (questionNumber < selectedDifficulty.length){
    return selectedDifficulty.question[questions.question]
} else if (questionNumber === selectedDifficulty.length){
    endGame();
}
}
//put in a stop at end of 10 questions to end the game 





function checkAnswer (){

    //Do we need this??
    let selectedAnswer = selectQuestion.questions.options;
    let correctAnswer = selectQuestion.questions.correctAnswer;

    //.checked code for the radio button inspired by discussions on stack overflow

    if (correctAnswer.checked) {
        alert("Correct Answer!");
    correctAnswerMessage();
    } else {
        alert("That's not right");
        incorrectAnswer();
    }
}



function endGame(){

}

function correctAnswerMessage (currentAnswer, username, questionNumber, correctScore, incorrectScore) { 
//Display message and show next question button
gameArea.innerHTML =
`
<h3 id="answer-type">Correct!</h3> 
<p>${currentAnswer} is right.
Move on for more!</p>
<button id="continue" type="submit">Next Question</button>
`;

    //Wait for user to click next question button
    let continueGame = document.getElementById("continue");
        continueGame.addEventListener("click", function(event){
        event.preventDefault();
        questionNumber++
        correctScore++
        displayQuestion(questionNumber, correctScore, incorrectScore);
    });

}

function incorrectAnswer (currentAnswer, username, questionNumber, correctScore, incorrectScore) {
//Display message and show next question button 
gameArea.innerHTML =

//Display message and show next question button
gameArea.innerHTML =
`<h3 id="answer-type">Incorrect Answer</h3> 
    <p>${currentAnswer} was the correct answer.</p>
    <button id="continue" type="submit">Next Question</button>
`;

    //Wait for user to click next question button
    let continueGame = document.getElementById("continue");
        continueGame.addEventListener("click", function(event){
        event.preventDefault();
        questionNumber++
        incorrectScore++
        displayQuestion(questionNumber, correctScore, incorrectScore);
    });

}

function showResults();



//Collecting constant elements needed before putting into functions


//Input and container elements

const questionTracker = document.getElementById("question-number");
const timer = document.getElementById("question-timer");







