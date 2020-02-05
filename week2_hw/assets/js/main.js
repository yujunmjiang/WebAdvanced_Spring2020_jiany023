/* Week 02 Assignment
   Create an art history quiz base on a flow diagram.
   By Yujun Jiang */

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The painting titled "Portrait of Pope Innocent X" was painted by...',
    answers: [
      { text: 'Diego Velazquez', correct: true },
      { text: 'El Greco', correct: false },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Rembrandt', correct: false },
    ]
  },
  {
    question: 'Pop Art is...',
    answers: [
      { text: 'An art movement that involves famous people', correct: false },
      { text: 'An art movement that involves imagery dealing with Pop culture', correct: true },
      { text: 'An art movement that involves imagery dealing with food', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    question: "The artist that used repeating images, such as Marilyn Monroe or Campell's soup is...",
    answers: [
      { text: 'Andy Warhol', correct: true },
      { text: 'Claus Oldenburg', correct: false },
      { text: 'Robert Rauschenberg', correct: false },
      { text: 'Roy Lichtenstein', correct: false }
    ]
  },
  {
    question: 'The artist that enlarged small areas of comic strip is...',
    answers: [
      { text: 'Andy Warhol', correct: false },
      { text: 'Claus Oldenburg', correct: false },
      { text: 'Robert Rauschenberg', correct: false },
      { text: 'Roy Lichtenstein', correct: true }
    ]
  }
]