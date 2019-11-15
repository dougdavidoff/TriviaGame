
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[TouchList.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// crteate questions here
var questions = [
    new Question("Chicago-O’Hare International Airport’s three-letter code is 'ORD.' But there is no 'D' in O’Hare’s name. What’s the origin of the 'ORD' code?", ["'D' indicated Chicago’s location on Lake Michigan.", "O’Hare Depot, the suburban rail freight yard which grew into O’Hare Airport.", "Orchard Park, the village now covered by O’Hare’s airfield.","Col. Dwight O’Hare, the WWII flying ace for whom the airport was named."], "Orchard Park, the village now covered by O’Hare’s airfield."),
    new Question("The Panama Canal runs in which directions?", ["Northwest-Southeast.", "East-West.", "North-South.","Northeast-Southwest."], "Northwest-Southeast."),
    new Question("Before the Berlin was united in 1989, the city was administered by the four World War II Allies: France, the Soviet Union, the United Kingdom, and the United States. 'Checkpoint Charlie' allowed travelers to cross from East Berlin into the sector administered by:", ["France.", "Soviet Union.", "United Kingdom.","United States."], "United States."),
    new Question("The Statue of Liberty is in New York.", ["True.", "False.", "No, it lies in a federal territory.","No, it lies international waters."], "False, because Liberty Island is in New Jersey."),
    new Question("Where is Waldo, really?", ["Antartica.", "Exploring the Pacific Ocean.", "Sitting in a tree.","Min ding his own business, so stop asking."], "Minding his own business, so stop asking."),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();