const quizData = [
  {
    question: 'What does biodiversity describe?',
    answers: [
      'The number of people living in a city',
      'The variety of living things in an area',
      'How many pets a family owns',
      'The amount of rainfall in a year',
    ],
    correctIndex: 1,
    explanation:
      'Biodiversity includes all the different plants, animals, fungi, and microorganisms living together and interacting in an ecosystem.',
  },
  {
    question: 'Why is a rainforest considered a biodiversity hotspot?',
    answers: [
      'It only has one type of tree',
      'It gets more sunlight than deserts',
      'It supports many species living in a small area',
      'It has no predators',
    ],
    correctIndex: 2,
    explanation:
      'Rainforests pack a huge number of species into tight spaces. Many of those species are found nowhere else on Earth.',
  },
  {
    question: 'Which human activity most often reduces biodiversity?',
    answers: [
      'Protecting wetlands',
      'Building wildlife corridors',
      'Planting native flowers',
      'Clearing forests for farms or cities',
    ],
    correctIndex: 3,
    explanation:
      'When forests are cleared, the animals and plants that once lived there lose their homes, making the area less diverse.',
  },
  {
    question: 'What is an endangered species?',
    answers: [
      'A species with a large and growing population',
      'A species that lives only in zoos',
      'A species that may soon disappear forever',
      'A species that migrates every season',
    ],
    correctIndex: 2,
    explanation:
      'Endangered species have very small populations. Without protection, they could become extinct.',
  },
  {
    question: 'How do pollinators like bees and butterflies support biodiversity?',
    answers: [
      'They scare away predators',
      'They carry seeds across oceans',
      'They move pollen so plants can make seeds and fruits',
      'They eat harmful insects',
    ],
    correctIndex: 2,
    explanation:
      'When pollinators visit flowers, they transfer pollen. This allows plants to produce seeds, fruit, and the next generation of plants.',
  },
  {
    question:
      'If an invasive species moves into an ecosystem, what might happen?',
    answers: [
      'Biodiversity could drop because the invader pushes out native species',
      'The ecosystem will always stay the same',
      'Only the weather will change',
      'Native species will instantly evolve new traits',
    ],
    correctIndex: 0,
    explanation:
      'Invasive species often spread quickly and compete for food, sunlight, or space. Native species can struggle to survive.',
  },
  {
    question: 'What do food webs show us?',
    answers: [
      'How energy moves between living things in an ecosystem',
      'How to cook food outdoors',
      'How deep the ocean is',
      'How rocks form underground',
    ],
    correctIndex: 0,
    explanation:
      'Food webs map out who eats whom. They highlight how plants, animals, and decomposers all rely on one another.',
  },
  {
    question: 'Which choice is a simple action you can take to support biodiversity?',
    answers: [
      'Leave all lights on at night',
      'Plant a mix of native flowers for pollinators',
      'Use more single-use plastic',
      'Dump aquarium water in local streams',
    ],
    correctIndex: 1,
    explanation:
      'Native plants help local pollinators and other wildlife find the food and shelter they evolved to use.',
  },
  {
    question: 'What happens when a keystone species disappears?',
    answers: [
      'The ecosystem may collapse or change dramatically',
      'Nothing happens; keystone species are unimportant',
      'Just one other species is affected',
      'The climate quickly cools down',
    ],
    correctIndex: 0,
    explanation:
      'Keystone species have a huge influence on their ecosystems. Without them, food webs and habitats can fall apart.',
  },
  {
    question: 'Why do scientists monitor biodiversity over time?',
    answers: [
      'To find new places for theme parks',
      'To track changes and keep ecosystems healthy',
      'To sell rare animals',
      'To stop all natural disasters',
    ],
    correctIndex: 1,
    explanation:
      'Keeping records helps scientists notice problems early, plan conservation actions, and celebrate improvements.',
  },
];

const tipJar = [
  'Create a balcony or backyard habitat with water and shelter for wildlife.',
  'Join a community clean-up to keep local waterways clear and healthy.',
  'Talk with your family about buying food that is grown in sustainable ways.',
  'Offer to help plant trees or native plants at a community garden or school.',
  'Share what you learn about biodiversity with a friend or classmate.',
];

const startBtn = document.getElementById('start-btn');
const statusBar = document.getElementById('status-bar');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const answerList = document.getElementById('answer-list');
const nextBtn = document.getElementById('next-btn');
const feedbackCard = document.getElementById('feedback-card');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackIcon = document.getElementById('feedback-icon');
const continueBtn = document.getElementById('continue-btn');
const resultsCard = document.getElementById('results-card');
const resultsSummary = document.getElementById('results-summary');
const resultsFacts = document.getElementById('results-facts');
const retakeBtn = document.getElementById('retake-btn');
const scoreDisplay = document.getElementById('score-display');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');

const state = {
  currentQuestion: 0,
  score: 0,
  selectedAnswer: null,
  answers: [],
};

startBtn.addEventListener('click', () => {
  document.querySelector('.hero').classList.add('quiz-started');
  startBtn.classList.add('hidden');
  startQuiz();
});

nextBtn.addEventListener('click', () => {
  if (state.selectedAnswer === null) return;
  showFeedback();
});

continueBtn.addEventListener('click', () => {
  state.currentQuestion += 1;
  if (state.currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
});

retakeBtn.addEventListener('click', () => {
  startQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function startQuiz() {
  state.currentQuestion = 0;
  state.score = 0;
  state.answers = [];
  scoreDisplay.textContent = '0';
  progressBar.style.width = '0%';
  statusBar.classList.remove('hidden');
  questionCard.classList.remove('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const current = quizData[state.currentQuestion];
  questionText.textContent = current.question;
  questionCounter.textContent = `Question ${state.currentQuestion + 1} of ${
    quizData.length
  }`;
  progressBar.style.width = `${
    (state.currentQuestion / quizData.length) * 100
  }%`;
  answerList.innerHTML = '';
  state.selectedAnswer = null;
  nextBtn.disabled = true;
  feedbackCard.classList.add('hidden');
  questionCard.classList.remove('hidden');

  current.answers.forEach((answer, index) => {
    const option = document.createElement('li');
    option.className = 'answer';
    option.setAttribute('data-index', index.toString());
    option.setAttribute('role', 'button');
    option.setAttribute('tabindex', '0');
    option.innerHTML = `
      <span class="answer__label">${String.fromCharCode(65 + index)}</span>
      <span>${answer}</span>
    `;

    option.addEventListener('click', () => selectAnswer(index));
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectAnswer(index);
      }
    });

    answerList.appendChild(option);
  });
}

function selectAnswer(answerIndex) {
  if (feedbackCard.classList.contains('hidden') === false) {
    return;
  }

  const options = answerList.querySelectorAll('.answer');
  options.forEach((option) => option.classList.remove('selected'));

  const selected = answerList.querySelector(
    `.answer[data-index="${answerIndex}"]`
  );

  if (!selected) {
    return;
  }

  selected.classList.add('selected');
  state.selectedAnswer = answerIndex;
  nextBtn.disabled = false;
}

function showFeedback() {
  const current = quizData[state.currentQuestion];
  const isCorrect = state.selectedAnswer === current.correctIndex;

  markAnswers(isCorrect, current);

  if (isCorrect) {
    state.score += 1;
    feedbackTitle.textContent = 'Great job!';
    feedbackMessage.textContent = current.explanation;
    feedbackIcon.textContent = '🌿';
  } else {
    feedbackTitle.textContent = 'Nice try—keep going!';
    feedbackMessage.textContent = `${current.explanation} Remember to compare each option carefully.`;
    feedbackIcon.textContent = '🦉';
  }

  state.answers.push({
    question: current.question,
    selected: state.selectedAnswer,
    correct: current.correctIndex,
  });

  scoreDisplay.textContent = state.score.toString();
  questionCard.classList.add('hidden');
  feedbackCard.classList.remove('hidden');

  if (state.currentQuestion === quizData.length - 1) {
    continueBtn.textContent = 'See Results';
  } else {
    continueBtn.textContent = 'Keep Exploring';
  }
}

function markAnswers(isCorrect, currentQuestion) {
  const options = answerList.querySelectorAll('.answer');
  options.forEach((option) => {
    const optionIndex = Number(option.getAttribute('data-index'));
    if (optionIndex === currentQuestion.correctIndex) {
      option.classList.add('correct');
    } else if (optionIndex === state.selectedAnswer && !isCorrect) {
      option.classList.add('incorrect');
    }
    option.setAttribute('aria-pressed', optionIndex === state.selectedAnswer);
  });
}

function showResults() {
  statusBar.classList.remove('hidden');
  questionCard.classList.add('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.remove('hidden');
  progressBar.style.width = '100%';

  const total = quizData.length;
  const score = state.score;
  const percentage = Math.round((score / total) * 100);

  let summary;
  if (percentage === 100) {
    summary =
      "Incredible! You earned a perfect score. You're a true biodiversity guardian.";
  } else if (percentage >= 80) {
    summary =
      "Awesome work! You really understand how living things connect. Keep sharing what you know.";
  } else if (percentage >= 60) {
    summary =
      'Nice effort! You have a solid base. Review the explanations to grow your nature knowledge even more.';
  } else {
    summary =
      "Thanks for exploring! Every attempt teaches something new. Try again and see which questions you can improve.";
  }

  resultsSummary.textContent = `You scored ${score} out of ${total} (${percentage}%). ${summary}`;

  resultsFacts.innerHTML = '';
  const selectedTips = pickRandomTips(3);
  selectedTips.forEach((tip) => {
    const item = document.createElement('li');
    item.textContent = tip;
    resultsFacts.appendChild(item);
  });
}

function pickRandomTips(count) {
  const available = [...tipJar];
  const chosen = [];
  while (chosen.length < count && available.length > 0) {
    const index = Math.floor(Math.random() * available.length);
    chosen.push(available.splice(index, 1)[0]);
  }
  return chosen;
}
