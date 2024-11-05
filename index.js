var storePlusorMinus = ''// store user click plus or minue
var storeEasyMediumHard =' '



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
}

function mediumFunc(){
    // when click radio easy questionanswerwrapper open
    document.getElementById('questionAnswerWrapper').style.display = 'block';
    storeEasyMediumHard ='medium' //meduim is value on html
}

function hardFunc(){
    // when click radio easy questionanswerwrapper open
    document.getElementById('questionAnswerWrapper').style.display = 'block';
    storeEasyMediumHard ='hard' //hard is value on html
}

