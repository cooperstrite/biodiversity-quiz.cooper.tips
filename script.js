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
    prompt: 'What defines a biodiversity hotspot?',
    choices: [
      'A relatively small area with many endemic species that faces serious threats',
      'A region with only one habitat type and a stable climate',
      'An ecosystem where food webs are simple and easy to study',
      'An area of farmland with high crop yields and few wild species',
    ],
    answer:
      'A relatively small area with many endemic species that faces serious threats',
    explanation:
      'To be labeled a biodiversity hotspot, a place must host exceptional numbers of unique species and be under significant pressure from habitat loss or other threats.',
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
    prompt: 'Which statement best describes a keystone species?',
    choices: [
      'A species whose influence on ecosystem balance is far greater than its abundance suggests',
      'A species that lives in only one habitat and nowhere else on Earth',
      'A species that migrates long distances every season',
      'A species that can survive in nearly any ecosystem on the planet',
    ],
    answer:
      'A species whose influence on ecosystem balance is far greater than its abundance suggests',
    explanation:
      'Removing a keystone species can trigger cascading changes through food webs because so many other organisms depend on it.',
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
  {
    id: 'mc-19',
    type: 'multiple',
    prompt: 'How does climate change threaten biodiversity?',
    choices: [
      'It shifts temperature and precipitation patterns, stressing species and habitats',
      'It creates more permanent sea ice for polar species to thrive on',
      'It guarantees steady rainfall in every biome each year',
      'It only affects predators, leaving other organisms unchanged',
    ],
    answer:
      'It shifts temperature and precipitation patterns, stressing species and habitats',
    explanation:
      'Climate change alters growing seasons, storm intensity, and habitat conditions, making it harder for species to survive in their historic ranges.',
  },
  {
    id: 'mc-20',
    type: 'multiple',
    prompt: 'Why is Doug Tallamy a key voice in biodiversity conservation?',
    choices: [
      'He popularized planting native species to rebuild food webs in yards and communities',
      'He founded the first international seed bank for crop plants',
      'He discovered the greenhouse effect driving modern climate change',
      'He wrote the Endangered Species Act and all of its amendments',
    ],
    answer:
      'He popularized planting native species to rebuild food webs in yards and communities',
    explanation:
      'Doug Tallamy’s research shows how native plants support insects and birds, inspiring people to turn their landscapes into habitat.',
  },
  {
    id: 'mc-21',
    type: 'multiple',
    prompt: 'What is E.O. Wilson best known for?',
    choices: [
      'Championing the study of biodiversity and proposing the Half-Earth conservation vision',
      'Inventing satellite technology that tracks migrating whales',
      'Developing the first synthetic pesticide to control crop pests',
      'Leading the mission that discovered hydrothermal vents',
    ],
    answer:
      'Championing the study of biodiversity and proposing the Half-Earth conservation vision',
    explanation:
      'Biologist E.O. Wilson helped establish the field of conservation biology and argued for protecting half the planet for nature.',
  },
  {
    id: 'mc-22',
    type: 'multiple',
    prompt: 'Which definition best describes extinction?',
    choices: [
      'The irreversible loss of an entire species from Earth',
      'The temporary migration of a species to a new region',
      'A short-term decline in a population that bounces back quickly',
      'The removal of individuals from a zoo for relocation',
    ],
    answer: 'The irreversible loss of an entire species from Earth',
    explanation:
      'Extinction means every individual of a species is gone, so the species no longer exists anywhere on our planet.',
  },
];

const fillWordChoices = [
  'biodiversity',
  'conservation',
  'ecosystem',
  'photosynthesis',
  'pollination',
  'habitat',
  'adaptation',
  'succession',
  'wetland',
  'native',
  'endemic',
  'keystone',
  'decomposer',
  'decomposition',
  'carbon',
  'canopy',
  'genetic',
  'diversity',
  'producer',
  'consumer',
  'migration',
  'mutualism',
  'symbiosis',
  'soil',
  'climate',
  'food chain',
  'food web',
  'population',
  'community',
  'ecological',
  'succulent',
  'watershed',
  'reforestation',
  'bloom',
  'predator',
  'herbivore',
  'omnivore',
  'fragmentation',
  'extirpation',
  'hotspot',
  'disturbance',
  'restoration',
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
      'A species facing a very high risk of extinction in the near future is labeled ______.',
    answer: 'endangered',
    acceptableAnswers: ['endangered'],
    explanation:
      'Endangered species need rapid conservation action because their populations are dangerously low.',
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
  {
    id: 'fill-15',
    type: 'fill',
    prompt: 'Fill in the blank with the best science word.',
    statement:
      'Sudden ______ such as wildfires, invasive species, or pollution can disrupt ecosystems and food webs.',
    answer: 'disturbances',
    acceptableAnswers: ['disturbance', 'disturbances'],
    explanation:
      'Ecosystem disturbances can shift which species thrive, sometimes leading to long-term biodiversity loss.',
  },
];

const clozeTemplates = [
  {
    id: 'cloze-1',
    type: 'cloze',
    prompt: 'Use the word bank to name the three pillars of biodiversity.',
    statementParts: [
      'The three pillars of biodiversity are ',
      { blankId: 'pillar-genetic', placeholder: 'Pillar 1' },
      ', ',
      { blankId: 'pillar-species', placeholder: 'Pillar 2' },
      ', and ',
      { blankId: 'pillar-ecosystem', placeholder: 'Pillar 3' },
      '.',
    ],
    answers: [
      {
        id: 'pillar-genetic',
        answer: 'Genetic diversity',
        acceptable: ['genetic diversity'],
      },
      {
        id: 'pillar-species',
        answer: 'Species diversity',
        acceptable: ['species diversity'],
      },
      {
        id: 'pillar-ecosystem',
        answer: 'Ecosystem diversity',
        acceptable: ['ecosystem diversity'],
      },
    ],
    explanation:
      'Biodiversity is often described through genetic diversity, species diversity, and ecosystem diversity working together.',
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
  {
    id: 'drag-7',
    type: 'drag',
    prompt: 'Match each term to the correct description of habitat change.',
    targets: [
      {
        id: 'habitat-loss',
        label: 'Habitat loss',
        answer: 'An entire habitat is converted to another use so native species are displaced',
      },
      {
        id: 'habitat-fragmentation',
        label: 'Habitat fragmentation',
        answer: 'A once-large habitat is split into isolated, smaller patches',
      },
      {
        id: 'habitat-destruction',
        label: 'Habitat destruction',
        answer: 'Habitat remains but is so damaged it no longer supports native species',
      },
    ],
    wordBank: [
      'An entire habitat is converted to another use so native species are displaced',
      'A once-large habitat is split into isolated, smaller patches',
      'Habitat remains but is so damaged it no longer supports native species',
    ],
    explanation:
      'Loss, fragmentation, and destruction each harm biodiversity in different ways, from removing habitat to breaking it into unusable pieces.',
  },
  {
    id: 'drag-8',
    type: 'drag',
    prompt: 'Match each scale of ecosystem diversity with its description.',
    targets: [
      {
        id: 'alpha-diversity',
        label: 'Local (alpha) diversity',
        answer: 'Variety of species within a single habitat or site',
      },
      {
        id: 'beta-diversity',
        label: 'Landscape (beta) diversity',
        answer: 'Differences in species between nearby habitats',
      },
      {
        id: 'gamma-diversity',
        label: 'Regional (gamma) diversity',
        answer: 'Total diversity across a broad region or biome',
      },
    ],
    wordBank: [
      'Variety of species within a single habitat or site',
      'Differences in species between nearby habitats',
      'Total diversity across a broad region or biome',
    ],
    explanation:
      'Ecosystem diversity can be considered at local, landscape, and regional scales to capture how life varies across space.',
  },
  {
    id: 'drag-9',
    type: 'drag',
    prompt: 'Match each endemic species to the place it naturally lives.',
    targets: [
      {
        id: 'honeycreeper',
        label: 'ʻIʻiwi honeycreeper',
        answer: 'Native only to the Hawaiian Islands',
      },
      {
        id: 'tortoise',
        label: 'Galápagos giant tortoise',
        answer: 'Found only in the Galápagos Islands',
      },
      {
        id: 'lemur',
        label: 'Ring-tailed lemur',
        answer: 'Lives naturally only on Madagascar',
      },
    ],
    wordBank: [
      'Native only to the Hawaiian Islands',
      'Found only in the Galápagos Islands',
      'Lives naturally only on Madagascar',
    ],
    explanation:
      'Endemic species have evolved in one location, so protecting their home habitats is essential for their survival.',
  },
  {
    id: 'drag-10',
    type: 'drag',
    prompt: 'Match each term to its definition.',
    targets: [
      {
        id: 'extirpation',
        label: 'Extirpation',
        answer: 'A species disappears from a local area but survives elsewhere',
      },
      {
        id: 'extinction-term',
        label: 'Extinction',
        answer: 'A species disappears from Earth entirely',
      },
      {
        id: 'recolonization',
        label: 'Recolonization',
        answer: 'A species returns to an area after being absent',
      },
    ],
    wordBank: [
      'A species disappears from a local area but survives elsewhere',
      'A species disappears from Earth entirely',
      'A species returns to an area after being absent',
    ],
    explanation:
      'Knowing the difference between extirpation, extinction, and recolonization helps scientists track conservation progress.',
  },
];

const questionTemplates = [
  ...multipleChoiceTemplates,
  ...fillInTemplates,
  ...clozeTemplates,
  ...dragAndDropTemplates,
];

const glossaryTerms = [
  {
    term: 'Biodiversity',
    definition:
      'The variety of life in the world or in a specific habitat or ecosystem, including the diversity of species, genes, and ecosystems.',
    examples: [
      'Rainforests have high biodiversity because thousands of plant and animal species share the same habitat.',
      'Coral reefs rely on biodiversity to stay resilient after storms and disease.',
    ],
  },
  {
    term: 'Ecosystem',
    definition:
      'A community of living organisms interacting with each other and with the nonliving parts of their environment.',
    examples: [
      'A tide pool ecosystem includes crabs, algae, sunlight, and waves.',
      'Prairie dogs, grasses, soil, and air all work together within a grassland ecosystem.',
    ],
  },
  {
    term: 'Biodiversity hotspot',
    definition:
      'A region that has an exceptional concentration of unique species but is threatened with destruction.',
    examples: [
      'Madagascar is a biodiversity hotspot because many of its species live nowhere else on Earth.',
      'California’s Floristic Province is a hotspot facing pressure from drought and development.',
    ],
  },
  {
    term: 'Endangered species',
    definition:
      'A species that is seriously at risk of extinction without protection and recovery efforts.',
    examples: [
      'The red panda is endangered because deforestation is shrinking its habitat.',
      'Sea turtles remain endangered when nesting beaches are disturbed.',
    ],
  },
  {
    term: 'Pollinator',
    definition:
      'An animal that moves pollen between flowers, enabling plants to produce seeds and fruit.',
    examples: [
      'Bees pollinate apple blossoms so orchards can produce fruit.',
      'Hummingbirds act as pollinators when they visit tubular flowers.',
    ],
  },
  {
    term: 'Invasive species',
    definition:
      'A non-native organism that spreads quickly and causes harm to the environment, economy, or human health.',
    examples: [
      'Zebra mussels are invasive in the Great Lakes and clog water intake pipes.',
      'Kudzu vines crowd out native plants in the southeastern United States.',
    ],
  },
  {
    term: 'Food web',
    definition:
      'A diagram that shows how multiple food chains overlap and how energy moves through an ecosystem.',
    examples: [
      'In a pond food web, algae feed insects that are eaten by frogs and herons.',
      'Removing top predators can upset the balance of an entire food web.',
    ],
  },
  {
    term: 'Keystone species',
    definition:
      'A species whose impact on an ecosystem is much greater than its abundance, helping hold the community together.',
    examples: [
      'Sea otters are keystone species because they control sea urchins and protect kelp forests.',
      'Beavers act as keystone species by building dams that create wetlands.',
    ],
  },
  {
    term: 'Native species',
    definition:
      'A species that occurs naturally in a region or ecosystem without human introduction.',
    examples: [
      'Monarch butterfly caterpillars rely on native milkweed plants for food.',
      'Saguaro cacti are native to the Sonoran Desert.',
    ],
  },
  {
    term: 'Conservation',
    definition:
      'The protection and careful management of natural resources and biodiversity.',
    examples: [
      'Conservation programs protect nesting sites for endangered birds.',
      'Setting aside marine reserves is a conservation strategy for coral reefs.',
    ],
  },
  {
    term: 'Genetic diversity',
    definition:
      'The range of different inherited traits within a species, which helps populations adapt to change.',
    examples: [
      'Farmers plant several corn varieties to keep genetic diversity in their crops.',
      'Genetic diversity helps species survive disease outbreaks.',
    ],
  },
  {
    term: 'Ecosystem services',
    definition:
      'Benefits people obtain from ecosystems, such as clean water, food, and recreation.',
    examples: [
      'Wetlands provide ecosystem services by filtering pollutants from water.',
      'Urban trees offer ecosystem services like cooling shade and cleaner air.',
    ],
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
const resultsTime = document.getElementById('results-time');
const resultsFacts = document.getElementById('results-facts');
const retakeBtn = document.getElementById('retake-btn');
const scoreDisplay = document.getElementById('score-display');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const glossaryBtn = document.getElementById('open-glossary');
const glossaryPanel = document.getElementById('glossary-panel');
const glossaryList = document.getElementById('glossary-list');
const glossaryDetails = document.getElementById('glossary-details');
const closeGlossaryBtn = document.getElementById('close-glossary');
const glossaryBackdrop = document.getElementById('glossary-backdrop');
const themeToggleBtn = document.getElementById('theme-toggle');

const state = {
  questionSet: [],
  currentIndex: 0,
  score: 0,
  responses: [],
  currentSelection: null,
  dragAssignments: {},
  clozeAssignments: {},
  startTime: null,
  endTime: null,
  elapsedMs: 0,
};

let previouslyFocusedElement = null;
let activeGlossaryButton = null;

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

initializeTheme();

function startQuiz() {
  const questionTarget = Number(questionCountSelect?.value) || 10;
  state.questionSet = buildQuestionSet(questionTarget);
  state.currentIndex = 0;
  state.score = 0;
  state.responses = [];
  state.currentSelection = null;
  state.dragAssignments = {};
  state.clozeAssignments = {};
  state.startTime = Date.now();
  state.endTime = null;
  state.elapsedMs = 0;

  scoreDisplay.textContent = '0';
  progressBar.style.width = '0%';
  questionCounter.textContent = `Question 1 of ${state.questionSet.length}`;
  nextBtn.disabled = true;
  nextBtn.textContent = 'Check Answer';

  statusBar.classList.remove('hidden');
  questionCard.classList.remove('hidden');
  feedbackCard.classList.add('hidden');
  resultsCard.classList.add('hidden');
  if (resultsTime) {
    resultsTime.textContent = '';
  }

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

  if (question.type === 'fill') {
    question.wordBank = buildFillWordBank(question);
  }

  if (question.type === 'cloze') {
    question.wordBank = buildClozeWordBank(question);
    question.blankRefs = {};
    question.tokenRefs = {};
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
  state.clozeAssignments = {};
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
  } else if (question.type === 'cloze') {
    renderCloze(question);
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

  const bankHint = document.createElement('p');
  bankHint.className = 'fill-response__hint';
  bankHint.textContent = 'Word bank (10 words):';

  const bank = document.createElement('div');
  bank.className = 'word-bank word-bank--fill';

  (question.wordBank || []).forEach((word) => {
    const chip = document.createElement('span');
    chip.className = 'token token--static';
    chip.textContent = word;
    bank.appendChild(chip);
  });

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
  container.append(statement, bankHint, bank, input);
  questionContent.appendChild(container);

  setTimeout(() => input.focus(), 150);
}

function renderCloze(question) {
  const container = document.createElement('div');
  container.className = 'cloze';

  question.blankRefs = {};
  question.tokenRefs = {};

  const statement = document.createElement('p');
  statement.className = 'cloze__statement';

  const sentenceFragment = document.createDocumentFragment();

  question.statementParts.forEach((part) => {
    if (typeof part === 'string') {
      sentenceFragment.append(part);
    } else if (part && typeof part === 'object' && part.blankId) {
      const blank = document.createElement('button');
      blank.type = 'button';
      blank.className = 'cloze__blank';
      blank.dataset.blankId = part.blankId;
      blank.dataset.placeholder = part.placeholder || 'Select word';
      blank.textContent = part.placeholder || 'Select word';
      question.blankRefs[part.blankId] = blank;
      sentenceFragment.appendChild(blank);
    }
  });

  statement.appendChild(sentenceFragment);

  const bankHint = document.createElement('p');
  bankHint.className = 'fill-response__hint';
  bankHint.textContent = 'Word bank (click a word, then click a blank to place it)';

  const bank = document.createElement('div');
  bank.className = 'word-bank word-bank--fill';

  let activeToken = null;

  const updateSelection = () => {
    const filledIds = Object.keys(state.clozeAssignments);
    const filled = question.answers.every((blank) => filledIds.includes(blank.id));
    if (filled) {
      state.currentSelection = { ...state.clozeAssignments };
      nextBtn.disabled = false;
    } else {
      state.currentSelection = null;
      nextBtn.disabled = true;
    }
  };

  const releaseToken = (token) => {
    const assignedBlankId = token.dataset.assignedBlank;
    if (assignedBlankId) {
      const blank = question.blankRefs[assignedBlankId];
      if (blank) {
        blank.textContent = blank.dataset.placeholder || 'Select word';
        blank.classList.remove('filled', 'correct', 'incorrect');
        delete blank.dataset.tokenId;
      }
      delete state.clozeAssignments[assignedBlankId];
    }
    token.classList.remove('token--used', 'token--active');
    delete token.dataset.assignedBlank;
    activeToken = null;
    updateSelection();
  };

  const assignTokenToBlank = (token, blank) => {
    if (token.dataset.assignedBlank === blank.dataset.blankId) {
      releaseToken(token);
      return;
    }

    if (token.dataset.assignedBlank) {
      releaseToken(token);
    }

    if (blank.dataset.tokenId) {
      const previousToken = question.tokenRefs[blank.dataset.tokenId];
      if (previousToken) {
        releaseToken(previousToken);
      }
    }

    blank.textContent = token.dataset.value;
    blank.classList.add('filled');
    blank.dataset.tokenId = token.dataset.tokenId;

    token.classList.add('token--used');
    token.classList.remove('token--active');
    token.dataset.assignedBlank = blank.dataset.blankId;

    state.clozeAssignments[blank.dataset.blankId] = token.dataset.value;
    activeToken = null;
    updateSelection();
  };

  Object.entries(question.blankRefs).forEach(([blankId, blank]) => {
    blank.addEventListener('click', () => {
      if (activeToken) {
        assignTokenToBlank(activeToken, blank);
      } else if (blank.dataset.tokenId) {
        const existingToken = question.tokenRefs[blank.dataset.tokenId];
        if (existingToken) {
          releaseToken(existingToken);
        }
      }
    });
  });

  question.wordBank.forEach((value, index) => {
    const token = document.createElement('button');
    token.type = 'button';
    token.className = 'token token--choice';
    token.textContent = value;
    token.dataset.value = value;
    token.dataset.tokenId = `${question.sessionId}-choice-${index}`;

    token.addEventListener('click', () => {
      if (token.dataset.assignedBlank) {
        releaseToken(token);
        return;
      }

      if (activeToken && activeToken !== token) {
        activeToken.classList.remove('token--active');
      }

      if (token.classList.contains('token--active')) {
        token.classList.remove('token--active');
        activeToken = null;
      } else {
        token.classList.add('token--active');
        activeToken = token;
      }
    });

    question.tokenRefs[token.dataset.tokenId] = token;
    bank.appendChild(token);
  });

  container.append(statement, bankHint, bank);
  questionContent.appendChild(container);

  updateSelection();
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

  if (question.type === 'cloze') {
    const results = question.answers.map((blank) => {
      const response = state.clozeAssignments[blank.id] || '';
      const normalized = normalizeAnswer(response);
      const acceptable = [blank.answer, ...(blank.acceptable || [])]
        .map(normalizeAnswer)
        .filter(Boolean);
      const isBlankCorrect = acceptable.includes(normalized);
      return {
        blankId: blank.id,
        response,
        expected: blank.answer,
        isCorrect: isBlankCorrect,
      };
    });

    const isCorrect = results.every((result) => result.isCorrect);
    const correctSequence = question.answers
      .map((blank) => blank.answer)
      .join(', ');
    const message = isCorrect
      ? question.explanation
      : `Correct order: ${correctSequence}. ${question.explanation}`;

    return {
      isCorrect,
      message,
      detail: { results },
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

  if (question.type === 'cloze' && evaluation.detail?.results) {
    evaluation.detail.results.forEach((result) => {
      const blank = question.blankRefs?.[result.blankId];
      if (blank) {
        blank.classList.remove('correct', 'incorrect');
        blank.classList.add(result.isCorrect ? 'correct' : 'incorrect');
        blank.classList.add('filled');
        if (!result.isCorrect) {
          blank.textContent = result.expected;
        }
      }
    });
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
  if (!state.endTime) {
    state.endTime = Date.now();
  }
  if (state.startTime) {
    state.elapsedMs = Math.max(0, state.endTime - state.startTime);
  } else {
    state.elapsedMs = 0;
  }
  if (resultsTime) {
    const formattedDuration = formatDuration(state.elapsedMs);
    resultsTime.textContent = `You completed the quiz in ${formattedDuration}.`;
  }

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

function formatDuration(durationMs) {
  if (!durationMs || durationMs <= 0) {
    return '0 seconds';
  }

  const totalSeconds = Math.floor(durationMs / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const parts = [];
  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  }
  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
  }
  if (seconds > 0 || parts.length === 0) {
    parts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
  }

  return parts.join(' ');
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

  let firstButton = null;

  glossaryTerms.forEach((entry, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'glossary-term-btn';
    button.textContent = entry.term;
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('role', 'listitem');
    button.addEventListener('click', () => selectGlossaryTerm(entry, button));
    glossaryList.appendChild(button);

    if (index === 0) {
      firstButton = button;
    }
  });

  if (firstButton) {
    selectGlossaryTerm(glossaryTerms[0], firstButton);
  } else {
    renderGlossaryDetails();
  }
}

function selectGlossaryTerm(entry, button) {
  if (!button || !glossaryDetails) return;

  if (activeGlossaryButton && activeGlossaryButton !== button) {
    activeGlossaryButton.classList.remove('glossary-term-btn--active');
    activeGlossaryButton.setAttribute('aria-pressed', 'false');
  }

  activeGlossaryButton = button;
  button.classList.add('glossary-term-btn--active');
  button.setAttribute('aria-pressed', 'true');
  renderGlossaryDetails(entry);
}

function renderGlossaryDetails(entry) {
  if (!glossaryDetails) return;

  if (!entry) {
    glossaryDetails.innerHTML = '';
    const prompt = document.createElement('p');
    prompt.className = 'glossary__definition';
    prompt.textContent =
      'Choose a word button to see its definition and examples.';
    glossaryDetails.appendChild(prompt);
    return;
  }

  glossaryDetails.innerHTML = '';

  const title = document.createElement('h4');
  title.textContent = entry.term;

  const definition = document.createElement('p');
  definition.className = 'glossary__definition';
  definition.textContent = entry.definition;

  glossaryDetails.append(title, definition);

  if (entry.examples && entry.examples.length > 0) {
    const label = document.createElement('strong');
    label.textContent = 'Examples';

    const list = document.createElement('ul');
    list.className = 'glossary__examples';

    entry.examples.forEach((example) => {
      const item = document.createElement('li');
      item.className = 'glossary__example';
      item.textContent = example;
      list.appendChild(item);
    });

    glossaryDetails.append(label, list);
  }
}

function initializeTheme() {
  applyTheme('light');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme =
        document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
  if (!themeToggleBtn) return;
  const isDark = theme === 'dark';
  themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  themeToggleBtn.setAttribute('aria-pressed', String(isDark));
  themeToggleBtn.dataset.currentTheme = theme;
  themeToggleBtn.setAttribute(
    'title',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

function buildFillWordBank(question) {
  const normalizedAnswer = normalizeAnswer(question.answer);
  const bank = new Map();
  bank.set(normalizedAnswer, question.answer);

  shuffleArray(fillWordChoices).forEach((word) => {
    if (bank.size >= 10) return;
    const normalizedWord = normalizeAnswer(word);
    if (!normalizedWord || bank.has(normalizedWord)) return;
    bank.set(normalizedWord, word);
  });

  while (bank.size < 10) {
    const filler = `eco-${Math.floor(Math.random() * 900 + 100)}`;
    const normalizedFiller = normalizeAnswer(filler);
    if (!bank.has(normalizedFiller)) {
      bank.set(normalizedFiller, filler);
    }
  }

  return shuffleArray(Array.from(bank.values()).slice(0, 10));
}

function buildClozeWordBank(question) {
  const bank = new Map();

  (question.answers || []).forEach((blank) => {
    const acceptable = [blank.answer, ...(blank.acceptable || [])];
    acceptable.forEach((entry) => {
      const normalized = normalizeAnswer(entry);
      if (normalized && !bank.has(normalized)) {
        bank.set(normalized, blank.answer);
      }
    });
  });

  shuffleArray(fillWordChoices).forEach((word) => {
    if (bank.size >= 10) return;
    const normalizedWord = normalizeAnswer(word);
    if (!normalizedWord || bank.has(normalizedWord)) return;
    bank.set(normalizedWord, word);
  });

  while (bank.size < 10) {
    const filler = `eco-${Math.floor(Math.random() * 900 + 100)}`;
    const normalizedFiller = normalizeAnswer(filler);
    if (!bank.has(normalizedFiller)) {
      bank.set(normalizedFiller, filler);
    }
  }

  return shuffleArray(Array.from(bank.values()).slice(0, 10));
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
