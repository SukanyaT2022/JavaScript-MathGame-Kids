var storePlusorMinus = ''// store the sign plus or minue
var storeEasyMediumHard =' '//store user pick what level
var num1 = 0
var num2 = 0


function startShowBtnFunc(){
   document.getElementById('addSubtractWrapper').style.display = 'block'
}

function plusFunc(){
    // when click easy medium hard section show
 document.getElementById('easyHardWrapper').style.display = 'block';
 storePlusorMinus = "+"
}

function minusFunc(){
    // when click easy medium hard section show
 document.getElementById('easyHardWrapper').style.display = 'block';
 storePlusorMinus = "-"
}

function easyFunc(){
    // when click radio easy questionanswerwrapper open
    document.getElementById('questionAnswerWrapper').style.display = 'block';
    storeEasyMediumHard ='easy' //easy is value on html
    generateQuestion()
}

function mediumFunc(){
    // when click radio easy questionanswerwrapper open
    document.getElementById('questionAnswerWrapper').style.display = 'block';
    storeEasyMediumHard ='medium' //meduim is value on html
    generateQuestion()
}

function hardFunc(){
    // when click radio easy questionanswerwrapper open
    document.getElementById('questionAnswerWrapper').style.display = 'block';
    storeEasyMediumHard ='hard' //hard is value on html
    generateQuestion()

}

// this function generate random number after clikc - or minus and level
function generateQuestion(){
if(storeEasyMediumHard=="easy"){
    // generate random number below bet 1 to 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
}else if(storeEasyMediumHard=="medium"){
   // generate random number below bet 11 to 100
   num1 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
   num2 = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
}else{
     // generate random number below bet 111 to 1000

     num1 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111;
     num2 = Math.floor(Math.random() * (1000 - 111 + 1)) + 111; 
}
document.getElementById("questionPtag").innerText = num1 + " " + storePlusorMinus + " " + num2

}
// formula for random
// num1 = Math.floor(Math.random() * (max - min + 1)) + min;

// this function check if the answer is correct or Not when click submitbtn
function checkAnswer(){
    // read id or answer from user
var answer = parseInt(document.getElementById("answerInputBox").value)
var ans = 0 

// answer from formula
if (storePlusorMinus=="+"){
ans = num1 + num2
}else if(storePlusorMinus=="-"){
    ans = num1 - num2
}

if (ans == answer){
    alert('Correct Answer!')
}else{
    alert('Not Correct Answer :(')
}
}




