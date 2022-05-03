const startButton=document.getElementById("start-btn")
const nextButton=document.getElementById("nextt-btn")

const questionContainerElement=document.getElementById("question-container")
const questionElement=document.getElementById("question")
const answerButtonsElement=document.getElementById("answer-btn")

let shuffledQuestions,currectQuestionIndex;
let quizscore=0;

startButton.addEventListener("click",startgame);

nextButton.addEventListener("click",()=>{
    currectQuestionIndex++
    setnextQuestion()
});
function startgame(){
    startButton.classList.add("hide")
    shuffledQuestions=questions.sort(()=>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove("hide")
    setnextQuestion()
    quizscore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}



function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstchild)
    }
}





function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct

    

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffledQuestions.length>currectQuestionIndex+1){
        nextButton.classList.remove("hide")
    }
    else{
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset=correct){
        quizscore++
    }
    document.getElementById("right-answers").innerText=quizscore
}






function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")

    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")

}


const questions=[
    {
        question:"which one of these is JS framework?",
        answers:[
            {text:"python",correct:false},
            {text:"Django",correct:false},
            {text:"React",correct:true},
            {text:"Eclipse",correct:false}
        ],

    },
    {
        question:"Who is prime minister of India?",
        answers:[
            {text:"Narendra modi",correct:true},
            {text:"Rahul Gandhi",correct:false},
        ],

    },
    {
        question:"what is 4*3?",
        answers:[
            {text:"12",correct:true},
            {text:"21",correct:false},
            
        ],

    },

    {
        question:"python developed by :?",
        answers:[
            {text:"Guido Van Russum",correct:true},
            {text:"Dennis Ritchie",correct:false},
            
        ],

    },
]
    











