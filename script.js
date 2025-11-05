const quizData = [
  {
    question: 'What does biodiversity describe?',
    answers: [
      'The total number of animals living in a habitat',
      'The variety of living things in an area',
      'How many habitats or biomes a region contains',
      'The amount of natural resources like water and soil nutrients',
    ],
    correctIndex: 1,
    explanation:
      'Biodiversity is the variety of life in the world or in a particular habitat or ecosystem, including the diversity of species, genes, and ecosystems.',
  },
  {
    question: 'Why is a rainforest considered a biodiversity hotspot?',
    answers: [
      'Its climate stays warm all year, so few species migrate away',
      'It supports many species living in a small area',
      'Its soils store more nutrients than any other ecosystem on Earth',
      'Its food webs are simple, with only a few species sharing resources',
    ],
    correctIndex: 2,
    explanation:
      'A biodiversity hotspot is a place that has exceptional numbers of unique species but is under serious threat, and rainforests fit that definition.',
  },
  {
    question: 'Which human activity most often reduces biodiversity?',
    answers: [
      'Restoring wetlands that filter water and provide habitat',
      'Designing wildlife crossings that reconnect ecosystems',
      'Managing farms with crop rotation and cover crops',
      'Clearing forests for farms or cities',
    ],
    correctIndex: 3,
    explanation:
      'Clearing forests destroys habitats, and habitat loss is the leading cause of biodiversity decline around the globe.',
  },
  {
    question: 'What is an endangered species?',
    answers: [
      'A species that can live in many different ecosystems around the world',
      'A species that scientists recently discovered in a rainforest',
      'A species that may soon disappear forever',
      'A species that migrates every season',
    ],
    correctIndex: 2,
    explanation:
      'An endangered species is one that is seriously at risk of extinction, so it needs protection to keep its population from disappearing.',
  },
  {
    question: 'How do pollinators like bees and butterflies support biodiversity?',
    answers: [
      'They break down fallen leaves to recycle nutrients into soil',
      'They carry seeds inside their stomachs and drop them far away',
      'They move pollen so plants can make seeds and fruits',
      'They make soil tunnels that let plant roots breathe',
    ],
    correctIndex: 2,
    explanation:
      'Pollination happens when animals move pollen between flowers, allowing plants to produce seeds and fruits for the next generation.',
  },
  {
    question:
      'If an invasive species moves into an ecosystem, what might happen?',
    answers: [
      'Biodiversity could drop because the invader pushes out native species',
      'Nutrient cycles usually speed up and support more native species',
      'Pollination rates often increase for native plants',
      'Only the largest predators notice the newcomer',
    ],
    correctIndex: 0,
    explanation:
      'An invasive species is a non-native organism that spreads quickly and causes harm to the environment, economy, or human health, often squeezing out native species.',
  },
  {
    question: 'What do food webs show us?',
    answers: [
      'How energy moves between living things in an ecosystem',
      'How water cycles between the ocean and the atmosphere',
      'How soil nutrients are created by weathering rocks',
      'How climate patterns shift between different biomes',
    ],
    correctIndex: 0,
    explanation:
      'A food web shows the interconnection of food chains in an ecosystem and how energy flows among producers, consumers, and decomposers.',
  },
  {
    question: 'Which choice is a simple action you can take to support biodiversity?',
    answers: [
      'Select ornamental plants from other continents to add new colors',
      'Plant a mix of native flowers for pollinators',
      'Keep lawns short by mowing every few days to discourage weeds',
      'Spray broad-spectrum pesticides to make sure no insects remain',
    ],
    correctIndex: 1,
    explanation:
      'Native flowers evolved with local wildlife, so they supply the nectar, pollen, and shelter that native pollinators rely on.',
  },
  {
    question: 'What happens when a keystone species disappears?',
    answers: [
      'The ecosystem may collapse or change dramatically',
      'Only the population of the keystone species changes while others stay steady',
      'Herbivores usually replace it without any major changes',
      'Energy flow speeds up but species numbers stay the same',
    ],
    correctIndex: 0,
    explanation:
      'A keystone species has an outsized effect on its ecosystem; when it disappears, the community structure can change dramatically or collapse.',
  },
  {
    question: 'Why do scientists monitor biodiversity over time?',
    answers: [
      'To estimate how much timber can be harvested each season',
      'To track changes and keep ecosystems healthy',
      'To pick which species should be moved to zoos permanently',
      'To determine when ecosystems no longer need any conservation funding',
    ],
    correctIndex: 1,
    explanation:
      'Tracking biodiversity over time helps scientists spot changes early, guide conservation decisions, and check ecosystem health.',
  },
];

const glossaryTerms = [
  {
    term: 'Biodiversity',
    definition:
      'The variety of life in the world or in a specific habitat or ecosystem, including the diversity of species, genes, and ecosystems.',
  },
  {
    term: 'Ecosystem',
    definition:
      'A community of living organisms interacting with each other and with the nonliving parts of their environment.',
  },
  {
    term: 'Biodiversity hotspot',
    definition:
      'A region that has an exceptional concentration of unique species but is threatened with destruction.',
  },
  {
    term: 'Endangered species',
    definition:
      'A species that is seriously at risk of extinction without protection and recovery efforts.',
  },
  {
    term: 'Pollinator',
    definition:
      'An animal that moves pollen between flowers, enabling plants to produce seeds and fruit.',
  },
  {
    term: 'Invasive species',
    definition:
      'A non-native organism that spreads quickly and causes harm to the environment, economy, or human health.',
  },
  {
    term: 'Food web',
    definition:
      'A diagram that shows how multiple food chains overlap and how energy moves through an ecosystem.',
  },
  {
    term: 'Keystone species',
    definition:
      'A species whose impact on an ecosystem is much greater than its abundance, helping hold the community together.',
  },
  {
    term: 'Native species',
    definition:
      'A species that occurs naturally in a region or ecosystem without human introduction.',
  },
  {
    term: 'Conservation',
    definition:
      'The protection and careful management of natural resources and biodiversity.',
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
const glossaryBtn = document.getElementById('open-glossary');
const glossaryPanel = document.getElementById('glossary-panel');
const glossaryList = document.getElementById('glossary-list');
const closeGlossaryBtn = document.getElementById('close-glossary');
const glossaryBackdrop = document.getElementById('glossary-backdrop');

const state = {
  currentQuestion: 0,
  score: 0,
  selectedAnswer: null,
  answers: [],
};

let previouslyFocusedElement = null;

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

if (glossaryBtn && closeGlossaryBtn && glossaryBackdrop) {
  glossaryBtn.addEventListener('click', openGlossary);
  closeGlossaryBtn.addEventListener('click', closeGlossary);
  glossaryBackdrop.addEventListener('click', closeGlossary);
}

if (glossaryPanel && glossaryList) {
  glossaryPanel.setAttribute('aria-hidden', 'true');
  populateGlossary();
}

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

function openGlossary() {
  if (!glossaryPanel || !glossaryBackdrop || !closeGlossaryBtn) return;
  previouslyFocusedElement = document.activeElement;
  glossaryPanel.classList.remove('hidden');
  glossaryBackdrop.classList.remove('hidden');
  glossaryPanel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  glossaryPanel.focus();
  closeGlossaryBtn.focus();
  document.addEventListener('keydown', handleGlossaryKeydown);
}

function closeGlossary() {
  if (!glossaryPanel || !glossaryBackdrop || !closeGlossaryBtn) return;
  glossaryPanel.classList.add('hidden');
  glossaryBackdrop.classList.add('hidden');
  glossaryPanel.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleGlossaryKeydown);
  if (
    previouslyFocusedElement &&
    previouslyFocusedElement instanceof HTMLElement
  ) {
    previouslyFocusedElement.focus();
  }
}

function handleGlossaryKeydown(event) {
  if (event.key === 'Escape') {
    closeGlossary();
  } else if (event.key === 'Tab') {
    trapGlossaryFocus(event);
  }
}

function trapGlossaryFocus(event) {
  if (!glossaryPanel) return;
  const focusableElements = glossaryPanel.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function populateGlossary() {
  if (!glossaryList) return;
  glossaryList.innerHTML = '';
  glossaryTerms.forEach(({ term, definition }) => {
    const termElement = document.createElement('dt');
    termElement.textContent = term;

    const definitionElement = document.createElement('dd');
    definitionElement.textContent = definition;

    glossaryList.append(termElement, definitionElement);
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
