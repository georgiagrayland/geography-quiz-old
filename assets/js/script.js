//start the game event listener
const start = document.getElementById("initiate");
    start.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("testing my javascript")
    createUsername
});

let gameArea = document.getElementsByClassName("content-box");

/** Once the user clicks the button to enter the quiz they will be presented with the create username section */

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

    //Listen for submission of username

    let submitUsername = document.getElementById("submit-form");
    submitUsername.addEventListener("click", function(event) {
    event.preventDefault();
    submitUsername(username);
});
}

/**Function that will allow the user to submit a username when a value has been input and move on to rules section */

function submitUsername() {
//check a username has been entered before submitting
let username = document.getElementById("username-choice").innerText;
    if(username.valueOf === "") {
        alert("You have not entered a username, please choose a username");
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

/** Display the rules and create button to move into difficulty selector  */
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

/** User selects a difficutly out of 3 levels which will each display 10 questions and can move on to quiz area */
function selectDifficulty(username) {
    let difficultyName = document.getElementsByClassName("difficulty");
gameArea.innerHTML =
`
    <div class="content-box">
    <div>Welcome ${username.value}</p></div>
        <h2>Please choose a difficulty level:</h2>
        </div>
 
       <div class="button">
        <button id="basic-knowledge-btn" class="difficulty" value="1">Basic Knowledge</button>
        <button id="intermediate-btn" class="difficulty" value="2">Intermediate</button>
        <button id="geography-genius-btn" class="difficulty" value="2">Geography Genius</button>
        </div>
    </div>
`;

let selectedDifficulty = document.getElementsByClassName("difficulty");

let basic = document.getElementById("basic-knowledge-btn");
let basicDifficulty = basic.getAttribute("id");

let intermediate = document.getElementById("intermediate-btn");
let intermediateDifficulty = intermediate.getAttribute("id");

let genius = document.getElementById("geography-genius-btn");
let geniusDifficulty = genius.getAttribute("id");

//Listeners for topic buttons when clicked

basic.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(basicDifficulty, username, questionNumber, currentQuestion);
    });

intermediate.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(intermediateDifficulty, username, questionNumber, currentQuestion);
    });

genius.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(geniusDifficulty, username, questionNumber, currentQuestion);
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
        displayQuestion(selectedDifficulty, currentQuestion, );
    });

    let changeDifficulty = document.getElementById("change-btn");

        changeDifficulty.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
        });
}


/** To display the current question, score and create check answer button
 * 
 */


function displayQuestion (questionNumber, correctScore, incorrectScore) {

    //let questionNumber = document.getElementById("question-number").value = 1;
    let currentQuestion = selectQuestion(selectedDifficulty, question, questionNumber);
    let currentAnswer = selectQuestion(correctAnswer);
    //let correctScore = 0;
    //let incorrectScore = 0;

    //Code to display the current question 
    gameArea.innerHTML=
    `
    
    <div id="content-box">
        <div id="game-info">
            <div id="question-counter">
                <h3>Question: <span id="question-number"></span></h3>
            </div>
            <div id="current-question">${currentQuestion.question}</div>
        </div>
        <hr> 
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
    <button id="answer-check" type="button">Check Answer</button>
    </div>
    `;

let displayedScore = document.getElementById("score-count");
//When user clicks the check answer button
let confirmAnswer = document.getElementById("answer-check");
    confirmAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer();
});

}


/**Stored questions, correct answers, and all options/incorrect answers */
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

//Stop at end of 10 questions per difficulty chosen
if (questionNumber < selectedDifficulty.length){
    return selectedDifficulty.question[questions.question];
} else if (questionNumber === selectedDifficulty.length){
    showResults(correctScore, questionNumber, username);
    }
}
 

/**listens for if user has selected correct answer or not and move to answer message */
function checkAnswer (){

    //Do we need this??
    let selectedAnswer = selectQuestion.questions.options.checked;
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
    let continueGame = document.getElementById("continue");
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
        <p>Congratulations, ${username}, <br> you scored ${correctScore} out of 10.</p>
    </div>
   <button id="new-game" type="submit">Play Again</button>
   </div>
   `;

    //Listener to start a new game 
    
    let playAgain = document.getElementById("new-game");
    playAgain.addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty(username);
    });
}





//Collecting constant elements needed before putting into functions

const questionTracker = document.getElementById("question-number");








