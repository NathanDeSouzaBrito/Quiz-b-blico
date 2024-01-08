const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container");
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".questions");
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()

    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer) 
    })
}

function resetState() {
        while ($answersContainer.firstChild) {
          $answersContainer.removeChild($answersContainer.firstChild);
        }

        document.body.removeAttribute("class");
        $nextQuestionButton.classList.add("hide");
}


function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    } else {
                document.body.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Parece que alguem vai para a EBD todo Domingo, Exelente!!"
            break
        case (performance >= 70):
            message = "muito bom, mas continue indo para EBD"
            break
        case (performance >= 50):
            message = "Bom, mas pode melhorar, então não falte a EBD"
            break
        case (performance >= 30):
            message = "melhore, EBD é bom e de graça"
            break
        default:
            message = "Vamos para a EDB?. Porque ta precisando"
    }

    $questionsContainer.innerHTML = `
    <div class="container">
        <p class="p">
            Você acertou ${totalCorrect} de ${totalQuestion} questões! <br>
            <span class="p">Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class= "button-F" >
            Refazer o teste
        </button>
    </div>
    `;
}























const questions = [
  {
    question: "Quantos livros tem a Biblia?",
    answers: [
      { text: "66 livros", correct: true },
      { text: "65 livros", correct: false },
      { text: "74 livros", correct: false },
      { text: "76 livros", correct: false },
    ],
  },
  {
    question: "Qual era o NOME do fruto proibido que Adão e eva comeram?",
    answers: [
      { text: "Maça", correct: false },
      { text: "Goiaba", correct: false },
      { text: "Não tinha nome", correct: true },
      { text: "Pera", correct: false },
    ],
  },
  {
    question: "Quais desses livros estão na Bíblia?",
    answers: [
        { text: "Davi", correct: false },
        { text: "José", correct: false },
        { text: "Sansão", correct: false },
        { text: "Tito", correct: true },
    ],
  },
  {
    question: "O livro de Judas esta no novo ou velho testamento?",
    answers: [
      { text: "Novo testamento", correct: true },
      { text: "Velho testamento", correct: false },
    ],
  },
];