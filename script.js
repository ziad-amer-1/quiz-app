const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const correctAnswers = document.querySelector('.correct-answers-score')
const questionsNumber = document.querySelector('.questions-number')

let shuffledQuestions
let currentQuestionIndex


startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", () => {
  correctAnswers.innerHTML = 0
});

function startGame() {
  // console.log('start quiz')
  startBtn.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQuestion();
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer
    button.classList.add('btn', 'answer-btn')
    answerButtonsElement.append(button)
    button.dataset.correct = question.correct_answer
    button.addEventListener('click', selectAnswer)
  })
}

function resetState() {
  nextBtn.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  const selectedButton = e.target
  const correctAnswer = selectedButton.dataset.correct
  if (selectedButton.innerText === correctAnswer) {
    correctAnswers.innerHTML++
      selectedButton.classList.add('correct')
  } else {
      selectedButton.classList.add('wrong')
      const rightAnswer = Array.from(answerButtonsElement.children).find(e => e.innerHTML === correctAnswer)
      rightAnswer.classList.add('correct')
  }
  
  answerButtonsElement.classList.add('noTouch')
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextBtn.classList.remove('hide')
  } else {
    
    startBtn.innerHTML = 'Restart'
    
    startBtn.classList.remove('hide')
    answerButtonsElement.classList.remove('noTouch')
    
  }
  
  
}

nextBtn.addEventListener('click', () => {
  answerButtonsElement.classList.remove('noTouch')
  currentQuestionIndex++
  setNextQuestion()
})

const questions = [
  {
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    answers: [
      "512", "1024", "500", "1000"
    ],
  },
  {
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    answers: ["512MB", "5GB", "Unlimited", "1GB"].sort(() => Math.random() - 0.5),
  },
  {
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    answers: ["Gigahotz", "Gigahetz", "Gigahatz", "Gigahertz"].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "The programming language 'Swift' was created to replace what other programming language?",
    correct_answer: "Objective-C",
    answers: ["C#", "Ruby", "C++", "Objective-C"].sort(() => Math.random() - 0.5),
  },
  {
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    answers: [
      "Macro Language",
      "Programming Language",
      "Scripting Language",
      "Markup Language"
    ].sort(() => Math.random() - 0.5),
  },
  {
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    answers: ["1", "2", "64", "8"].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
      "Motherboard"
    ].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    answers: ["Static", "Private", "Public", "Final"].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "If you were to code software in this language you'd only be able to type 0's and 1's.",
    correct_answer: "Binary",
    answers: ["JavaScript", "C++", "Python","Binary" ].sort(() => Math.random() - 0.5),
  },
  {
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what's on the screen and copies it to your clipboard",
    answers: [
      "Nothing",
      "Saves a .png file of what's on the screen in your screenshots folder in photos",
      "Closes all windows",
      "Captures what's on the screen and copies it to your clipboard"
    ].sort(() => Math.random() - 0.5),
  },
  {
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    answers: [".tu", ".tt", ".tl", ".tv"].sort(() => Math.random() - 0.5),
  },
  {
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    answers: ["1024", "1000", "1048576", "1000000"].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "In 'Hexadecimal', what color would be displayed from the color code? '#00FF00'?",
    correct_answer: "Green",
    answers: ["Red", "Blue", "Yellow", "Green"].sort(() => Math.random() - 0.5),
  },
  {
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    answers: ["C#", "C++", "Java", "Python"].sort(() => Math.random() - 0.5),
  },
  {
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    answers: [
      "Long Taco Service",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed",
      "Long Term Support"
    ].sort(() => Math.random() - 0.5),
  },
];
questionsNumber.innerHTML = questions.length