//Page to store quiz questions

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
