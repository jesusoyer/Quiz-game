
const questions = [{ 
    question: "Which email service is owned by Microsoft?",
    a: ["Gmail",true],
    b: ["netscape",false],
    c: ["yahoo",false],
    d: ["Hotmail",false]

},
{ 
    question: "What was the first state?",
    a:["Texas",false],
    b:["California",false],
    c:["Rhode Island",false],
    d:["Delaware",true]
},
{ 
    question:"About how many taste buds does the average human tongue have? ",
    a:["5",false],
    b:["19",false],
    c:["10,000",true], 
    d:["1,000,000",false]
}
,{ 
    question:"Which country invented tea?",
    a:["China",true],
    b:["India",false],
    c:["Spain",false],
    d:["England", false]
}
,{ 
    question:"What was Britney Spears first song?",
    a:["Stronger",false],
    b:["oops!... I did it again",false],
    c:["Baby One More Time", true],
    d:["Toxic",false]
}
,{ 
    question:"How many phases of the moon are there?",
    a:["8",true],
    b:["15",false],
    c:["5",false],
    d:["36", false]
}
,{ 
    question:"How many bones do sharks have in their bodies?",
    a:["40",false],
    b:["0",true],
    c:["67",false],
    d:["100", false]
}
,{ 
    question:"What does the term “piano” mean?",
    a:["Loud Music",false],
    b:["angelic",false],
    c:["stiff",false],
    d:["to be played softly", true]
}
,{ 
    question:"Which mammal doesn’t have vocal cords? ",
    a:["Squirrel",false],
    b:["Giraffe",true],
    c:["Mouse",false],
    d:["Platypus",false]
}
,{ 
    question:"What year did the Titanic movie come out?",
    a:["1999",false],
    b:["1995",false],
    c:["1996",false],
    d:["1997", true]
}]

const randomQuestionsArray= []


function shuffleArray(questions) {
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;

        randomQuestionsArray.push(questions)
        
    }
}
shuffleArray(questions);



let sec = 30;
let addToQuestions = 0 
let points = 0


const quizIntro= document.createElement("p");
quizIntro.id = "quizIntro"
quizIntro.className = "quizIntroClass"
quizIntro.innerHTML = "A Simple Quiz Game"
document.getElementById("gameArea").appendChild(quizIntro);


//creates the start game button
const btn = document.createElement("BUTTON");
btn.id="firstButton"
btn.className = "btn btn-success startButton"
btn.innerHTML = "start game";
document.body.appendChild(btn);

btn.addEventListener("click", startTimer)
// creates the elements for the answer validation changes
const answerValidation = document.createElement("p")
    answerValidation.id = "answerValidation"
    let answerValidationHtml = answerValidation.innerHTML = ""
     document.getElementById("answersAlert").appendChild(answerValidation);


const mainQuestion = document.querySelector("#mainQuestion")
mainQuestion.innerHTML = " "





function startTimer(){

      
  // Removes the start button
    quizIntro.remove()
    btn.remove()
    // creates the element for the timer 
    let time= document.querySelector('#timer')
        time.textContent="Timer: "+sec

    timer()
    questionsIncrementHandler()
}



function questionsIncrementHandler (){
   
 const pointsAdded = document.querySelector("#pointsArea")
 pointsAdded.innerHTML = "Points: " + points;
 


    mainQuestion.innerHTML = randomQuestionsArray[0][addToQuestions].question;

    const answerA = document.createElement("BUTTON")
    
    answerA.innerHTML = randomQuestionsArray[0][addToQuestions].a[0]; 
    answerA.className="col btn btn-outline-primary buttonAnswers" 
    answerA.id= "answerA"
    document.getElementById("answersArea").appendChild(answerA);
    answerA.addEventListener("click", addQuestions)
    

    const answerB = document.createElement("BUTTON")
    answerB.innerHTML = randomQuestionsArray[0][addToQuestions].b[0];
    answerB.className = "col btn btn-outline-primary buttonAnswers"
    answerB.id = "answerB"
    document.getElementById("answersArea").appendChild(answerB);
    answerB.addEventListener("click", addQuestions2) 
    
    const answerC = document.createElement("BUTTON")
    answerC.innerHTML = randomQuestionsArray[0][addToQuestions].c[0];
    answerC.className = "col btn btn-outline-primary buttonAnswers"
    answerC.id = "answerC"
    document.getElementById("answersArea").appendChild(answerC);
    answerC.addEventListener("click", addQuestions3) 

    const answerD = document.createElement("BUTTON")
    answerD.innerHTML = randomQuestionsArray[0][addToQuestions].d[0];
    answerD.className = "col btn btn-outline-primary buttonAnswers"
    answerD.id = "answerD"
    document.getElementById("answersArea").appendChild(answerD);
    answerD.addEventListener("click", addQuestions4) 

   



// handles the booleons for each answer
    function addQuestions(){
          
        if(randomQuestionsArray[0][addToQuestions].a[1] === true){
            
            addToQuestions += 1
            points += 1


            answerValidation.className = "alert alert-success validation"
            answerValidation.innerHTML = "correct answer +1 point"
            console.log("first correct hit")
        } else{
            addToQuestions += 1
            sec -=5

            answerValidation.className = "alert alert-danger validation"
            answerValidation.innerHTML = "incorrect answer -5 seconds"
           
        
        }
       
            removeEventListeners();
    }

    function addQuestions2(){
        
        if(randomQuestionsArray[0][addToQuestions].b[1] === true){
            addToQuestions += 1
            points += 1
            answerValidation.className = "alert alert-success validation"
            answerValidation.innerHTML = "correct answer +1 point"
        } else{
            addToQuestions += 1
            sec -=5
            answerValidation.className = "alert alert-danger validation"
            answerValidation.innerHTML = "incorrect answer -5 seconds"
        }
        
        removeEventListeners();

    }

    function addQuestions3(){
        
        if(randomQuestionsArray[0][addToQuestions].c[1] === true){
            addToQuestions += 1
            points += 1
            answerValidation.className = "alert alert-success validation"
            answerValidation.innerHTML = "correct answer +1 point"
        } else{
            addToQuestions += 1
            sec -=5
            answerValidation.className = "alert alert-danger validation"
            answerValidation.innerHTML = "incorrect answer -5 seconds"
           
        }
        
        removeEventListeners();

    }

    function addQuestions4(){

        if(randomQuestionsArray[0][addToQuestions].d[1] === true){
            addToQuestions += 1
            points += 1
            answerValidation.className = "alert alert-success validation"
            answerValidation.innerHTML = "correct answer +1 point"
            

        } else{
            addToQuestions += 1
            sec -=5
            answerValidation.className = "alert alert-danger validation"
            answerValidation.innerHTML = "incorrect answer -5 seconds"
        }

        //starts the questions game again this time with the index incremented to the next question
        removeEventListeners();

    }    

    function removeEventListeners(){
        answerA.remove();
        answerB.remove();
        answerC.remove();
        answerD.remove();
        answerA.removeEventListener("click", addQuestions)
        answerB.removeEventListener("click", addQuestions2)
        answerC.removeEventListener("click", addQuestions3)
        answerD.removeEventListener("click", addQuestions4)

        questionsIncrementHandler();
    }



}

function timer(){
  //starts timer for quiz to begin and handles the game when it ends
    let timer = setInterval(function(){
        let time= document.querySelector('#timer')
        time.textContent="Timer: "+sec
        sec--;
        if(sec<0){
            clearInterval(timer);
            time.remove() 
            gameOver()
                
            
        }
    },1000);
}


function gameOver(){

const answerA = document.querySelector("#answerA")
const answerB = document.querySelector("#answerB")
const answerC = document.querySelector("#answerC")
const answerD = document.querySelector("#answerD")

    mainQuestion.innerHTML = " "
 

    answerA.remove();
    answerB.remove();
    answerC.remove();
    answerD.remove();






     answerValidation.className = ""
     answerValidationHtml = answerValidation.innerHTML = ""

    const gameOverMessage = document.createElement("p")
    gameOverMessage.id = "gameOverMessage"
    gameOverMessage.className = "gameOverMessageClass"
     gameOverMessage.textContent ="Game Over" 
     document.getElementById("navBar").appendChild(gameOverMessage);


    const inputLabel = document.createElement("p")
    inputLabel.id = "inputLabel"
     inputLabel.textContent ="Type in name" 
     document.getElementById("gameArea").appendChild(inputLabel);
    
    const nameInput = document.createElement("INPUT");
    nameInput.id = "nameInput"
    nameInput.textContent = "type name in"
    nameInput.setAttribute("type", "text");
    document.getElementById("gameArea").appendChild(nameInput);

    const saveScore = document.createElement("BUTTON");
    saveScore.className = "saveScore"
    saveScore.id="saveBtn"
    saveScore.innerHTML = "save score";
    document.getElementById("gameArea").appendChild(saveScore);





saveScore.addEventListener("click", scoreSaved)


const endgamePoints = document.createElement("p")
    endgamePoints.id = "endgamePoints"
   
     endgamePoints.textContent ="Game Points " + points
     document.getElementById("gameArea").appendChild(endgamePoints);


     function scoreSaved(){
        

        const inputValue = document.querySelector("#nameInput")

        const gameScore = inputValue.value

        console.log(gameScore + points)

        const removeGameOverMessage = document.querySelector("#gameOverMessage")
        const removeTypeNameMessage = document.querySelector("#inputLabel")
        const removeNameInput = document.querySelector("#nameInput")
        const removeSaveScoreButton = document.querySelector("#saveBtn")
        const removeEndGamePoints = document.querySelector("#endgamePoints")
        
        
        
        removeGameOverMessage.remove()
        removeTypeNameMessage.remove()
        removeNameInput.remove()
        removeSaveScoreButton.remove()
        removeEndGamePoints.remove()

        startNewGame();

     }


}

function startNewGame(){

    const startNewGame = document.createElement("p")
    startNewGame.id = "startNewGame"
    startNewGame.textContent ="Would you like to start a new game?"
     document.getElementById("gameArea").appendChild(startNewGame);

    
    const startNewGamebtn = document.createElement("BUTTON");
    startNewGamebtn.className = "newGame"
    startNewGamebtn.id="newGameBtn"
    startNewGamebtn.innerHTML = "start new game";
    document.getElementById("gameArea").appendChild(startNewGamebtn);

    startNewGamebtn.addEventListener("click",newGameHandlerFunction)

}

function newGameHandlerFunction (){
    const removeStartNewGameElement = document.querySelector("#startNewGame")
    const removeStartNewGamebtn = document.querySelector("#newGameBtn")

    removeStartNewGameElement.remove()
    removeStartNewGamebtn.remove()

    location.reload();
}


    


   
    











  