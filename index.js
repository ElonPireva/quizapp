const btn = document.getElementById('btn');
const question = document.querySelector('.question');
const answerDiv = document.querySelector('.answers');
const scoreResult = document.getElementById('score');
const totalScore = document.getElementById('totalScore');

let questionCounter = 0;
let score = 0;
const answers = [
    {
        question: 'Who is founder of Javascript?',
        answers: [
            {option: "Mark Smith", answer: false},
            {option: "John Doe", answer: false},
            {option: "Brendan Eich", answer: true},
            {option: "Kevin Thompson", answer: false}
        ]
    },
    {
        question: "What is better if you wish to achieve success?",
        answers: [
            {option: "Hard Work", answer: false},
            {option: "Smart Work", answer: true},
            {option: "Bad Work", answer: false},
            {option: "Fast Work", answer: false},
        ]
    },
    {
        question: "Who discover America?",
        answers: [
            {option: "Vespuqi", answer: true},
            {option: "Colombo", answer: false},
            {option: "Pireva", answer: false},
            {option: "Xhonson", answer: false},
        ]
    },
    {
        question: "Which football team won UCL in 2016 season?",
        answers: [
            {option: "Bayern Munich", answer: false},
            {option: "Atletico Madrid", answer: false},
            {option: "Real Madrid", answer: true},
            {option: "Man City", answer: false},
        ]
    }
];
btn.addEventListener('click', () => {
    startQuiz();
    questionNumber();
    if(questionCounter < answers.length){
        question.innerHTML = answers[questionCounter].question;
        answers[questionCounter].answers.forEach(answer => {
            const span = document.createElement('span');
            span.innerHTML = answer.option;
            answerDiv.appendChild(span);
            span.addEventListener('click', () => {
                if(answer.answer === true){
                    score++;
                    scoreResult.innerHTML = `Your score is: ${score}`;
                    btn.click();
                }
                if(answer.answer === false){
                    btn.click();
                }
            });
            updateContent();
        });
        questionCounter++;
    }
    else {
        quizEnded();
    }
});

function startQuiz(){
    document.querySelector('.quiz').style.display = 'block';
    btn.innerHTML = 'Next Question';
}

function updateContent(){
    const spans = document.querySelectorAll('span');
    if(spans.length > 4){
        const toArray = Array.from(spans);
        toArray.filter((item,index) => {
            if(index === 0 && index <= 4){
                answerDiv.removeChild(item);
            }
        })
    }
}

function questionNumber(){
    const questionNumber = document.getElementById('questionNumber');
    questionNumber.innerHTML = `Question number: ${questionCounter+1}`;
}

function quizEnded(){
    btn.style.display = 'none';
    document.querySelector('.endResult').style.display = 'block';
    totalScore.innerHTML = `Your total score from taking quiz is: ${score}`;
    document.querySelector('.quiz').style.display = 'none';
    document.getElementById('retry').addEventListener('click', () => {
        location.reload();
    });
}