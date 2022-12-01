//Collecting constant elements needed
//Difficulty Selectors
const basicDifficulty = document.getElementById("basic-knowledge-btn");
const intermediateDifficulty = document.getElementById("intermediate-btn");
const geniusDifficulty = document.getElementById("geography-genius-btn");

//Start Game buttons
const basicQuiz = document.getElementById("basic-start-btn");
const intermediateQuiz = document.getElementById("intermediate-start-btn");
const geniusQuiz = document.getElementById("genius-start-btn");

//Rules
const basicRules = document.getElementById("basic-knowledge-rules");
const intermediateRules = document.getElementById("intermediate-rules");
const geniusRules = document.getElementById("geography-genius-rules");

//Input and container elements
const inputUsername = document.getElementById("username-choice");
const questionTracker = document.getElementById("question-number");
const timer = document.getElementById("question-timer");
const difficultyName = document.getElementById("difficulty-title");
const chosenUsername = document.getElementById("chosen-username");

//Change diffiuclty reset button
const changeBasicDifficulty = document.getElementById("basic-change-btn");
const changeIntermediateDifficulty = document.getElementById("intermediate-change-btn");
const changeGeniusDifficulty = document.getElementById("genius-change-btn");



//ADD VARIABLES

//Add section of all event listeners

//When difficuly clicked
basicDifficulty.addEventListener("click", startGameRules);
intermediateDifficulty.addEventListener("click", startGameRules);
geniusDifficulty.addEventListener("click", startGameRules);

//When change difficulty clicked
changeBasicDifficulty.addEventListener("click", startChangeGameDifficulty);
changeIntermediateDifficulty.addEventListener("click", startChangeGameDifficulty);
changeGeniusDifficulty.addEventListener("click", startChangeGameDifficulty);

//When start game button clicked to enter questions section
basicQuiz.addEventListener("click", startGame);
intermediateQuiz.addEventListener("click", startGame);
geniusQuiz.addEventListener("click", startGame);


//Add section of game variables


//function submitUsername() {
  //  if (createUsername.value != null && createUsername.value != undefined && createUsername.value.length > 0);



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
