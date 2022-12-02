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

    let usernameInput = document.getElementById("username-choice");
    let submitUsername = document.getElementById("submit-form");

    //Listen for submission of username

    document.getElementById("submit-form").addEventListener("click", function(event) {
    event.preventDefault();
    submitUsername();
});
}


function submitUsername() {
//check a username has been entered before submitting
let username = document.getElementById("username-choice");
    if(username.value === "") {
        alert("You have not entered a username, Player 1 is the default")
        username.value = "Player 1";
    }

//If reset username button clicked 
    let resetUsername = document.getElementById("reset-form");

        resetUsername.addEventListener("click", function(event) {
        event.preventDefault();
        createUsername();
    });

submitUsername.addEventListener("click", function(event){
    event.preventDefault();
    displayRules();
});
}

//Display rules to the user 
function displayRules(){

    let selectedDifficulty = document.getElementById("difficulty")
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

    let moveOn = document.getElementById("move-on-btn").addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
    });

}

function selectDifficulty(username) {
gameArea.innerHTML =
`
    <div class="content-box">
    <div>Welcome ${username}</p></div>
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

let basic = document.getElementById("basic-knowledge-btn");
let basicDifficulty = basic.getAttribute("id");

let intermediate = document.getElementById("intermediate-btn");
let intermediateDifficulty = intermediate.getAttribute("id")

let genius = document.getElementById("geography-genius-btn");
let geniusDifficulty = genius.getAttribute("id");

//Listeners for topic buttons when clicked

basic.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(basicDifficulty, username, questionTracker, timer);
    })

intermediate.addEventListener("click", function(event) {
    event.preventDefault();
    displayQuestion(intermediateDifficulty, username, questionTracker, timer);
    })

genius.addEventListener("click", function(event) {
        event.preventDefault();
        displayQuestion(geniusDifficulty, username, questionTracker, timer);
    })

}

function confirmQuiz(){

    let difficultyName = document.getElementsByClassName("difficulty");
    gameArea.innerHTML =
    `<div class="content-box">
                <h3 id="difficulty-title">You have chosen the ${difficultyName.value}</h3>
     
    <button id="start-btn" type="submit" class="start-btn ">START QUIZ</button>
    <button id="change-btn" class="change-btn">CHANGE DIFFICULTY</button>
    </div>
    `
    let startQuiz = document.getElementById("start-btn").addEventListener("click", function(event){
        event.preventDefault();
        displayQuestion();
    });

    let changeDifficulty = document.getElementById("change-btn").addEventListener("click", function(event){
        event.preventDefault();
        selectDifficulty();
        })
}


/** To display the current question, score and check answer
 * 
 */

function displayQuestion (questionNumber, correctScore, incorrectScore, timer, questionTracker) {
    let currentQuestion = selectQuestion(difficultyName, questionNumber, correctScore, timer);

    //Code to display the current question 
    gameArea.innerHTML=
    `
    //Add html section here to add the display of the game questions with ids & radio button
    `
}


//this is where the questions are returned correct or incorrect 
function selectQuestion(selectedDifficulty, questionNumber, correctScore, username) {
    let questions = [
        {
            question:"What is the Capital City of the USA?",
            correctAnswer: "Washington D.C.",
            difficulty: 1,
            options: ["New York City", "Paris", "Washington D.C.", "Toronto"],
        },
        {
            question:"What is the longest river in the world?",
            correctAnswer: "The River Nile",
            difficulty: 1,
            options: ["The Danube", "The River Nile", "The Seine", "The Thames"],
        },
        {
            question:"Where would you find the Great Wall?",
            correctAnswer: "China",
            difficulty: 1,
            options: ["India", "Russia", "Sweden", "China"],
        },
        {
            question:"Which is the largest country on earth (by land mass)",
            correctAnswer: "Russia",
            difficulty: 1,
            options: ["Russia", "Spain", "Brazil", "Nigeria"],
        },
        {
            question:"What is the tallest mountain in Europe?",
            correctAnswer: "Mont Blanc",
            difficulty: 1,
            options: ["Ben Nevis", "Mount Everest", "Mont Blanc", "Kilimanjaro"],
        },
        {
            question:"Where are the Andes Mountains?",
            correctAnswer: "South America",
            difficulty: 1,
            options: ["Europe", "Asia", "Australia", "South America"],
        },
        {
            question:"What is the largest waterfall on Earth?",
            correctAnswer: "Victoria Falls",
            difficulty: 1,
            options: ["Angel Falls", "Victoria Falls", "Niagra Falls", "Sutherland Falls"],
        },
        {
            question:"Which is the largest ocean on Earth?",
            correctAnswer: "Pacific Ocean",
            difficulty: 1,
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
            difficulty: 1,
            options: ["United Kingdom", "Canada", "Brazil", "Sudan"],
        },
        {
            question:"Which Rainforest makes up half of the worlds Rainforest cover?",
            correctAnswer: "The Amazon Rainforest",
            difficulty: 2,
            options: ["The Amazon Rainforest", "The Congo Rainforest", "Southeast Asian Rainforest", "The Daintree Rainforest"],
        },
        {
            question:"What is the Capital City of Malaysia?",
            correctAnswer: "Kuala Lumpar",
            difficulty: 2,
            options: ["Beijing", "Bangkok", "Jakarata"],
        },
        {
            question:"Which is the highest country (by elevation) in the world?",
            correctAnswer: "Bhutan",
            difficulty: 2,
            options: ["Ireland", "Colombia", "New Zealand", "Kuala Lumpar"],
        },
        { //this is question 4
            question:"What is the second most populous country in the world?",
            correctAnswer: "India",
            difficulty: 2,
            options: ["Iran", "India", "Japan", "Germany"],
        },
        {
            question:"Which Sea separates Europe and Africa?",
            correctAnswer: "The Mediterranean Sea",
            difficulty: 2,
            options: ["The Dead Sea", "The North Sea", "The Mediterranean Sea", "The Baltic Sea"],
        },
        {
            question:"What is the longest River in Asia?",
            correctAnswer: "The Yangtze",
            difficulty: 2,
            options: ["The Indus", "The Yellow River", "The Mekong", "The Yangtze"],
        },
        {
            question:"What is the largest River in North America?",
            correctAnswer: "Lake Superior",
            difficulty: 2,
            options: ["Lake Erie", "Lake Superior", "Lake Michigan", "Lake Huron"],
        },
        {
            question:"Which Ocean lies between India and Africa?",
            correctAnswer: "The Indian Ocean",
            difficulty: 2,
            options: ["The Indian Ocean", "The Atlantic Ocean", "The Pacific Ocean", "The Southern Ocean"], 
        },
        {
            question:"Which country has the lowest population density?",
            correctAnswer: "Mongolia",
            difficulty: 2,
            options: ["Mongolia", "Bangladesh", "Argentina", "Chad"], 
        },
        {//this is question 10
            question:"Which Italian City is famous for its canals?",
            correctAnswer: "Venice",
            difficulty: 2,
            options: ["Rome", "Naples", "Milan", "Venice"], 
        },
        {//start of hardest difficulty questions 
            question:"What is the oldest city in the world?",
            correctAnswer: "Damascus",
            difficulty: 3,
            options: ["Dublin", "Florence", "Damascus", "London"], 
        },
        { 
            question:"Which country has the highest number of Capital Cities?",
            correctAnswer: "South Africa",
            difficulty: 3,
            options: ["Greece", "Algeria", "Colombia", "South Africa"], 
        },
        { 
            question:"What is the Earth's approximate water to land ratio?",
            correctAnswer: "71:29",
            difficulty: 3,
            options: ["71:29", "35:65", "57:33", "42:58"], 
        },
        { 
            question:"What is the name of the supercontinent that existed 200 million years ago?",
            correctAnswer: "Pangea",
            difficulty: 3,
            options: ["Eurasia", "Rodinia", "Pangea", "Gondwana"], 
        },
        { 
            question:"Which country has the greatest number of international land borders?",
            correctAnswer: "China",
            difficulty: 3,
            options: ["France", "China", "Peru", "Indonseia"], 
        },
        { 
            question:"What is the distance between the USA and Russia at the narrowest point (The Bering Strait)?",
            correctAnswer: "55 miles",
            difficulty: 3,
            options: ["55 miles", "36 miles", "105 miles", "82 miles"], 
        },
        { //this is question 7
            question:"Which is the tallest Mountain in the United Kingdom?",
            correctAnswer: "Ben Nevis",
            difficulty: 3,
            options: ["Great Gable", "Scafell Pike", "Snowdon", "Ben Nevis"], 
        },
        { //8
            question:"What is the currency of Sweden?",
            correctAnswer: "Krona",
            difficulty: 3,
            options: ["Lev", "Krona", "Euro", "Forint"], 
        },
        { //9
            question:"To what country do the Canary Islands belong?",
            correctAnswer: "Spain",
            difficulty: 3,
            options: ["Denmark", "Morocco", "Spain", "Italy"], 
        },
        { //10
            question:"To the nearest billion, how large is the world's population?",
            correctAnswer: "8",
            difficulty: 3,
            options: ["8", "5", "6", "10"], 
        },
    ]
}

function correctAnswer () {

}

function incorrectAnswer () {

}




//Collecting constant elements needed before putting into functions

//Start Game buttons

//Rules
const basicRules = document.getElementById("basic-knowledge-rules");
const intermediateRules = document.getElementById("intermediate-rules");
const geniusRules = document.getElementById("geography-genius-rules");

//Input and container elements

const questionTracker = document.getElementById("question-number");
const timer = document.getElementById("question-timer");







