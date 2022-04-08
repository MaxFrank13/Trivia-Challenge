const startButton =  document.getElementById('startBtn');
const quiz_card = document.getElementById('quizCard');
const start_card = document.getElementById('startCard');
const timerBox =  document.getElementById('timer_box');
const countDown = document.getElementById('count_down');
let timer;
let timerCount = 60;

startButton.addEventListener('click', startQuiz)


function startQuiz(event) {
    event.preventDefault();
    console.log("quiz started!");
    startButton.classList.add("hide");
    // countDown.classList.remove("hide");
    quiz_card.classList.remove("hide");
    start_card.classList.add("hide");
    startTimer();
    nextQuestionHandle();
    // answerButtonB.classList.remove("hide");
    // answerButtonC.classList.remove("hide");
    // answerButtonD.classList.remove("hide");
}

const startTimer = () => {
    timerBox.classList.remove("hide");
    timer = setInterval(function() {
        timerCount--;
        countDown.textContent = timerCount;
        // Tests if time has run out
        if (timerCount <= 10){
            countDown.classList.add('warn');
        }
        if (timerCount <= 0) {
          // Clears interval
          clearInterval(timer);
          timesUp();
        }
      }, 1000);
};

const timesUp = () => {
    countDown.classList.add('hide');
    quiz_card.classList.add('hide');
    quizEndHandle();
}
// const startQuiz = async (event) => {
//     event.preventDefault();
//     console.log("quiz started!");
//     startButton.classList.add("hide");
//     answerButton.classList.remove("hide");
//     countDown.classList.remove("hide");
// }

const quiz = document.querySelector('.quiz');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question-container')
const score = document.querySelector('.score');
const submitScore = document.querySelector('.submit-score');

let result = 0;
const startingId = parseInt(questions[0].dataset.id);
let currentQuestion = startingId;

const quizSubmitHandle = async () => {


    const answerIdArray = [];
    const wrongAnswerIdArray = [];
    

    answers.forEach(answer => {
        if (answer.checked) answerIdArray.push(answer.dataset.id);
    });

   const promises = answerIdArray.map(async id => {
        const response = await fetch(`/api/game/answer/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        const data = await response.json();

        if (data.correct_yn) {
            result++;
        } else {
            wrongAnswerIdArray.push(id);
        }
    });
    await Promise.all(promises)
    submitScore.classList.remove('hide');
};

const submitScoreHandle = async () => {

    const quiz_id = quiz.dataset.id
    const questions_answered = questions.length;
    const wrong_answers = questions_answered - result;
    const game_score = result * 10;


    const response = await fetch('/api/game', {
        method: 'POST',
        body: JSON.stringify({
            quiz_id: quiz_id,
            questions_answered: questions_answered,
            correct_answers: result,
            wrong_answers: wrong_answers,
            game_score: game_score,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('unable to submit score');
    }
};

const nextQuestionHandle = () => {
    questions.forEach(question => {
        if (question.dataset.id != currentQuestion)
        question.classList.add('hide');
        else question.classList.remove('hide');
    })
    currentQuestion++;

    if (currentQuestion === startingId + 11)
    quizEndHandle();
};

const quizEndHandle = async () => {
    await quizSubmitHandle();
    await submitScoreHandle(); 
}

answers.forEach(answer => {
   answer.addEventListener('click', nextQuestionHandle)
});


document
    .querySelector('.quiz')
    .addEventListener('submit', quizSubmitHandle);

document
    .querySelector('.submit-score')
    .addEventListener('click', submitScoreHandle);
