//document ready
$(document).ready(function() {

    // listen for the click

    $( "#beginButton" ).on( "click", function() {
        console.log("hello");
        // hide the begin button
        $(this).hide();
        $("#challenge").html(questionSet[0].challengeQuestion);
        $("#challenge").append(questionSet[0].possibleAnswers.a);
        $("#challenge").append(questionSet[0].possibleAnswers.b);
        $("#challenge").append(questionSet[0].possibleAnswers.c);
        $("#challenge").append(questionSet[0].possibleAnswers.d);
    });

//on-click refresh page

 
    const questionSet = [
        {
        challengeQuestion: "The Statue of Liberty is in New York.",
            possibleAnswers: {
                a: "True.",
                b: "False.",
                c: "No, it's a federal territory.",
                d: "No, it's in international waters."
            },
            correctAnswer: "a",
            answerPhoto: {
                image: "https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
                alt: "Statue of Liberty"
            }
        },
        {
        challengeQuestion: "Where is Waldo, really?",
            possibleAnswers: {
                a: "Antartica.",
                b: "Exploring the Pacific Ocean.",
                c: "Sitting in a tree.",
                d: "Minding his own business, so stop asking."
            },
            correctAnswer: "d",
            answerPhoto: {
                image: "https://prodimage.images-bn.com/pimages/9780763645250_p0_v2_s550x406.jpg",
                alt: "Where's Waldo"
            }
        },
        {
        challengeQuestion: "Chicago-O’Hare International Airport’s three-letter code is “ORD.” But there is no “D” in O’Hare’s name. What’s the origin of the “ORD” code?",
            possibleAnswers: {
                a: "'D' indicated Chicago's location on Lake Michigan.",
                b: "O’Hare Depot, the suburban rail freight yard which grew into O’Hare Airport.",
                c: "Orchard Park, the village now covered by O’Hare’s airfield.",
                d: "Col. Dwight O’Hare, the WWII flying ace for whom the airport was named."
            },
            correctAnswer: "c",
            answerPhoto: {
                image: "https://cdn.shopify.com/s/files/1/0322/6285/products/ORD-airport-code-luggage-tag_1_2000x.jpg?v=1556169336",
                alt: "O’Hare luggage tag"
            }
        },
        {
        challengeQuestion: "The Panama Canal runs in which directions?",
            possibleAnswers: {
                a: "Northwest-Southeast.",
                b: "Northeast-Southwest.",
                c: "North-South.",
                d: "East-West."
            },
            correctAnswer: "a",
            answerPhoto: {
                image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/95/f3/17.jpg",
                alt: "Panama Canal"
            }
        },
        {
        challengeQuestion: "Before the Berlin was united in 1989, the city was administered by the four World War II allies: France, the Soviet Union, the United Kingdom, and the United States. 'Checkpoint Charlie' allowed travelers to cross from East Berlin into the sector administered by:",
            possibleAnswers: {
                a: "France.",
                b: "Soviet Union.",
                c: "United Kingdom.",
                d: "United States."
            },
            correctAnswer: "d",
            answerPhoto: {
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/US_Army_tanks_face_off_against_Soviet_tanks%2C_Berlin_1961.jpg",
                alt: "Checkpoint Charlie"
            }
        },
        {
        challengeQuestion: "Which of these is not true?",
            possibleAnswers: {
                a: "Canada lies south of Michigan.",
                b: "Rhode Island borders New York.",
                c: "One state separates Nebraska and Tennessee.",
                d: "Say 'Beaufort,' and you'll find it in both North Carolina and South Carolina."
            },
            correctAnswer: "d",
            answerPhoto: {
                image: ""
            }
        }     
    ];

        console.log(questionSet[0].challengeQuestion);






//     // We start the game with a score of 0.
//    var score = 0;
//    // Variable to hold the index of current question.
//    var questionIndex = 0;

//    // FUNCTIONS
//    // ==============================================================================

//    // Function to render questions.
//    function renderQuestion() {
//      // If there are still more questions, render the next one.
//      if (questionIndex <= (questions.length - 1)) {
//        document.querySelector("#question").innerHTML = questions[questionIndex].q;
//      }
//      // If there aren't, render the end game screen.
//      else {
//        document.querySelector("#question").innerHTML = "Game Over!";
//        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
//      }
//    }

//    // Function that updates the score...
//    function updateScore() {
//      document.querySelector("#score").innerHTML = "Score: " + score;
//    }


//    // MAIN PROCESS
//    // ==============================================================================

//    // Calling functions to start the game.
//    renderQuestion();
//    updateScore();

//    // When the user presses a key, it will run the following function...
//    document.onkeyup = function(event) {

//      // If there are no more questions, stop the function.
//      if (questionIndex === questions.length) {
//        return;
//      }

//      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
//      var userInput = event.key.toLowerCase();

//      // Only run this code if "t" or "f" were pressed.
//      if (userInput === "t" || userInput === "f") {

//        // If they guess the correct answer, increase and update score, alert them they got it right.
//        if (userInput === questions[questionIndex].a) {
//          alert("Correct!");
//          score++;
//          updateScore();
//        }
//        // If wrong, alert them they are wrong.
//        else {
//          alert("Wrong!");
//        }

//        // Increment the questionIndex variable and call the renderQuestion function.
//        questionIndex++;
//        renderQuestion();

//      }

//    };






// //present first question
// //show countdown timer 60 seconds
// // document.getElementById('timer').innerHTML =
// // 00 + ":" + 60  ;
// // startTimer();

// // function startTimer() {
// //  var presentTime = document.getElementById('timer').innerHTML;
// //  var timeArray = presentTime.split(/[:]+/);
// //  var m = timeArray[0];
// //  var s = checkSecond((timeArray[1] - 1));
// //  if(s==59){m=m-1}
// //  if(m<0){alert('timer completed')}
  
// //  document.getElementById('timer').innerHTML =
// //    m + ":" + s;
// //  console.log(m)
// //  setTimeout(startTimer, 1000);
// // }

// // function checkSecond(sec) {
// //  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
// //  if (sec < 0) {sec = "59"};
// //  return sec;
// // }

// //refresh page at end of 60 seconds to second questions




    
})
