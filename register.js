document.addEventListener('DOMContentLoaded', function (){
// GAME
// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for game guesser
function result() {
  // Get the input element, display span for user's guess, and the message span
  let gameInput = document.getElementById("inputNumber");
  let gameDisplayGuess = document.getElementById("random2");
  let gameMessage = document.getElementById("resultMsg");

  // Validate user input
  let userGuess = parseInt(gameInput.value);

  // Check if the entered value is a valid number between 1 and 10
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    gameMessage.innerHTML = "Please enter a valid number between 1 and 10.";
    return;
  }

  // Generate a random number between 1 and 10
  let randomNum = getRandomNumber(1, 10);

  // Display the user's guess and the random number on the screen
  gameDisplayGuess.innerHTML = userGuess;
  gameMessage.innerHTML = "The Winning number was: " + randomNum;

  // Check if the user's guess matches the random number
  if (userGuess === randomNum) {
    gameMessage.innerHTML += "<br>Congratulations! Show this to your waitress and claim one free order od bread sticks!";
  } else {
    gameMessage.innerHTML += "<br>Sorry, try again!";
  }
}

// Attach an event listener to the button for the game
document.getElementById("gamePlay").addEventListener("click", result);

// // document.getElementById("newAcct").addEventListener("submit", validateForm);
// // mapMessages();

// function handleFormSubmit(event) {
//   validateForm(event);
//   mapMessages();
// }

// // document.getElementById("newAcct").addEventListener('submit', handleFormSubmit);




// // content switcher // 

// document.getElementById('contentGolfBtn').addEventListener("click", function(){
//   document.getElementById('golf').classList.toggle("hidden");
// });

// document.getElementById('contentGolfBtn').addEventListener('click', function() {
//   var golfSection = document.getElementById('golf');
//   golfSection.classList.remove('hide');
// });
// function toggleSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   if (section) {
//       section.classList.toggle("hide");
//   }
// }

// if(lis[0].classList != ""){AS
//   removeClasses();
// }

// const golfBtn = document.getElementById('contentGolfBtn');
// const goKartBtn = document.getElementById('contentgoKartBtn');
// const battingBtn = document.getElementById('contentBattingBtn');
// const bumperBtn = document.getElementById('contentBumperBtn');

// const golfSection = document.getElementById('golf');
// const goKartSection = document.getElementById('goKarts');
// const battingSection = document.getElementById('batting');
// const bumperSection = document.getElementById('bumper');

// function chooseGolf(){
//   let lis = (golfBtn);
// }

const golfBtn = document.getElementById('contentGolfBtn');
const goKartBtn = document.getElementById('contentgoKartBtn');
const battingBtn = document.getElementById('contentBattingBtn');
const bumperBtn = document.getElementById('contentBumperBtn');

const golfSection = document.getElementById('golf');
const goKartSection = document.getElementById('goKarts');
const battingSection = document.getElementById('batting');
const bumperSection = document.getElementById('bumper');



golfBtn.addEventListener('click', () => {
  golfSection.classList.remove('hide');
  goKartSection.classList.add('hide');
  battingSection.classList.add('hide');
  bumperSection.classList.add('hide');
});

goKartBtn.addEventListener('click', () => {
  golfSection.classList.add('hide');
  goKartSection.classList.remove('hide');
  battingSection.classList.add('hide');
  bumperSection.classList.add('hide');
});

battingBtn.addEventListener('click', () => {
  golfSection.classList.add('hide');
  goKartSection.classList.add('hide');
  battingSection.classList.remove('hide');
  bumperSection.classList.add('hide');
});

bumperBtn.addEventListener('click', () => {
  golfSection.classList.add('hide');
  goKartSection.classList.add('hide');
  battingSection.classList.add('hide');
  bumperSection.classList.remove('hide');
});

// // dark mode
const darkModeBtn = document.getElementById("darkMode");
const darkHeader = document.querySelector("header");
const darkFooter = document.querySelector("footer");
const attractionsSection = document.getElementById('Attractions');
const darkHtml = document.documentElement;

darkModeBtn.addEventListener('click', () => {
  darkHeader.classList.toggle('dark-mode');
  battingSection.classList.toggle('dark-mode');
  bumperSection.classList.toggle('dark-mode');
  goKartSection.classList.toggle('dark-mode');
  golfSection.classList.toggle('dark-mode');
  attractionsSection.classList.toggle('dark-mode');
  darkFooter.classList.toggle('dark-mode');
  darkHtml.classList.toggle('dark-mode-html');
  
});
// function darkModeBtn() {
//   var element = document.querySelector('header','nav') ;
//   element.classList.toggle("dark-mode");
//  }

// });

// CONTACT FORM ERROR
let messages = {
  success: "The comment was submitted successfully",
  failure: "There was an issue when trying to submit the form, please try again",
  uNameMsg: "User name must be at least six characters and can include uppercase or lowercase letters, numbers, and @ - \ _ !",
  emailMsg: "Please enter a valid email address",
  phoneMsg: "Please enter a valid Phone Number",
  commentMsg: "Please enter your comment",
};

let newUser = {
  fullName: "",
  userEmail: "",
  userPhone: "",
  userComment: "",
  getUser() {
    return "<strong>Full Name</strong> " + this.fullName + "<br><strong>Email:</strong> " + this.userEmail + "<br><strong></strong> " + this.userPhone + "<br><strong>Food:</strong> " + this.userCommentt;
  }
};


console.log(confirm)
function validateForm(event){
  event.preventDefault();
  let uName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let phoneNum = document.getElementById("phoneNum");
  let comments = document.getElementById("comments");
  let confirm = document.getElementById("confirm");

  let uNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
  let phoneRegex = '^\d{10}$';

  uName.classList.remove("error");
  email.classList.remove("error");
  phoneNum.classList.remove("error");

  confirm.classList.add("hide");

  uName.nextElementSibling.classList.add("hide");
  email.nextElementSibling.classList.add("hide");
  confirm.innerHTML = "";

  let isValid = true;

  if((uName.value === "") || uName.value.length < 6 || !(uNameRegex.test(uName.value))){
    isValid = false; 
    uName.classList.add("error");
    uName.nextElementSibling.classList.remove("hide");
    console.error(messages["uNameMsg"]);
  }else{
    newUser.fullName = uName.value;
  }

  if(email.value === "" || !(emailRegex.test(email.value))){
    isValid = false;
    email.classList.add("error");
    email.nextElementSibling.classList.remove("hide");
    console.error(messages["emailMsg"]);
  }else{
    newUser.userEmail = email.value;
  }

  if(phoneNum.value === "" || !(phoneRegex.test(phoneNum.value))){
    isValid = false;
    phoneNum.classList.add("error");
    phoneNum.nextElementSibling.classList.remove("hide");
    // use the map to add an error message to the console
    console.error(messages["phoneMsg"]);
  }else{
    // if we have valid input here, let's add it to our user object
    newUser.userPhone = phoneNum.value;
  }


  if(isValid){
    displaySubmission(); 

    uName.value = "";
    email.value = "";
    phoneNum.value = "";
  

  uName.nextElementSibling.classList.add("hide");

  email.nextElementSibling.classList.add("hide");

  phoneNum.nextElementSibling.classList.add("hide")

  window.alert(messages["success"]);
}
} 
function displaySubmission(){
  confirm.innerHTML = "<strong class=\"large\">Your Information:</strong><br>"; 
}

function mapMessages(){
  let html = "";
  let messageKeys = Object.keys(messages);
  console.log(messageKeys);

  if("success" in messages){
    console.log("The messages map does contain the \"success\" key");
  }

  if("nonsense" in messages){
    console.log("The nonsense message is in the map. Its value is: " + messages.nonsense);
    delete messages["nonsense"];
    console.log(messages);
  }

  if("nonsense" in messages){
    console.log("This is bad. We removed that nonsense");
  }else{
    console.log("There is no nonsense in the messages map");
  }
}

const button = document.getElementById("submit");

button.addEventListener('click', (event) => {
  validateForm(event);
});
})
