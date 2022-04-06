const startButton =  document.getElementById('startBtn');
const quiz_card = document.getElementById('quizCard');
const start_card = document.getElementById('startCard');
const answerButtonA =  document.getElementById('answerBtnA');
const answerButtonB =  document.getElementById('answerBtnB');
const answerButtonC =  document.getElementById('answerBtnC');
const answerButtonD =  document.getElementById('answerBtnD');
const countDown =  document.getElementById('timer');

startButton.addEventListener('click', startQuiz)

function startQuiz(event) {
    event.preventDefault();
    console.log("quiz started!");
    startButton.classList.add("hide");
    countDown.classList.remove("hide");
    quiz_card.classList.remove("hide");
    start_card.classList.add("hide");
    // answerButtonB.classList.remove("hide");
    // answerButtonC.classList.remove("hide");
    // answerButtonD.classList.remove("hide");
}

// const startQuiz = async (event) => {
//     event.preventDefault();
//     console.log("quiz started!");
//     startButton.classList.add("hide");
//     answerButton.classList.remove("hide");
//     countDown.classList.remove("hide");
// }

