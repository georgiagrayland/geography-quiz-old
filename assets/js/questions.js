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
