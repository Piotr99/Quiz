const quizData = [
  {
    question: 'How old is Piotr?',
    a: '10',
    b: '50',
    c: '22',
    d: '99',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'Python',
    c: 'C',
    d: 'JavaScript',
    correct: "a",
  },
  {
    question: 'Who is the President of US?',
    a: 'Jaś Fasola',
    b: 'Obi McDonald',
    c: 'Wupin Playdmir',
    d: 'Joe Biden',
    correct: "d",
  },
  {
    question: 'What does HTML stand for?',
    a: 'HyperText Markup Language',
    b: 'Cascading style sheet',
    c: 'Jason Object Notation',
    d: 'Application Programming interface',
    correct: "a",
  },
  {
    question: 'What year was JS launched?',
    a: '2020',
    b: '2019',
    c: '2008',
    d: 'None of the above',
    correct: "d",
  },
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.querySelector('button');

let currentQuiz = 0;
let score = 0;
let answer = undefined;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions</h2>
    
    <button onclick="location.reload()">Reload</button>
    `;
  }
});
