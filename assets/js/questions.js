//Page to store quiz questions
let basicDifficulty = document.getElementById("basic-knowledge-btn");
let intermediateDifficulty = document.getElementById("intermediate-btn");
let geniusDifficulty = document.getElementById("geography-genius-btn");

const questions = [
    {
        question:"What is the Capital City of the USA?",
        answers: [
            {option: "New York City", answer: false},
            {option: "Paris", answer: false},
            {option: "Washington D.C.", answer: true},
            {option: "Toronto", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"What is the longest river in the world?",
        answers: [
            {option: "The Nile", answer: true},
            {option: "The Danube", answer: false},
            {option: "The Seine", answer: false},
            {option: "The Thames", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Where would you find the Great Wall?",
        answers: [
            {option: "Russia", answer: false},
            {option: "Sweden", answer: false},
            {option: "China", answer: true},
            {option: "India", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Which is the largest country on earth (by land mass)",
        answers: [
            {option: "Spain", answer: false},
            {option: "Brazil", answer: false},
            {option: "Nigeria", answer: false},
            {option: "Russia", answer: true}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"What is the tallest mountain in Europe?",
        answers: [
            {option: "Mont Blanc", answer: true},
            {option: "Mount Everest", answer: false},
            {option: "Ben Nevis", answer: false},
            {option: "Kilimajaro", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Where are the Andes Mountains?",
        answers: [
            {option: "Europe", answer: false},
            {option: "South America", answer: true},
            {option: "Asia", answer: false},
            {option: "Australia", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"What is the largest waterfall on Earth?",
        answers: [
            {option: "Angel Falls", answer: false},
            {option: "Niagra Falls", answer: false},
            {option: "Sutherland Falls", answer: false},
            {option: "Victoria Falls", answer: true}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Which is the largest ocean on Earth?",
        answers: [
            {option: "Pacific Ocean", answer: true},
            {option: "Atlantic Ocean", answer: false},
            {option: "Southern Ocean", answer: false},
            {option: "Indian Ocean", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Where would you find Kangaroos in the wild?",
        answers: [
            {option: "South Africa", answer: false},
            {option: "Australia", answer: true},
            {option: "Argentina", answer: false},
            {option: "Pakistan", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Which is the poorest Country?",
        answers: [
            {option: "UK", answer: false},
            {option: "Brazil", answer: false},
            {option: "Sudan", answer: true},
            {option: "Canada", answer: false}
        ],
        difficulty: basicDifficulty
    },
    {
        question:"Which Rainforest makes up half of the worlds Rainforest cover?",
        answers: [
            {option: "The Amazon Rainforest", answer: true},
            {option: "The Congo Rainforest", answer: false},
            {option: "Southeast Asian Rainforest", answer: false},
            {option: "The Daintree Rainforest", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {
        question:"What is the Capital City of Malaysia?",
        answers: [
            {option: "Bankok", answer: false},
            {option: "Jakarta", answer: false},
            {option: "Kuala Lumpar", answer: true},
            {option: "Beijing", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {
        question:"Which is the highest country (by elevation) in the world?",
        answers: [
            {option: "Ireland", answer: false},
            {option: "Colombia", answer: false},
            {option: "New Zealand", answer: false},
            {option: "Bhutan", answer: true}
        ],
        difficulty: intermediateDifficulty
    },
    { 
        question:"What is the second most populous country in the world?",
        answers: [
            {option: "India", answer: true},
            {option: "Iran", answer: false},
            {option: "Japan", answer: false},
            {option: "Germany", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {//Question 5 
        question:"Which Sea separates Europe and Africa?",
        answers: [
            {option: "The Dead Sea", answer: false},
            {option: "The Mediterranean Sea", answer: true},
            {option: "The North Sea", answer: false},
            {option: "The Baltic Sea", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {
        question:"What is the longest River in Asia?",
        answers: [
            {option: "The Indus", answer: false},
            {option: "The Mekong", answer: false},
            {option: "The Yangtze", answer: true},
            {option: "The Yellow River", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {//Q7
        question:"What is the largest Lake in North America?",
        answers: [
            {option: "Lake Superior", answer: true},
            {option: "Lake Erie", answer: false},
            {option: "Lake Michigan", answer: false},
            {option: "Lake Huron", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {
        question:"Which Ocean lies between India and Africa?",
        answers: [
            {option: "The Atlantic Ocean", answer: false},
            {option: "The Indian Ocean", answer: true},
            {option: "The Southern Ocean", answer: false},
            {option: "The Pacific Ocean", answer: false}
        ],
        difficulty: intermediateDifficulty
    },
    {
        question:"Which country has the lowest population density?",
        answers: [
            {option: "Chad", answer: false},
            {option: "Argentina", answer: false},
            {option: "Bangladesh", answer: false},
            {option: "Mongolia", answer: true}
        ],
        difficulty: intermediateDifficulty
    },
    {//this is question 10
        question:"Which Italian City is famous for its canals?",
        answers: [
            {option: "Venice", answer: true},
            {option: "Naples", answer: false},
            {option: "Rome", answer: false},
            {option: "Milan", answer: false},
        ],
        difficulty: intermediateDifficulty
    },
    {//start of hardest difficulty questions 
        question:"What is the oldest city in the world?",
        answers: [
            {option: "Dublin", answer: false},
            {option: "Florence", answer: false},
            {option: "Damascus", answer: true},
            {option: "London", answer: false},
        ],
        difficulty: geniusDifficulty
    },
    { 
        question:"Which country has the highest number of Capital Cities?",
        answers: [
            {option: "Algeria", answer: false},
            {option: "Greece", answer: false},
            {option: "Colombia", answer: false},
            {option: "South Africa", answer: true},
        ],
        difficulty: geniusDifficulty 
    },
    { 
        question:"What is the Earth's approximate water to land ratio?",
        answers: [
            {option: "71:29", answer: true},
            {option: "35:65", answer: false},
            {option: "57:33", answer: false},
            {option: "42:58", answer: false},
        ],
        difficulty: geniusDifficulty 
    },
    { 
        question:"What is the name of the supercontinent that existed 200 million years ago?",
        answers: [
            {option: "Eurasia", answer: false},
            {option: "Pangea", answer: true},
            {option: "Rodinia", answer: false},
            {option: "Gondwana", answer: false},
        ],
        difficulty: geniusDifficulty
    },
    { 
        question:"Which country has the greatest number of international land borders?",
        answers: [
            {option: "China", answer: true},
            {option: "Peru", answer: false},
            {option: "Indonesia", answer: false},
            {option: "France", answer: false},
        ],
        difficulty: geniusDifficulty
    },
    { 
        question:"What is the distance between the USA and Russia at the narrowest point (The Bering Strait)?",
        answers: [
            {option: "82 miles", answer: false},
            {option: "105 miles", answer: false},
            {option: "55 miles", answer: true},
            {option: "36 miles", answer: false},
        ],
        difficulty: geniusDifficulty 
    },
    { // 7
        question:"Which is the tallest Mountain in the United Kingdom?",
        answers: [
            {option: "Great Gable", answer: false},
            {option: "Scafell Pike", answer: false},
            {option: "Snowdon", answer: false},
            {option: "Ben Nevis", answer: true},
        ],
        difficulty: geniusDifficulty 
    },
    { //8
        question:"What is the currency of Sweden?",
        answers: [
            {option: "Lev", answer: false},
            {option: "Forint", answer: false},
            {option: "Krone", answer: true},
            {option: "Euro", answer: false},
        ],
        difficulty: geniusDifficulty 
    },
    { //9
        question:"To which country do the Canary Islands belong?",
        answers: [
            {option: "Morocco", answer: false},
            {option: "Spain", answer: true},
            {option: "Italy", answer: false},
            {option: "Denmark", answer: false},
        ],
        difficulty: geniusDifficulty 
    },
    { //10
        question:"To the nearest billion, how large is the world's population?",
        answers: [
            {option: "6", answer: false},
            {option: "5", answer: false},
            {option: "8", answer: true},
            {option: "10", answer: false},
        ],
        difficulty: geniusDifficulty
    },
];
