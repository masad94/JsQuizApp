var questions=[
    {
        question:"4+5",
        options:["9","4","6","8"],
        answer:"9"
    },
    {
        question:"3+2",
        options:["9","5","12","1"],
        answer:"5"
    },
    {
        question:"5-4",
        options:["2","1","9","7"],
        answer:"1"
    },
    {
        question:"90-4",
        options:["80","1","94","86"],
        answer:"86"
    },
    {
        question:"15-4",
        options:["2","19","11","10"],
        answer:"11"
    },
    {
        question:"25+3",
        options:["22","1","32","28"],
        answer:"28"
    }
]

var answer=[];
var score=0;
var div=document.getElementById("container");

function displayQuestion(q){
    var optionsLength=questions[q].options.length;
    div.innerHTML="<h3>Q.No."+(q+1)+": "+questions[q].question+"?</h3>";
    for(i=0;i<optionsLength;i++){
        div.innerHTML+="<input type='radio' name='options'value='"+questions[q].options[i]+"'>"+questions[q].options[i]+"<br>";
    }
    if(q<questions.length-1){
        div.innerHTML+="<button class='btn' onclick='nextQuestion("+(q)+")'>Next</button><br>";
    }
    else{
        div.innerHTML+="<button class='btn' onclick='displayResult("+(q)+")'>Finish</button><br>";
    }
}

function nextQuestion(n){
    var radioButtons=document.getElementsByName("options");
    for(i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            answer[n]=radioButtons[i].value;
            break;
        }
    }
    displayQuestion(n+1);
}

function displayResult(n){
    var radioButtons=document.getElementsByName("options");
    for(i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            answer[n]=radioButtons[i].value;
            break;
        }
    }
    for(i=0;i<answer.length;i++){
        if(questions[i].answer==answer[i]){
            score++;
        }
    }

    div.innerHTML="Your Score is "+score;
}

window.onload=function(){
    displayQuestion(0);
}