const multipleChoiceTemplates = [
  {
    id: 'mc-1',
    type: 'multiple',
    prompt: 'What does biodiversity describe?',
    choices: [
      'The total number of animals living in a habitat',
      'The variety of living things in an area',
      'How many habitats or biomes a region contains',
      'The amount of natural resources like water and soil nutrients',
    ],
    answer: 'The variety of living things in an area',
    explanation:
      'Biodiversity is the variety of life in the world or in a particular habitat or ecosystem, including the diversity of species, genes, and ecosystems.',
  },
  {
    id: 'mc-2',
    type: 'multiple',
    prompt: 'Why is a rainforest considered a biodiversity hotspot?',
    choices: [
      'Its climate stays warm all year, so few species migrate away',
      'It supports many species living in a small area',
      'Its soils store more nutrients than any other ecosystem on Earth',
      'Its food webs are simple, with only a few species sharing resources',
    ],
    answer: 'It supports many species living in a small area',
    explanation:
      'Biodiversity hotspots host exceptional numbers of unique species in a small region, and rainforests pack thousands of species into tight spaces.',
  },
  {
    id: 'mc-3',
    type: 'multiple',
    prompt: 'Which human activity most often reduces biodiversity?',
    choices: [
      'Restoring wetlands that filter water and provide habitat',
      'Designing wildlife crossings that reconnect ecosystems',
      'Managing farms with crop rotation and cover crops',
      'Clearing forests for farms or cities',
    ],
    answer: 'Clearing forests for farms or cities',
    explanation:
      'Habitat loss from clearing forests removes the homes of countless organisms and is the leading driver of biodiversity decline.',
  },
  {
    id: 'mc-4',
    type: 'multiple',
    prompt: 'What is an endangered species?',
    choices: [
      'A species that can live in many different ecosystems around the world',
      'A species that scientists recently discovered in a rainforest',
      'A species that may soon disappear forever',
      'A species that migrates every season',
    ],
    answer: 'A species that may soon disappear forever',
    explanation:
      'Endangered species have very small populations and face a high risk of extinction without protection.',
  },
  {
    id: 'mc-5',
    type: 'multiple',
    prompt:
      'How do pollinators like bees and butterflies support biodiversity?',
    choices: [
      'They break down fallen leaves to recycle nutrients into soil',
      'They carry seeds inside their stomachs and drop them far away',
      'They move pollen so plants can make seeds and fruits',
      'They make soil tunnels that let plant roots breathe',
    ],
    answer: 'They move pollen so plants can make seeds and fruits',
    explanation:
      'Pollinators transfer pollen between flowers, which lets plants create seeds and the next generation of plants.',
  },
  {
    id: 'mc-6',
    type: 'multiple',
    prompt: 'If an invasive species moves into an ecosystem, what might happen?',
    choices: [
      'Biodiversity could drop because the invader pushes out native species',
      'Nutrient cycles usually speed up and support more native species',
      'Pollination rates often increase for native plants',
      'Only the largest predators notice the newcomer',
    ],
    answer:
      'Biodiversity could drop because the invader pushes out native species',
    explanation:
      'Invasive species compete for space, food, or light and can quickly crowd out native species.',
  },
  {
    id: 'mc-7',
    type: 'multiple',
    prompt: 'What do food webs show us?',
    choices: [
      'How energy moves between living things in an ecosystem',
      'How water cycles between the ocean and the atmosphere',
      'How soil nutrients are created by weathering rocks',
      'How climate patterns shift between different biomes',
    ],
    answer: 'How energy moves between living things in an ecosystem',
    explanation:
      'Food webs display the overlapping feeding relationships that pass energy among producers, consumers, and decomposers.',
  },
  {
    id: 'mc-8',
    type: 'multiple',
    prompt:
      'Which choice is a simple action you can take to support biodiversity?',
    choices: [
      'Select ornamental plants from other continents to add new colors',
      'Plant a mix of native flowers for pollinators',
      'Keep lawns short by mowing every few days to discourage weeds',
      'Spray broad-spectrum pesticides to make sure no insects remain',
    ],
    answer: 'Plant a mix of native flowers for pollinators',
    explanation:
      'Native flowers match the needs of local pollinators and other wildlife, providing the food and shelter they evolved with.',
  },
  {
    id: 'mc-9',
    type: 'multiple',
    prompt: 'What happens when a keystone species disappears?',
    choices: [
      'The ecosystem may collapse or change dramatically',
      'Only the population of the keystone species changes while others stay steady',
      'Herbivores usually replace it without any major changes',
      'Energy flow speeds up but species numbers stay the same',
    ],
    answer: 'The ecosystem may collapse or change dramatically',
    explanation:
      'Keystone species support many others. Without them, food webs shift and entire communities can unravel.',
  },
  {
    id: 'mc-10',
    type: 'multiple',
    prompt: 'Why do scientists monitor biodiversity over time?',
    choices: [
      'To estimate how much timber can be harvested each season',
      'To track changes and keep ecosystems healthy',
      'To pick which species should be moved to zoos permanently',
      'To determine when ecosystems no longer need any conservation funding',
    ],
    answer: 'To track changes and keep ecosystems healthy',
    explanation:
      'Long-term monitoring reveals trends, helps spot problems early, and guides conservation decisions.',
  },
  {
    id: 'mc-11',
    type: 'multiple',
    prompt:
      'Which level of biodiversity focuses on differences within a single species?',
    choices: [
      'Community diversity',
      'Ecosystem diversity',
      'Genetic diversity',
      'Species diversity',
    ],
    answer: 'Genetic diversity',
    explanation:
      'Genetic diversity describes the variety of DNA within a species, which helps the species adapt to change.',
  },
  {
    id: 'mc-12',
    type: 'multiple',
    prompt: 'Which example shows an ecosystem service provided by wetlands?',
    choices: [
      'Providing shade for hikers on a trail',
      'Absorbing flood water and cleaning runoff',
      'Creating new minerals underground',
      'Making oxygen through photosynthesis at night',
    ],
    answer: 'Absorbing flood water and cleaning runoff',
    explanation:
      'Wetlands slow floods, filter water, and provide habitat—important ecosystem services for people and wildlife.',
  },
  {
    id: 'mc-13',
    type: 'multiple',
    prompt: 'Why are mangrove forests important for biodiversity?',
    choices: [
      'They form deserts where few species can live',
      'They protect coastlines and shelter young fish',
      'They grow only in freshwater lakes',
      'They release large amounts of air pollution',
    ],
    answer: 'They protect coastlines and shelter young fish',
    explanation:
      'Mangroves reduce storm damage, prevent erosion, and provide nursery habitat for fish, birds, and invertebrates.',
  },
  {
    id: 'mc-14',
    type: 'multiple',
    prompt: 'How does genetic diversity help a population survive?',
    choices: [
      'It keeps individuals from reproducing',
      'It helps populations adapt to changing conditions',
      'It makes food webs simpler',
      'It causes ecosystems to stay exactly the same',
    ],
    answer: 'It helps populations adapt to changing conditions',
    explanation:
      'When genes vary, some individuals can survive new diseases, climates, or predators and pass on their traits.',
  },
  {
    id: 'mc-15',
    type: 'multiple',
    prompt: 'Which choice best describes species richness?',
    choices: [
      'The total number of organisms in a population',
      'The number of different species in an area',
      'The average size of organisms in a habitat',
      'The mass of all organisms living in a biome',
    ],
    answer: 'The number of different species in an area',
    explanation:
      'Species richness refers to how many unique species are present. The more species, the richer the biodiversity.',
  },
  {
    id: 'mc-16',
    type: 'multiple',
    prompt: 'Which situation is an example of mutualism?',
    choices: [
      'A tick feeding on the blood of a deer',
      'Bees collecting nectar while pollinating flowers',
      'A lion hunting a herd of antelope',
      'Fungus growing on a fallen log',
    ],
    answer: 'Bees collecting nectar while pollinating flowers',
    explanation:
      'In mutualism, both partners benefit. Bees get food, and flowers receive help moving pollen.',
  },
  {
    id: 'mc-17',
    type: 'multiple',
    prompt:
      'What term describes a species that lives naturally in only one small location?',
    choices: [
      'Keystone species',
      'Endemic species',
      'Migratory species',
      'Introduced species',
    ],
    answer: 'Endemic species',
    explanation:
      'Endemic species occur naturally in just one geographic area, making them vulnerable if that habitat changes.',
  },
  {
    id: 'mc-18',
    type: 'multiple',
    prompt: 'Which practice supports sustainable fishing?',
    choices: [
      'Catching as many fish as possible before competitors arrive',
      'Setting catch limits based on population studies',
      'Targeting the youngest fish so older ones can grow bigger',
      'Moving coral reefs to new locations each season',
    ],
    answer: 'Setting catch limits based on population studies',
    explanation:
      'Science-based catch limits prevent overfishing so fish populations can renew themselves and remain diverse.',
  },
];

const fillInTemplates = [
  {
    id: 'fill-1',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'The process of ______ returns nutrients to the soil by breaking down dead matter.',
    answer: 'decomposition',
    acceptableAnswers: ['decomposing', 'decay', 'decomposition'],
    explanation:
      'Decomposition recycles nutrients so new plants can grow and keeps ecosystems healthy.',
  },
  {
    id: 'fill-2',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'A species found only in a single location is called an ______ species.',
    answer: 'endemic',
    acceptableAnswers: ['endemic'],
    explanation:
      'Endemic species live naturally in one place and often need targeted protection.',
  },
  {
    id: 'fill-3',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      '______ diversity describes differences in DNA within a species.',
    answer: 'genetic',
    acceptableAnswers: ['genetic'],
    explanation:
      'Genetic diversity gives populations the ability to adapt to disease, predators, and climate change.',
  },
  {
    id: 'fill-4',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Animals like bees and bats that move pollen are called ______.',
    answer: 'pollinators',
    acceptableAnswers: ['pollinator', 'pollinators'],
    explanation:
      'Pollinators carry pollen between flowers, enabling the reproduction of many plant species.',
  },
  {
    id: 'fill-5',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'A ______ species has a huge impact on its ecosystem relative to its numbers.',
    answer: 'keystone',
    acceptableAnswers: ['keystone'],
    explanation:
      'Keystone species maintain ecosystem balance; without them, many other species struggle.',
  },
  {
    id: 'fill-6',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Protecting habitats and natural resources is known as ______.',
    answer: 'conservation',
    acceptableAnswers: ['conservation'],
    explanation:
      'Conservation work keeps ecosystems functioning and preserves biodiversity.',
  },
  {
    id: 'fill-7',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement: 'Individual ______ chains link together to form food webs.',
    answer: 'food',
    acceptableAnswers: ['food'],
    explanation:
      'Food chains show one pathway of energy flow; many chains connect to form more complex food webs.',
  },
  {
    id: 'fill-8',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Invasive plants that crowd out natives are considered ______ species.',
    answer: 'invasive',
    acceptableAnswers: ['invasive'],
    explanation:
      'Invasive species can take over habitats, leaving little space or resources for native organisms.',
  },
  {
    id: 'fill-9',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'The variety of environments in a region reflects its ______ diversity.',
    answer: 'ecosystem',
    acceptableAnswers: ['ecosystem'],
    explanation:
      'Ecosystem diversity considers the different habitats, climates, and communities present in an area.',
  },
  {
    id: 'fill-10',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'The leafy ______ of a rainforest gets the most sunlight and supports many species.',
    answer: 'canopy',
    acceptableAnswers: ['canopy'],
    explanation:
      'The canopy is the upper layer of leaves and branches where many birds, insects, and plants thrive.',
  },
  {
    id: 'fill-11',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Planting ______ plants helps pollinators find the food they evolved with.',
    answer: 'native',
    acceptableAnswers: ['native'],
    explanation:
      'Native plants match local pollinators and wildlife, supporting biodiversity in your community.',
  },
  {
    id: 'fill-12',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'An ______ footprint measures how much land and water resources we use.',
    answer: 'ecological',
    acceptableAnswers: ['ecological'],
    explanation:
      'An ecological footprint shows how our resource use compares to Earth’s ability to renew those resources.',
  },
  {
    id: 'fill-13',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Tiny living things that break down dead matter are called ______.',
    answer: 'decomposers',
    acceptableAnswers: ['decomposer', 'decomposers'],
    explanation:
      'Decomposers recycle nutrients, returning them to the soil for new plant growth.',
  },
  {
    id: 'fill-14',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'The exchange of carbon between plants, animals, and the air is part of the ______ cycle.',
    answer: 'carbon',
    acceptableAnswers: ['carbon'],
    explanation:
      'The carbon cycle moves carbon through the atmosphere, biosphere, hydrosphere, and geosphere.',
  },
];

const dragAndDropTemplates = [
  {
    id: 'drag-1',
    type: 'drag',
    prompt: 'Drag each role to match the description.',
    targets: [
      {
        id: 'producer',
        label: 'Producer',
        answer: 'Makes its own food using sunlight',
      },
      {
        id: 'consumer',
        label: 'Consumer',
        answer: 'Gets energy by eating other organisms',
      },
      {
        id: 'decomposer',
        label: 'Decomposer',
        answer: 'Breaks down dead material into nutrients',
      },
    ],
    wordBank: [
      'Makes its own food using sunlight',
      'Gets energy by eating other organisms',
      'Breaks down dead material into nutrients',
    ],
    explanation:
      'Producers, consumers, and decomposers each play a role in moving energy through an ecosystem.',
  },
  {
    id: 'drag-2',
    type: 'drag',
    prompt: 'Match each conservation action with its benefit.',
    targets: [
      {
        id: 'native-plants',
        label: 'Planting native hedges',
        answer: 'Gives pollinators nectar and shelter',
      },
      {
        id: 'wildlife-corridor',
        label: 'Building wildlife corridors',
        answer: 'Lets animals move between habitats safely',
      },
      {
        id: 'cut-plastic',
        label: 'Cutting back plastic use',
        answer: 'Keeps rivers and oceans cleaner',
      },
    ],
    wordBank: [
      'Gives pollinators nectar and shelter',
      'Lets animals move between habitats safely',
      'Keeps rivers and oceans cleaner',
    ],
    explanation:
      'Simple actions—native plants, wildlife corridors, and reducing plastic—help biodiversity thrive.',
  },
  {
    id: 'drag-3',
    type: 'drag',
    prompt: 'Connect each Earth system to its description.',
    targets: [
      {
        id: 'biosphere',
        label: 'Biosphere',
        answer: 'All living organisms on Earth',
      },
      {
        id: 'hydrosphere',
        label: 'Hydrosphere',
        answer: 'All the water on Earth',
      },
      {
        id: 'atmosphere',
        label: 'Atmosphere',
        answer: 'The layers of gases surrounding Earth',
      },
    ],
    wordBank: [
      'All living organisms on Earth',
      'All the water on Earth',
      'The layers of gases surrounding Earth',
    ],
    explanation:
      'The biosphere, hydrosphere, and atmosphere interact to support life on our planet.',
  },
  {
    id: 'drag-4',
    type: 'drag',
    prompt: 'Match each threat to the impact it can cause.',
    targets: [
      {
        id: 'deforestation',
        label: 'Deforestation',
        answer: 'Removes habitat and increases erosion',
      },
      {
        id: 'pollution',
        label: 'Pollution',
        answer: 'Contaminates air, soil, or water',
      },
      {
        id: 'climate-change',
        label: 'Climate change',
        answer: 'Shifts temperature and rainfall patterns',
      },
    ],
    wordBank: [
      'Removes habitat and increases erosion',
      'Contaminates air, soil, or water',
      'Shifts temperature and rainfall patterns',
    ],
    explanation:
      'Major threats like deforestation, pollution, and climate change harm ecosystems in different ways.',
  },
  {
    id: 'drag-5',
    type: 'drag',
    prompt: 'Match each level of organization with the correct description.',
    targets: [
      {
        id: 'population',
        label: 'Population',
        answer: 'Members of the same species living in one area',
      },
      {
        id: 'community',
        label: 'Community',
        answer: 'Different species interacting in the same area',
      },
      {
        id: 'ecosystem',
        label: 'Ecosystem',
        answer: 'A community plus its physical environment',
      },
    ],
    wordBank: [
      'Members of the same species living in one area',
      'Different species interacting in the same area',
      'A community plus its physical environment',
    ],
    explanation:
      'Populations make up communities, and communities interact with their environment to form ecosystems.',
  },
  {
    id: 'drag-6',
    type: 'drag',
    prompt: 'Match each ecosystem service type to what it provides.',
    targets: [
      {
        id: 'provisioning',
        label: 'Provisioning services',
        answer: 'Provide materials like food or timber',
      },
      {
        id: 'regulating',
        label: 'Regulating services',
        answer: 'Control climate, floods, and disease',
      },
      {
        id: 'cultural',
        label: 'Cultural services',
        answer: 'Offer recreation, inspiration, or education',
      },
    ],
    wordBank: [
      'Provide materials like food or timber',
      'Control climate, floods, and disease',
      'Offer recreation, inspiration, or education',
    ],
    explanation:
      'Ecosystem services fall into provisioning, regulating, and cultural categories that all benefit people.',
  },
];

const questionTemplates = [
  ...multipleChoiceTemplates,
  ...fillInTemplates,
  ...dragAndDropTemplates,
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
  {
    term: 'Genetic diversity',
    definition:
      'The range of different inherited traits within a species, which helps populations adapt to change.',
  },
  {
    term: 'Ecosystem services',
    definition:
      'Benefits people obtain from ecosystems, such as clean water, food, and recreation.',
  },
];

const tipJar = [
  'Create a balcony or backyard habitat with water and shelter for wildlife.',
  'Join a community clean-up to keep local waterways clear and healthy.',
  'Talk with your family about buying food that is grown in sustainable ways.',
  'Offer to help plant trees or native plants at a community garden or school.',
  'Share what you learn about biodiversity with a friend or classmate.',
  'Keep a nature journal and record the species you observe throughout the seasons.',
  'Write to a local representative about protecting nearby natural areas.',
];

const startBtn = document.getElementById('start-btn');
const questionCountSelect = document.getElementById('question-count');
const statusBar = document.getElementById('status-bar');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const questionContent = document.getElementById('question-content');
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
  questionSet: [],
  currentIndex: 0,
  score: 0,
  responses: [],
  currentSelection: null,
  dragAssignments: {},
};

let previouslyFocusedElement = null;

startBtn.addEventListener('click', () => {
  document.querySelector('.hero').classList.add('quiz-started');
  startBtn.classList.add('hidden');
  startQuiz();
});

nextBtn.addEventListener('click', () => {
  if (nextBtn.disabled) return;
  showFeedback();
});

continueBtn.addEventListener('click', () => {
  state.currentIndex += 1;
  if (state.currentIndex < state.questionSet.length) {
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
  const questionTarget = Number(questionCountSelect?.value) || 10;
  state.questionSet = buildQuestionSet(questionTarget);
  state.currentIndex = 0;
  state.score = 0;
  state.responses = [];
  state.currentSelection = null;
  state.dragAssignments = {};

  scoreDisplay.textContent = '0';
  progressBar.style.width = '0%';
  questionCounter.textContent = `Question 1 of ${state.questionSet.length}`;
  nextBtn.disabled = true;
  nextBtn.textContent = 'Check Answer';

  statusBar.classList.remove('hidden');
  questionCard.classList.remove('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.add('hidden');

  showQuestion();
}

function buildQuestionSet(count) {
  const session = [];
  const templates = questionTemplates.map((template) => deepClone(template));
  let pool = shuffleArray(templates);
  let iteration = 0;

  while (session.length < count) {
    if (pool.length === 0) {
      pool = shuffleArray(questionTemplates.map((template) => deepClone(template)));
    }

    const template = pool.shift();
    const question = prepareQuestionTemplate(template, iteration);
    session.push(question);
    iteration += 1;
  }

  return session.slice(0, count);
}

function prepareQuestionTemplate(template, iteration) {
  const question = deepClone(template);
  question.sessionId = `${template.id}-${Date.now()}-${iteration}`;

  if (question.type === 'multiple') {
    question.choices = shuffleArray(question.choices);
    question.choiceElements = [];
  }

  if (question.type === 'drag') {
    question.wordBank = shuffleArray(question.wordBank);
    question.targets = shuffleArray(question.targets);
    question.dropZoneRefs = {};
    question.tokenRefs = {};
  }

  return question;
}

function showQuestion() {
  const question = state.questionSet[state.currentIndex];

  state.currentSelection = null;
  state.dragAssignments = {};
  nextBtn.disabled = true;
  nextBtn.textContent = 'Check Answer';

  questionText.textContent = question.prompt;
  questionCounter.textContent = `Question ${state.currentIndex + 1} of ${
    state.questionSet.length
  }`;
  progressBar.style.width = `${
    (state.currentIndex / state.questionSet.length) * 100
  }%`;

  questionContent.innerHTML = '';
  questionCard.classList.remove('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.add('hidden');

  if (question.type === 'multiple') {
    renderMultipleChoice(question);
  } else if (question.type === 'fill') {
    renderFillIn(question);
  } else if (question.type === 'drag') {
    renderDragAndDrop(question);
  }
}

function renderMultipleChoice(question) {
  const list = document.createElement('ul');
  list.className = 'answer-options';

  question.choices.forEach((choice, index) => {
    const item = document.createElement('li');
    item.className = 'answer';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.dataset.choice = choice;
    item.innerHTML = `
      <span class="answer__label">${String.fromCharCode(65 + index)}</span>
      <span>${choice}</span>
    `;

    const selectHandler = () => {
      if (!feedbackCard.classList.contains('hidden')) return;
      question.choiceElements.forEach((element) =>
        element.classList.remove('selected')
      );
      item.classList.add('selected');
      state.currentSelection = choice;
      nextBtn.disabled = false;
    };

    item.addEventListener('click', selectHandler);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectHandler();
      }
    });

    question.choiceElements.push(item);
    list.appendChild(item);
  });

  questionContent.appendChild(list);
}

function renderFillIn(question) {
  const container = document.createElement('div');
  container.className = 'fill-response';

  const statement = document.createElement('p');
  statement.textContent = question.statement;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'fill-response__input';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.placeholder = 'Type your answer';

  input.addEventListener('input', () => {
    const value = input.value.trim();
    state.currentSelection = value;
    input.classList.remove('correct', 'incorrect');
    nextBtn.disabled = value.length === 0;
  });

  input.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === 'Return') && !nextBtn.disabled) {
      event.preventDefault();
      showFeedback();
    }
  });

  question.inputRef = input;
  container.append(statement, input);
  questionContent.appendChild(container);

  setTimeout(() => input.focus(), 150);
}

function renderDragAndDrop(question) {
  const wrapper = document.createElement('div');
  wrapper.className = 'drag-drop';

  const instructions = document.createElement('p');
  instructions.textContent = 'Drag words from the bank or click to match them to each description. Click a matched word to return it.';

  const wordBank = document.createElement('div');
  wordBank.className = 'word-bank';

  const dropZones = document.createElement('div');
  dropZones.className = 'drop-zones';

  let activeToken = null;

  const updateSelection = () => {
    const filled = question.targets.every(
      (target) => !!state.dragAssignments[target.id]
    );
    if (filled) {
      state.currentSelection = { ...state.dragAssignments };
      nextBtn.disabled = false;
    } else {
      state.currentSelection = null;
      nextBtn.disabled = true;
    }
  };

  const releaseToken = (token) => {
    const assignedTarget = token.dataset.assignedTarget;
    if (assignedTarget) {
      const targetInfo = question.dropZoneRefs[assignedTarget];
      if (targetInfo) {
        targetInfo.target.textContent = 'Drop answer here';
        targetInfo.target.classList.remove('filled');
        delete targetInfo.target.dataset.tokenId;
        targetInfo.zone.classList.remove('correct', 'incorrect');
      }
      delete state.dragAssignments[assignedTarget];
    }
    token.classList.remove('token--used', 'token--active');
    delete token.dataset.assignedTarget;
    updateSelection();
  };

  const assignTokenToZone = (token, zone) => {
    if (token.classList.contains('token--used')) {
      if (token.dataset.assignedTarget === zone.dataset.targetId) {
        releaseToken(token);
        return;
      }
      releaseToken(token);
    }

    const targetInfo = question.dropZoneRefs[zone.dataset.targetId];
    if (!targetInfo) return;

    if (targetInfo.target.dataset.tokenId) {
      const previousToken = question.tokenRefs[targetInfo.target.dataset.tokenId];
      if (previousToken) {
        releaseToken(previousToken);
      }
    }

    targetInfo.target.textContent = token.dataset.value;
    targetInfo.target.dataset.tokenId = token.dataset.tokenId;
    targetInfo.target.classList.add('filled');

    token.classList.add('token--used');
    token.classList.remove('token--active');
    token.dataset.assignedTarget = zone.dataset.targetId;

    state.dragAssignments[zone.dataset.targetId] = token.dataset.value;
    updateSelection();
  };

  question.wordBank.forEach((value, index) => {
    const token = document.createElement('button');
    token.type = 'button';
    token.className = 'token';
    token.textContent = value;
    token.draggable = true;
    token.dataset.value = value;
    token.dataset.tokenId = `${question.sessionId}-token-${index}`;

    token.addEventListener('click', () => {
      if (token.classList.contains('token--used')) {
        releaseToken(token);
        return;
      }
      if (activeToken && activeToken !== token) {
        activeToken.classList.remove('token--active');
      }
      token.classList.toggle('token--active');
      activeToken = token.classList.contains('token--active') ? token : null;
    });

    token.addEventListener('dragstart', (event) => {
      if (token.classList.contains('token--used')) {
        event.preventDefault();
        return;
      }
      token.classList.add('token--active');
      activeToken = token;
      event.dataTransfer.setData('text/plain', token.dataset.tokenId);
      event.dataTransfer.effectAllowed = 'move';
    });

    token.addEventListener('dragend', () => {
      token.classList.remove('token--active');
      activeToken = null;
    });

    question.tokenRefs[token.dataset.tokenId] = token;
    wordBank.appendChild(token);
  });

  question.targets.forEach((target) => {
    const zone = document.createElement('div');
    zone.className = 'drop-zone';
    zone.dataset.targetId = target.id;

    const label = document.createElement('span');
    label.className = 'drop-zone__label';
    label.textContent = target.label;

    const holder = document.createElement('span');
    holder.className = 'drop-zone__target';
    holder.textContent = 'Drop answer here';

    holder.addEventListener('click', () => {
      const assignedTokenId = holder.dataset.tokenId;
      if (assignedTokenId) {
        const assignedToken = question.tokenRefs[assignedTokenId];
        if (assignedToken) {
          releaseToken(assignedToken);
        }
      }
    });

    zone.append(label, holder);
    dropZones.appendChild(zone);

    zone.addEventListener('dragover', (event) => {
      event.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      zone.classList.remove('drag-over');
      const tokenId = event.dataTransfer.getData('text/plain');
      const token = question.tokenRefs[tokenId];
      if (token) {
        assignTokenToZone(token, zone);
      }
    });

    zone.addEventListener('click', () => {
      if (activeToken) {
        assignTokenToZone(activeToken, zone);
        activeToken = null;
      }
    });

    question.dropZoneRefs[target.id] = {
      zone,
      target: holder,
      expected: target.answer,
    };
  });

  wordBank.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  wordBank.addEventListener('drop', (event) => {
    event.preventDefault();
    const tokenId = event.dataTransfer.getData('text/plain');
    const token = question.tokenRefs[tokenId];
    if (token) {
      releaseToken(token);
    }
  });

  wrapper.append(instructions, wordBank, dropZones);
  questionContent.appendChild(wrapper);
}

function showFeedback() {
  const question = state.questionSet[state.currentIndex];
  const evaluation = evaluateQuestion(question);

  if (evaluation.isCorrect) {
    state.score += 1;
    feedbackTitle.textContent = 'Great job!';
    feedbackIcon.textContent = '🌿';
  } else {
    feedbackTitle.textContent = 'Nice try—keep going!';
    feedbackIcon.textContent = '🦉';
  }

  feedbackMessage.textContent = evaluation.message;
  scoreDisplay.textContent = state.score.toString();

  applyQuestionFeedback(question, evaluation);

  state.responses.push({
    questionId: question.sessionId,
    type: question.type,
    isCorrect: evaluation.isCorrect,
    detail: evaluation.detail || null,
  });

  questionCard.classList.add('hidden');
  feedbackCard.classList.remove('hidden');

  if (state.currentIndex === state.questionSet.length - 1) {
    continueBtn.textContent = 'See Results';
  } else {
    continueBtn.textContent = 'Keep Exploring';
  }
}

function evaluateQuestion(question) {
  if (question.type === 'multiple') {
    const selected = state.currentSelection;
    const isCorrect = selected === question.answer;
    const message = isCorrect
      ? question.explanation
      : `The correct answer is "${question.answer}". ${question.explanation}`;

    return {
      isCorrect,
      message,
      detail: { selected },
    };
  }

  if (question.type === 'fill') {
    const response = (state.currentSelection || '').trim();
    const normalizedResponse = normalizeAnswer(response);
    const acceptable = [
      question.answer,
      ...(question.acceptableAnswers || []),
    ]
      .map(normalizeAnswer)
      .filter(Boolean);

    const isCorrect = acceptable.includes(normalizedResponse);
    const message = isCorrect
      ? question.explanation
      : `The correct word is "${question.answer}". ${question.explanation}`;

    return {
      isCorrect,
      message,
      detail: { response },
    };
  }

  if (question.type === 'drag') {
    const assignments = state.currentSelection || {};
    const results = question.targets.map((target) => {
      const userAnswer = assignments[target.id] || '';
      return {
        targetId: target.id,
        userAnswer,
        expected: target.answer,
        isCorrect: userAnswer === target.answer,
      };
    });

    const isCorrect = results.every((result) => result.isCorrect);
    let message = question.explanation;
    if (!isCorrect) {
      const corrections = results
        .map((result) => `${result.expected}`)
        .join(', ');
      message = `Correct matches: ${corrections}. ${question.explanation}`;
    }

    return {
      isCorrect,
      message,
      detail: { results },
    };
  }

  return { isCorrect: false, message: 'Unknown question type.' };
}

function applyQuestionFeedback(question, evaluation) {
  if (question.type === 'multiple') {
    question.choiceElements.forEach((element) => {
      const choice = element.dataset.choice;
      element.classList.remove('correct', 'incorrect');
      if (choice === question.answer) {
        element.classList.add('correct');
      } else if (
        evaluation.detail?.selected === choice &&
        choice !== question.answer
      ) {
        element.classList.add('incorrect');
      }
    });
  }

  if (question.type === 'fill' && question.inputRef) {
    question.inputRef.classList.add(
      evaluation.isCorrect ? 'correct' : 'incorrect'
    );
  }

  if (question.type === 'drag' && evaluation.detail?.results) {
    evaluation.detail.results.forEach((result) => {
      const dropZone = question.dropZoneRefs[result.targetId];
      if (dropZone) {
        dropZone.zone.classList.remove('correct', 'incorrect');
        dropZone.zone.classList.add(result.isCorrect ? 'correct' : 'incorrect');
        if (!result.isCorrect) {
          dropZone.target.textContent = result.expected;
          dropZone.target.classList.add('filled');
        }
      }
    });
  }
}

function showResults() {
  statusBar.classList.remove('hidden');
  questionCard.classList.add('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.remove('hidden');
  progressBar.style.width = '100%';

  const total = state.questionSet.length;
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

function openGlossary() {
  if (!glossaryPanel || !glossaryBackdrop) return;
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
  if (!glossaryPanel || !glossaryBackdrop) return;
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
  const focusable = glossaryPanel.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
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

function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function deepClone(item) {
  return JSON.parse(JSON.stringify(item));
}

function normalizeAnswer(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
