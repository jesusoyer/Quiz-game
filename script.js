var generateBtn = document.querySelector("#startgame");
var listener=generateBtn.addEventListener("click",startQuiz)
var listener=generateBtn.addEventListener("click",timer)

var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var rightanswer = document.querySelector("#answer4");
var incorrect = document.querySelector("#wrong")

answer1.addEventListener("click",wrong)
answer2.addEventListener("click",wrong)
answer3.addEventListener("click",wrong)
rightanswer.addEventListener("click",correct)

function correct(){
            var correct = document.querySelector("#correct");
            points+=5
            correct.textContent = "Players score " + points + " correct!!"
            var incorrect = document.querySelector("#wrong");
            incorrect.textContent = "correct"
            incorrect.style.color="green"
        if(points===5){
            quiz2()
        }  else if(points ===10){
            quiz3()
        } else if(points===15){
            quiz4()
        } else if(points===20){
            quiz5()
        } else if(points===25){
            quiz6()
        } else if(points===30){
            quiz7();
        }   else if(points===35){
            quiz8();
        }   else if(points===40){
            quiz9();
        }
        }


        function wrong(){
            var incorrect = document.querySelector("#wrong");
            incorrect.textContent = "incorrect minus 5sec"
            incorrect.style.color="red"

                if(sec>25){
                    sec-=5;
                    quiz2();
                }else if(sec>20){
                    sec -= 5;
                    quiz3();
                }else if(sec>15){
                    sec-=5;
                    quiz4();
                } else if(sec>10){
                    sec-=5;
                    quiz5();
                } else if(sec>5){
                    sec-=10;
                    quiz6();
                } 

                    
        }
        


var sec = 30;
var points = 0


const question1 = {
    question: "Which email service is owned by Microsoft?",
    a: "Gmail",
    b: "netscape",
    c: "yahoo",
    d: "Hotmail"
}
const question2={
    question: "What was the first state?",
    a:"Texas",
    b:"California",
    c:"Rhode Island",
    d:"Delaware"
}
const question3={
    question:"About how many taste buds does the average human tongue have? ",
    a:"5",
    b:"19",
    c:"1,000,000",
    d:"10,000"
}
const question4={
    question:"Which country invented tea?",
    a:"England",
    b:"India",
    c:"Spain",
    d:"China"
}
const question5={
    question:"What was Britney Spears first song?",
    a:"Stronger",
    b:"oops!... I did it again",
    c:"Toxic",
    d:"Baby One More Time"
}
const question6={
    question:"How many phases of the moon are there?",
    a:"20",
    b:"15",
    c:"5",
    d:"8"
}
const question7={
    question:"How many bones do sharks have in their bodies?",
    a:"40",
    b:"523",
    c:"67",
    d:"0"
}
const question8={
    question:"What does the term “piano” mean?",
    a:"Loud Music",
    b:"angelic",
    c:"stiff",
    d:"to be played softly"
}
const question9={
    question:"Which mammal doesn’t have vocal cords? ",
    a:"Squirel",
    b:"Platypus",
    c:"Mouse",
    d:"Giraffe"
}
const question10={
    question:"What year did the Titanic movie come out?",
    a:"1999",
    b:"1995",
    c:"1996",
    d:"1997"
}
















const arrayquestions=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]


function timer(){
  
    var timer = setInterval(function(){
        var time= document.querySelector('#timer')
        time.textContent="Timer: "+sec
        sec--;
        if(sec<0){
            clearInterval(timer);
            gameover();
            
        }
    },1000);
}





function startQuiz(){

    var generateBtn = document.querySelector("#startgame");
    generateBtn.parentNode.removeChild(generateBtn)
    quiz1()
  

} 

function quiz1(){

    question.textContent = arrayquestions[0].question
    answer1.textContent = arrayquestions[0].a
    answer2.textContent = arrayquestions[0].b
    answer3.textContent = arrayquestions[0].c
    rightanswer.textContent = arrayquestions[0].d  
}

function quiz2(){
    question.textContent = arrayquestions[1].question
    answer1.textContent = arrayquestions[1].a
    answer2.textContent = arrayquestions[1].b
    answer3.textContent = arrayquestions[1].c
    rightanswer.textContent = arrayquestions[1].d  
}
function quiz3(){
    question.textContent = arrayquestions[2].question
    answer1.textContent = arrayquestions[2].a
    answer2.textContent = arrayquestions[2].b
    answer3.textContent = arrayquestions[2].c
    rightanswer.textContent = arrayquestions[2].d  
}

function quiz4(){
    question.textContent = arrayquestions[3].question
    answer1.textContent = arrayquestions[3].a
    answer2.textContent = arrayquestions[3].b
    answer3.textContent = arrayquestions[3].c
    rightanswer.textContent = arrayquestions[3].d  
}
function quiz5(){
    question.textContent = arrayquestions[4].question
    answer1.textContent = arrayquestions[4].a
    answer2.textContent = arrayquestions[4].b
    answer3.textContent = arrayquestions[4].c
    rightanswer.textContent = arrayquestions[4].d  
}
function quiz6(){
    question.textContent = arrayquestions[5].question
    answer1.textContent = arrayquestions[5].a
    answer2.textContent = arrayquestions[5].b
    answer3.textContent = arrayquestions[5].c
    rightanswer.textContent = arrayquestions[5].d  
}
function quiz7(){
    question.textContent = arrayquestions[6].question
    answer1.textContent = arrayquestions[6].a
    answer2.textContent = arrayquestions[6].b
    answer3.textContent = arrayquestions[6].c
    rightanswer.textContent = arrayquestions[6].d  
}
function quiz8(){
    question.textContent = arrayquestions[7].question
    answer1.textContent = arrayquestions[7].a
    answer2.textContent = arrayquestions[7].b
    answer3.textContent = arrayquestions[7].c
    rightanswer.textContent = arrayquestions[7].d  
}
function quiz9(){
    question.textContent = arrayquestions[8].question
    answer1.textContent = arrayquestions[8].a
    answer2.textContent = arrayquestions[8].b
    answer3.textContent = arrayquestions[8].c
    rightanswer.textContent = arrayquestions[8].d  
}
function quiz10(){
    question.textContent = arrayquestions[9].question
    answer1.textContent = arrayquestions[9].a
    answer2.textContent = arrayquestions[9].b
    answer3.textContent = arrayquestions[9].c
    rightanswer.textContent = arrayquestions[9].d  
}

function gameover (){
   


    
    var question = document.querySelector("#question");
    question.parentNode.removeChild(question)

    var answer1 = document.querySelector("#answer1");
    answer1.parentNode.removeChild(answer1)
    answer1.addEventListener("click",question2)

    var answer2 = document.querySelector("#answer2");
    answer2.parentNode.removeChild(answer2)
    answer2.addEventListener("click",question2)

    var answer3 = document.querySelector("#answer3");
    answer3.parentNode.removeChild(answer3)
    answer3.addEventListener("click",question2)

    var answer4 = document.querySelector("#answer4");
    answer4.parentNode.removeChild(answer4)
    answer4.addEventListener("click",question2)
    
    
    var time= document.querySelector('#timer')
        time.parentNode.removeChild(time)
    var incorrect = document.querySelector("#wrong");
    incorrect.parentNode.removeChild(incorrect)
    
    
    var end = document.querySelector("#gameover")
    end.textContent="GAME OVER"


}

var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var usernameSpan = document.querySelector("#user-name");



// // var name =window.localStorage.getItem("name");
// usernameSpan.innerHTML = localStorage.getItem("name")
// // function renderLastRegistered() {
    
// //   console.log(name)
// //   console.log(localStorage)
// //     // if (!email) {
// //     //   return;
// //     // }
// //   console.log(usernameSpan)
    
    
// //   }

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var name = document.querySelector("#name").value;
    window.localStorage.setItem("userName", name);
    console.log(localStorage)
    console.log(name)
    renderLastRegistered();
});
   function renderLastRegistered(){
    var nameFromLocalStorage = window.localStorage.getItem("userName")
    usernameSpan.textContent = nameFromLocalStorage +" - " + points
    
    }
  
    renderLastRegistered();
  
 
  