// start file
$(document).ready(function() {

// variables
var challengeArray = [ {
    question: "Chicago-O’Hare International Airport’s three-letter code is “ORD.” But there is no “D” in O’Hare’s name. What’s the origin of the “ORD” code?",
    answers: ["The 'D' indicated Chicago’s location on Lake Michigan.", "O’Hare Depot, the suburban rail freight yard which grew into O’Hare Airport.", "Orchard Park, the village now covered by O’Hare’s airfield.", "Army Col. Dwight O’Hare, the WWII flying ace for whom the airport was named."],
    correctAnswer: "Orchard Park",
    image: "https://cdn.shopify.com/s/files/1/0322/6285/products/ORD-airport-code-luggage-tag_1_2000x.jpg?v=1556169336"}w
  },
  {
    question: "The Panama Canal runs in which directions?",
    answers: {
      a: "East-West",
      b: "North-South",
      c: "Northeast-Southwest",
      d: "Northwest-Southeast"
    },
    correctAnswer: "d",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/95/f3/17.jpg"
  },
  {
    question: " ?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d",
    image: "https://www.saturnbooksellers.com/sites/saturnbooksellers.com/files/wheres-waldo_0_0.jpg"
  },
  {
    question: "Before the Berlin was united in 1989, the city was administered by the four World War II Allies: France, the Soviet Union, the United Kingdom, and the United States. “Checkpoint Charlie” allowed travelers to cross from East Berlin into the sector administered by:",
    answers: {
      a: "France.",
      b: "Soviet Union.",
      c: "United Kingdom.",
      d: "United States."
    },
    correctAnswer: "d",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/US_Army_tanks_face_off_against_Soviet_tanks%2C_Berlin_1961.jpg"
  },
  {
    question: "The Statue of Liberty is in New York.",
    answers: {
      a: "True.",
      b: "False.",
      c: "No, it's a federal territory.",
      d: "No, it lies in international waters."
    },
    correctAnswer: "b",
    image: "https://www.nps.gov/stli/planyourvisit/images/Liberty-statue-with-manhattan_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"
  },
  {
    question: "Which of these is not true?",
    answers: {
      a: "Sarah Palin can see Russia from her house in Alaska.",
      b: "Just one state separates Nebraska from Tennessee.",
      c: "Rhode Island borders on New York.",
      d: "Ontario lies south of Michigan."
    },
    correctAnswer: "a",
    image: "https://i.etsystatic.com/7741241/r/il/aef6fe/1673920913/il_1588xN.1673920913_ognh.jpg"
  },
  {
    question: "Stamford is located at approximately 41 degrees north latitude. It shares this property with all of the below except:",
    answers: {
      a: "Istanbul, Turkey.",
      b: "Beijing, China.",
      c: "Malta, the Mediterrean island nation.",
      d: "Border of Colorado and Wyoming."
    },
    correctAnswer: "c",
    image: "assets/images/41stParallelNorth.png"
  },
  {
    question: "Connecticut encompasses how many cities and towns?",
    answers: {
      a: "8.",
      b: "159.",
      c: "169.",
      d: "196."
    },
    correctAnswer: "c",
    image: "https://www.chuckstraub.com/images/conntownandcounty.jpg"
  },
  {
    question: "During the summer, Hartford-Bradley Airport becomes the third busiest in New England. Which airport becomes the second-busiest?",
    answers: {
      a: "Boston-Logan.",
      b: "Nantucket Airport.",
      c: "Portland (Maine) Jetport.",
      d: "Bridgeport-Sikorsky."
    },
    correctAnswer: "b",
    image: "https://chambermaster.blob.core.windows.net/images/customers/2764/members/1430/photos/GALLERY_MAIN/8B5CFE2E-4BDF-4DFB-82E9-F81165DE3F97athsd1.ma.comcast.net.jpeg"


}]