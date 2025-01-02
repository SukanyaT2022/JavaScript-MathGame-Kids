var storePlusorMinus = ""; // store the sign plus or minue
var storeEasyMediumHard = " "; //store user pick what level
var num1 = 0;
var num2 = 0;
var score = 0;
var questionNum = 0;

function startShowBtnFunc() {
  document.getElementById("addSubtractWrapper").style.display = "block";
  document.getElementById("startBtn").style.display = "none";
  questionNum = questionNum + 1;
  // if the question number reach question 10 set question to no 1 and score to 0
  if (questionNum == 11) {
    questionNum = 1;
    score = 0;
  }
  document.getElementById("questionNumID").innerText =
    "Question " + questionNum;
  document.getElementById("rocketID").style.visibility = "hidden";
  document.getElementById("rockStarTextID").style.visibility = "hidden";
}

function plusFunc() {
  // when click easy medium hard section show
  console.log('+')
  document.getElementById("easyHardWrapper").style.display = "block";
  document.getElementById("addSubtractWrapper").style.display = "none";
  storePlusorMinus = "+";
}

function minusFunc() {
  // when click easy medium hard section show
  console.log('-')
  document.getElementById("easyHardWrapper").style.display = "block";
  document.getElementById("addSubtractWrapper").style.display = "none";
  
  storePlusorMinus = "-";
}

function easyFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  document.getElementById("easyHardWrapper").style.display = "none";
  storeEasyMediumHard = "easy"; //easy is value on html
  generateQuestion();
  document.getElementById("resetButtonID").style.display = "block";
  document.getElementById("holdScoreID").style.display = "block";
}

function mediumFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  document.getElementById("easyHardWrapper").style.display = "none";
  storeEasyMediumHard = "medium"; //meduim is value on html
  generateQuestion();
  document.getElementById("resetButtonID").style.display = "block";
  document.getElementById("holdScoreID").style.display = "block";
}

function hardFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  document.getElementById("easyHardWrapper").style.display = "none";
  storeEasyMediumHard = "hard"; //hard is value on html
  generateQuestion();
  document.getElementById("resetButtonID").style.display = "block";
  document.getElementById("holdScoreID").style.display = "block";
}

// this function generate random number after clikc - or minus and level
function generateQuestion() {
  if (storeEasyMediumHard == "easy") {
    // generate random number below bet 1 to 10
    num1 = Math.floor(Math.random() * 10) + 1;
    if(storePlusorMinus == "-"){
      num2 = Math.floor(Math.random()*(num1 - 1 + 1 )) + 1
    }else{
      num2 = Math.floor(Math.random() * 10) + 1;
    }
    
  } else if (storeEasyMediumHard == "medium") {
    // generate random number below bet 11 to 100
    num1 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
    
    if(storePlusorMinus == "-"){
      num2 = Math.floor(Math.random()*(num1 - 11 + 1 )) + 11;
    }else{
      num2 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
    }

  } else {
    // generate random number below bet 111 to 1000

    num1 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111;
    if(storePlusorMinus == "-"){
      num2 = Math.floor(Math.random()*(num1 - 111 + 1 )) + 111;
    }else{
      num2 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111;
    }
  
  }
  document.getElementById("questionPtag").innerText =
    num1 + " " + storePlusorMinus + " " + num2;
}
// submit button
function checkAnswer() {
  // read id or answer from user
  var answer = document.getElementById("answerInputBox").value;
  if (answer == "") {
    alert("Please enter the answer!");
  } else {
    answer = parseInt(answer);
    var ans = 0;
    document.getElementById("answerInputBox").value = " ";
    // answer from formula
    if (storePlusorMinus == "+") {
      ans = num1 + num2;
    } else if (storePlusorMinus == "-") {
      ans = num1 - num2;
    }
    document.getElementById("nextBtn").style.display = "block";
    if (ans == answer) {
      document.getElementById("showImgCorrectNotcorrect").src =
        "/asset/image/correct2.png";
      score = score + 1;
      console.log(score);
      document.getElementById("holdScoreID").innerText = "Score " + score;
    } else {
      document.getElementById("showImgCorrectNotcorrect").src =
        "/asset/image/notcorrect.png";
    }
  }
}

function resetFunc() {
  document.getElementById("startBtn").style.display = "block";
  document.getElementById("addSubtractWrapper").style.display = "none";
  document.getElementById("questionAnswerWrapper").style.display = "none";
  document.getElementById("easyHardWrapper").style.display = "none";
  document.getElementById("resetButtonID").style.display = "none";
  var storePlusorMinus = ""; // store the sign plus or minue
  var storeEasyMediumHard = " "; //store user pick what level
  var num1 = 0;
  var num2 = 0;
  document.getElementById("answerInputBox").value = " ";
  document.getElementById("questionPtag").innerText = "";
  document.getElementById("showImgCorrectNotcorrect").src = "";
  document.getElementById("nextBtn").style.display = "none";
  // document.getElementById('rocketID').style.visibility = "hidden"
  document.getElementById("easyRadio").checked = false;
  document.getElementById("mediumRadio").checked = false;
  document.getElementById("hardRadio").checked = false;
  document.getElementById("holdScoreID").style.display = "none";
  score = 0
}
function nextQuestionFunc() {
  questionNum = questionNum + 1;
  if (questionNum == 11) {
    questionNum = 1;
    if (score >= 8) {
      moveRocket();
    } else if (score == 7) {
    goodJob()
    } else {
      ghost()
    }
    score = 0;
    resetFunc();
    document.getElementById("holdScoreID").innerText = "Score " + score;
  }
  document.getElementById("questionNumID").innerText =
    "Question " + questionNum;
  generateQuestion();
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("showImgCorrectNotcorrect").src = "";
}
function moveRocket() {
  document.getElementById("rocketID").src = "/asset/image/rocket.png";
  document.getElementById("rockStarTextID").innerText = "You are a rock star!";
  document.getElementById("rocketID").style.visibility = "visible";
  document.getElementById("rockStarTextID").style.visibility = "visible";

}
function goodJob() {
  document.getElementById("rocketID").src = "/asset/image/goodjob.png";
  document.getElementById("rockStarTextID").innerText = "Good Job!";
  document.getElementById("rocketID").style.visibility = "visible";
  document.getElementById("rockStarTextID").style.visibility = "visible";

}
function ghost() {
  document.getElementById("rocketID").src = "/asset/image/ghost.png";
  document.getElementById("rockStarTextID").innerText = "Keep trying!";
  document.getElementById("rocketID").style.visibility = "visible";
  document.getElementById("rockStarTextID").style.visibility = "visible";

}
