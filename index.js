var storePlusorMinus = ""; // store the sign plus or minue
var storeEasyMediumHard = " "; //store user pick what level
var num1 = 0;
var num2 = 0;
var score = 0;
var questionNum = 0;

function startShowBtnFunc() {
  document.getElementById("addSubtractWrapper").style.display = "block";
  questionNum = questionNum + 1;
  // if the question number reach question 10 set question to no 1 and score to 0
  if(questionNum == 11){
      questionNum = 1
      score = 0
  }
  document.getElementById("questionNumID").innerText =
    "Question No." + questionNum;

}

function plusFunc() {
  // when click easy medium hard section show
  document.getElementById("easyHardWrapper").style.display = "block";
  storePlusorMinus = "+";
}

function minusFunc() {
  // when click easy medium hard section show
  document.getElementById("easyHardWrapper").style.display = "block";
  storePlusorMinus = "-";
}

function easyFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  storeEasyMediumHard = "easy"; //easy is value on html
  generateQuestion();
  document.getElementById("resetButtonID").style.display = "block";
}

function mediumFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  storeEasyMediumHard = "medium"; //meduim is value on html
  generateQuestion();
}

function hardFunc() {
  // when click radio easy questionanswerwrapper open
  document.getElementById("questionAnswerWrapper").style.display = "block";
  storeEasyMediumHard = "hard"; //hard is value on html
  generateQuestion();
}

// this function generate random number after clikc - or minus and level
function generateQuestion() {
  if (storeEasyMediumHard == "easy") {
    // generate random number below bet 1 to 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
  } else if (storeEasyMediumHard == "medium") {
    // generate random number below bet 11 to 100
    num1 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
    num2 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
  } else {
    // generate random number below bet 111 to 1000

    num1 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111;
    num2 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111;
  }
  document.getElementById("questionPtag").innerText =
    num1 + " " + storePlusorMinus + " " + num2;
}
// submit button
function checkAnswer() {
  // read id or answer from user
  var answer = (document.getElementById("answerInputBox").value);
  if (answer == ""){
    alert('Please enter the answer!')
  }else{
    answer = parseInt(answer)
  var ans = 0;
  document.getElementById("answerInputBox").value = " ";
  // answer from formula
  if (storePlusorMinus == "+") {
    ans = num1 + num2;
  } else if (storePlusorMinus == "-") {
    ans = num1 - num2;
  }
document.getElementById('nextBtn').style.visibility = "visible";
  if (ans == answer) {
    document.getElementById("showImgCorrectNotcorrect").src =
      "/asset/image/correct2.png";
      score = score + 1
      console.log(score)
      document.getElementById("holdScoreID").innerText =
      "Score " + score;

  } else {
    document.getElementById("showImgCorrectNotcorrect").src =
      "/asset/image/notcorrect.png";
  }
}
}

function resetFunc() {
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
}
function nextQuestionFunc() {
  questionNum = questionNum + 1;
  if(questionNum == 11){
    questionNum = 1
    if (score >= 8){
      alert('Very good job!')
    }else if(score == 7){
      alert('Good Job!')
    }else{
      alert('Try Again!')
    }
    score = 0
    resetFunc()
    document.getElementById("holdScoreID").innerText =
    "Score " + score;
}
  document.getElementById("questionNumID").innerText =
    "Question No." + questionNum;
    generateQuestion()
    document.getElementById('nextBtn').style.visibility = "hidden";
    document.getElementById("showImgCorrectNotcorrect").src =
      "";

      

}
