//Collecting elements neded 

//Initiating game
let start = document.getElementById("initiate");
let gameArea = document.querySelector(".content-box");

//Creating username
//let username = document.getElementById("username-choice");
//let resetUsername = document.getElementById("reset-form");
//let submitUsername = document.getElementById("submit-form");


//Starting the game event listener

function createUsername() {
    console.log("ggg", gameArea);
    gameArea.innerHTML ="name";

}

start.addEventListener("click", function(e) {
    e.preventDefault();
    //createUsername();
    displayRules();
});

/** Once the user clicks the button to enter the quiz they will be presented with the create username section 

function createUsername() {
    gameArea.innerHTML =
    `
    <div class="content-box">
    <form action="">
        <label for="username-choice">Create a username to start the quiz:</label><br>
        <br>
        <input type="text" id="username-choice" name="username" placeholder="Enter your username here">
        <br>
        <input id="reset-form" type="reset">
        <input id="submit-form" type="submit" value="Submit">
    </form>
    <div>
    `;


}

function confirmUsername(username) {
    //check a username has been entered before submitting
    if(username === "") {
        alert("You have not entered a username, please choose a username");
    }

    //If reset username button clicked 
        resetUsername.addEventListener("click", function(event) {
        event.preventDefault();
        createUsername();
    });

    //When valid username is entered
        submitUsername.addEventListener("click", function(event) {
        event.preventDefault();
        displayRules(username);
    });
}

**/

/** Display the rules and create button to move into difficulty selector  */
function displayRules(username) {

    gameArea.innerHTML = 
    `
    <div class="content-box">
        <div id="rules-title">
                <h2>Rules for the Game</h2>
         </div>
         <hr>
        <div class="rules">
                    <p>You will have 30 seconds to answer each question</p><br>
                    <p>There will be 10 questions per difficulty level</p><br>
                    <p>You must only select one answer per question</p><br>
                    <p>You cannot change your answer once submitted</p><br>
                    <p>You will know if you have chosen the correct answer.</p><br>
                </div>
    </div>

    <div class="button">
    <button id="move-on-btn" type="submit" class="move-on-btn btn">START QUIZ</button>
    </div>
    `;

    let moveOn = document.getElementById("move-on-btn");
        moveOn.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
    });

}

/** User selects a difficutly out of 3 levels which will each display 10 questions and can move on to quiz area */
function selectDifficulty() {   
    gameArea.innerHTML =
`
    <div class="content-box">
    <h3 id="welcome-message">Welcome</h3>
        <h2>Please choose a difficulty level:</h2>
 
        <button id="basic-knowledge-btn" class="difficulty" value="1">Basic Knowledge</button><br>
        <button id="intermediate-btn" class="difficulty" value="2">Intermediate</button><br>
        <button id="geography-genius-btn" class="difficulty" value="3">Geography Genius</button><br>
    </div>
`;

//Listeners for topic buttons when clicked

let difficultyName = document.getElementsByClassName("difficulty");
let difficulty = document.getElementsByClassName("difficulty");

let basicDifficulty = document.getElementById("basic-knowledge-btn");
    basicDifficulty.addEventListener("click", function(event) {
    event.preventDefault();
    startGame(basicDifficulty);
    });

let intermediateDifficulty = document.getElementById("intermediate-btn");
    intermediateDifficulty.addEventListener("click", function(event) {
    event.preventDefault();
    startGame(intermediateDifficulty);
    });

let geniusDifficulty = document.getElementById("geography-genius-btn");
    geniusDifficulty.addEventListener("click", function(event) {
    event.preventDefault();
    startGame(geniusDifficulty);
    });

}

/** To display the current question, radio button to select answer, score and create check answer button
 * 
 */

function startGame () {
    let questionSet = [];
    let questionIndex = 0;
    let difficulty = questionSet[questionIndex].difficulty;
    currentQuestion = questions.filter((question) => {
        return question.difficulty == difficulty;
        displayQuestion();
    })
}

function displayQuestion() {
    //Code to display the current question 
    gameArea.innerHTML=
    `
    
    <div id="content-box">
        <div id="game-info">
            <div id="question-counter">
                <h3>Question: <span id="question-number"></span></h3>
            </div>
            <div id="current-question"></div>
        </div>
        <hr> 
    <br>
    <form method="POST" action="">
    <input type="radio" id="answer1" name="answer">
    <label for="answer1"></label>
    <br>
    <input type="radio" id="answer2" name="answer" value="">
    <label for="answer2"></label>
    <br>
    <input type="radio" id="answer3" name="answer">
    <label for="answer3"></label>
    <br>
    <input type="radio" id="answer4" name="answer">
    <label for="answer4"</label>
    </form>
    </div>
    <p id="score-count" class="trackers">
        Correct answers: ${correctScore} / Incorrect Answers: ${incorrectScore}
    </p>
    <button id="answer-check" type="button">Check Answer</button>
    </div>
    `;

//When user clicks the check answer button
let questionNumber = document.getElementById("question-number");
let question = document.getElementById("current-question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let displayedScore = document.getElementById("score-count");
let currentAnswer = questionSet[questionIndex].option === true;

question.innerHTML = questionSet[questionIndex].question;
answer1.innerHTML = questionSet[questionIndex].answers[0].option;
answer2.innerHTML = questionSet[questionIndex].answers[1].option;
answer3.innerHTML = questionSet[questionIndex].answers[2].option;
answer4.innerHTML = questionSet[questionIndex].answers[3].option;

let confirmAnswer = document.getElementById("answer-check");
    confirmAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer();
});

}


/**Stored questions, correct answers, and all options/incorrect answers */
function selectQuestion(selectedDifficulty, questionNumber, correctScore, username) {
    
//put in loop to go through questions 1 to 10 per difficulty
 //Go through Questions by difficulty selected
 let questionsbyDifficulty = [];
 for(let quesiton of questions){
    if (question.difficulty === selectedDifficulty){
    questionsbyDifficulty.push(quesiton);
 }
}

//Stop at end of 10 questions per difficulty chosen
if (questionNumber < selectedDifficulty.length){
    return selectedDifficulty.question[questions.question];
} else if (questionNumber === selectedDifficulty.length){
    showResults(correctScore, questionNumber, username);
    }
}
 

/**listens for if user has selected correct answer or not and move to answer message */
function checkAnswer (){

    //let selectedAnswer = questionSet[questionIndex].answers.checked;??

    //.checked code for the radio button inspired by discussions on stack overflow

    if (selectedAnswer === true) {
        alert("Correct Answer!");
    correctAnswerMessage();
    } else {
        alert("That's not right");
        incorrectAnswer();
    }
}


/** Display message when correct answer is chosen and show next question button */
function correctAnswerMessage (currentAnswer, username, questionNumber, correctScore, incorrectScore) { 
//Message and next question button
gameArea.innerHTML =
`
<div id="content-box">
<h3 id="answer-type">Correct!</h3> 
<p>${currentAnswer} is right.
Move on for more!</p>
<button id="continue" type="submit">Next Question</button>
</div>
`;

    //Wait for user to click next question button
let continueGame = document.getElementById("continue");
    continueGame.addEventListener("click", function(event){
        event.preventDefault();
        questionNumber++;
        correctScore++;
        questionIndex++;
        displayQuestion(questionNumber, correctScore, incorrectScore);
    });

}

/** Display message when incorrect answer is chosen and show next question button */
function incorrectAnswer (currentAnswer, username, questionNumber, correctScore, incorrectScore) {

//Display message and show next question button
gameArea.innerHTML =
`
<div id="content-box">
<h3 id="answer-type">Incorrect Answer</h3> 
    <p>${currentAnswer} was the correct answer.</p>
    <button id="continue" type="submit">Next Question</button>
    </div>
`;

    //Wait for user to click next question button
    continueGame.addEventListener("click", function(event) {
        event.preventDefault();
        questionNumber++;
        incorrectScore++;
        displayQuestion(questionNumber, correctScore, incorrectScore);
    });

}

/**Function that displays results page once all 10 questions have been answered  */
function showResults() {

   gameArea.innerHTML =
   `
   <div id="content-box">
    <div id="end-message">
        <h2>You have finished the quiz, thank you for playing</h2>
    </div>
    <div id="result-messsage">
        <p>Congratulations, <br> you scored ${correctScore} out of 10.</p>
    </div>
   <button id="new-game" type="submit">Play Again</button>
   </div>
   `;

    //Listener to start a new game 
    
let playAgain = document.getElementById("new-game");
    playAgain.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
    });
}








