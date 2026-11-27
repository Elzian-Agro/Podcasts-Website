window.SITE = {

  CATS: {
    environment: { name: 'Environment', icon: 'i-leaf', tag: 'Living systems', desc: 'Everyday habits and local ecosystems: waste, wildlife, gardens and the choices households make. Guests compare how their generation learned to look after the places around them.', tags: ['Waste and reuse', 'Wildlife', 'School and community gardens'] },
    land: { name: 'Land', icon: 'i-mountain', tag: 'Ground and ownership', desc: 'Who uses land, who owns it and what it can recover from. Soil, city lots, forests and the long memory of a place.', tags: ['Soil health', 'Urban land', 'Rewilding'] },
    climate: { name: 'Climate', icon: 'i-thermo', tag: 'Weather and warming', desc: 'How the weather is changing and how it feels to live through it. Records, forecasts, worry and practical hope across age groups.', tags: ['Weather records', 'Climate worry', 'Adaptation'] },
    ocean: { name: 'Ocean', icon: 'i-wave', tag: 'Coasts and seas', desc: 'Reefs, fisheries and coastlines as remembered by people who worked them and measured by people who study them now.', tags: ['Reefs', 'Fisheries', 'Coastal communities'] },
    agriculture: { name: 'Agriculture', icon: 'i-wheat', tag: 'Fields, water and food', desc: 'Farming across generations: handing over the farm, adopting new tools and deciding what is worth keeping. Land, water and food in one place.', tags: ['Farm succession', 'Precision tools', 'Food systems'] },
    energy: { name: 'Energy', icon: 'i-bolt', tag: 'Power and fuel', desc: 'Where power comes from and where it is heading. Stoves, grids, batteries and rooftops, explained by people who each grew up with a different electricity bill.', tags: ['Solar power', 'Batteries', 'Power grids'] }
  },

  CAT_ORDER: ['environment', 'land', 'climate', 'ocean', 'agriculture', 'energy'],

  GENS: [
    { id: 'boomers', name: 'Boomers', short: 'Boomers', aka: 'Boomers', from: 1946, to: 1964, born: '1946 to 1964', ages: '62 to 80', desc: 'Born during the post-World War II baby boom. Experienced major social changes, economic expansion, and the rise of television culture.', shaped: ['Post-war economic expansion', 'The rise of television', 'Mass social movements'] },
    { id: 'genx', name: 'Generation X', short: 'Gen X', aka: 'Gen X', from: 1965, to: 1980, born: '1965 to 1980', ages: '46 to 61', desc: 'A smaller generation raised between the broadcast era and the internet. Many remember a childhood without personal computers and a working life that ran through the arrival of email and mobile phones.', shaped: ['Personal computers arriving at home', 'Cable and music television', 'Economic shocks in early careers'] },
    { id: 'millennials', name: 'Millennials', short: 'Millennials', aka: 'Generation Y', from: 1981, to: 1996, born: '1981 to 1996', ages: '30 to 45', desc: 'The first generation to grow up alongside the public internet. Many entered the job market during the 2008 financial crisis and now balance careers, housing costs and young families.', shaped: ['The public internet', 'The 2008 financial crisis', 'Smartphones in early adulthood'] },
    { id: 'genz', name: 'Generation Z', short: 'Gen Z', aka: 'Gen Z or Zoomers', from: 1997, to: 2012, born: '1997 to 2012', ages: '14 to 29', desc: 'Digital natives who have never known a world without smartphones and social media. They came of age with climate protest, remote school and online communities.', shaped: ['Smartphones and social media', 'Climate strikes', 'Remote learning'] },
    { id: 'alpha', name: 'Generation Alpha', short: 'Gen Alpha', aka: 'Gen Alpha', from: 2013, to: 2024, born: '2013 to 2024, some sources start in 2010', ages: '2 to 16', desc: 'The first generation born entirely in the 21st century. They are growing up with tablets, voice assistants and AI tools, and the oldest are only now starting secondary school.', shaped: ['Tablets and streaming video', 'Voice assistants', 'AI tools in everyday life'] }
  ],

  PLATFORMS: [
    { n: 'Podbean', u: 'https://www.podbean.com' },
  ],

  /* Episodes, newest first */
  EP: [
    { n: 3, cat: 'environment', gens: ['genz', 'boomers'], title: 'Rooted in Indigenous Wisdom: Restoring Our Land, Reconnecting with Nature, and Cultivating Equality', date: '29 November 2026', dur: 1380,
      audio: 'audio/episode-03.mp3',
      platforms: {
        podbean: 'https://interpodcasts.podbean.com/e/rooted-in-indigenous-wisdom-restoring-our-land-reconnecting-with-nature-and-cultivating-equality/',
      },
      img: 'img/Lewis x Lilan.png',
      guests: [{ n: 'Lilan Dayananda', g: 'genz', r: 'CEO of Elzian Agro', t: 'Host', p: 'img/Lilan.png' }, { n: 'Lewis Cardinalk', g: 'boomers', r: 'Prominent Woodland Cree Communicator', t: 'Guest Speaker', p: 'img/Lewis.png' }],
      description: 'What can Indigenous wisdom teach us about restoring our relationship with the land and building a more sustainable and equitable future?\n\n In this episode of Intergenerational Podcasts, host <a href="https://lilan.elzian.com/" target="_blank" rel="noopener">Lilan Dayananda</a> welcomes Lewis Cardinal, a prominent Woodland Cree communicator and Indigenous leader, for an inspiring conversation about Indigenous approaches to agriculture, land restoration, biodiversity, and social equality.\n\nDiscover the wisdom behind the Three Sisters method, a traditional companion-planting practice that demonstrates the power of agricultural diversity and ecological cooperation. The discussion explores how Indigenous knowledge and practices can help address land degradation and biodiversity loss resulting from industrialisation and human activities.\n\nThe conversation also highlights women\'s contributions to agriculture and land stewardship, digital inclusion, Indigenous astronomy, and the importance of reconnecting modern society with nature-based sustainable practices.\n\nJoin us to discover how traditional knowledge, cultural wisdom, and intergenerational collaboration can help restore ecological balance and create a more inclusive and sustainable future.',
      summary: 'Discover how Indigenous wisdom can restore land, protect biodiversity, and inspire sustainable agriculture through traditional knowledge and intergenerational collaboration.',
      about: "In this episode, Lilan Dayananda sits down with Lewis Cardinal, a prominent Woodland Cree communicator and Indigenous leader, to explore the importance of Indigenous knowledge in shaping a sustainable future. From the Three Sisters agricultural method to land restoration, biodiversity conservation, and women’s contributions to agriculture, the conversation highlights how traditional wisdom can guide modern sustainability efforts. Discover the connections between Indigenous astronomy, digital inclusion, cultural preservation, and nature-based solutions, while exploring how different generations can work together to build a more equitable relationship with the land and our environment.",
      take: ['Learning from the Three Sisters method', ' Indigenous wisdom for land restoration', 'Women\'s role in agriculture and equality', 'Indigenous astronomy and connections with nature', 'Digital inclusion and preserving Indigenous knowledge', 'Transitioning towards nature-based sustainability'],
      chapters: [
          { t: '00:47', title: 'The Three Sisters Method: Indigenous Knowledge and Sustainable Agriculture' },
          { t: '08:48', title: 'Indigenous Food Rights, Land Degradation and Reconciliation' },
          { t: '14:22', title: 'The Role of Indigenous Women in Agriculture, Land Stewardship and Decision-Making' },
          { t: '19:05', title: 'A Message to Youth: Reconnecting with Nature and Embracing Nature-Based Solutions' }
      ],
      tags: ['#indigenous', '#land_restoration', '#agriculture', '#nature'],
    },
    { n: 3, cat: 'land', gens: ['genz', 'boomers'], title: 'Rooted in Indigenous Wisdom: Restoring Our Land, Reconnecting with Nature, and Cultivating Equality', date: '29 November 2026', dur: 1380,
      audio: 'audio/episode-03.mp3',
      platforms: {
        podbean: 'https://interpodcasts.podbean.com/e/rooted-in-indigenous-wisdom-restoring-our-land-reconnecting-with-nature-and-cultivating-equality/',
      },
      img: 'img/Lewis x Lilan.png',
      guests: [{ n: 'Lilan Dayananda', g: 'genz', r: 'CEO of Elzian Agro', t: 'Host', p: 'img/Lilan.png' }, { n: 'Lewis Cardinalk', g: 'boomers', r: 'Prominent Woodland Cree Communicator', t: 'Guest Speaker', p: 'img/Lewis.png' }],
      description: 'What can Indigenous wisdom teach us about restoring our relationship with the land and building a more sustainable and equitable future?\n\n In this episode of Intergenerational Podcasts, host <a href="https://lilan.elzian.com/" target="_blank" rel="noopener">Lilan Dayananda</a> welcomes Lewis Cardinal, a prominent Woodland Cree communicator and Indigenous leader, for an inspiring conversation about Indigenous approaches to agriculture, land restoration, biodiversity, and social equality.\n\nDiscover the wisdom behind the Three Sisters method, a traditional companion-planting practice that demonstrates the power of agricultural diversity and ecological cooperation. The discussion explores how Indigenous knowledge and practices can help address land degradation and biodiversity loss resulting from industrialisation and human activities.\n\nThe conversation also highlights women\'s contributions to agriculture and land stewardship, digital inclusion, Indigenous astronomy, and the importance of reconnecting modern society with nature-based sustainable practices.\n\nJoin us to discover how traditional knowledge, cultural wisdom, and intergenerational collaboration can help restore ecological balance and create a more inclusive and sustainable future.',
      summary: 'Discover how Indigenous wisdom can restore land, protect biodiversity, and inspire sustainable agriculture through traditional knowledge and intergenerational collaboration.',
      about: "In this episode, Lilan Dayananda sits down with Lewis Cardinal, a prominent Woodland Cree communicator and Indigenous leader, to explore the importance of Indigenous knowledge in shaping a sustainable future. From the Three Sisters agricultural method to land restoration, biodiversity conservation, and women’s contributions to agriculture, the conversation highlights how traditional wisdom can guide modern sustainability efforts. Discover the connections between Indigenous astronomy, digital inclusion, cultural preservation, and nature-based solutions, while exploring how different generations can work together to build a more equitable relationship with the land and our environment.",
      take: ['Learning from the Three Sisters method', ' Indigenous wisdom for land restoration', 'Women\'s role in agriculture and equality', 'Indigenous astronomy and connections with nature', 'Digital inclusion and preserving Indigenous knowledge', 'Transitioning towards nature-based sustainability'],
      chapters: [
          { t: '00:47', title: 'The Three Sisters Method: Indigenous Knowledge and Sustainable Agriculture' },
          { t: '08:48', title: 'Indigenous Food Rights, Land Degradation and Reconciliation' },
          { t: '14:22', title: 'The Role of Indigenous Women in Agriculture, Land Stewardship and Decision-Making' },
          { t: '19:05', title: 'A Message to Youth: Reconnecting with Nature and Embracing Nature-Based Solutions' }
      ],
      tags: ['#indigenous', '#land_restoration', '#agriculture', '#nature'],
    },
    { n: 2, cat: 'agriculture', gens: ['genz', 'millennials'], title: 'Beyond Fear: Cultivating Courage for a Sustainable Agricultural Future', date: '26 November 2026', dur: 2220,
      audio: 'audio/episode-02.mp3',
      platforms: {
        podbean: 'https://interpodcasts.podbean.com/e/beyond-fear-cultivating-courage-for-a-sustainable-agricultural-future/',
      },
      img: 'img/Arpan x Lilan.png',
      guests: [{ n: 'Lilan Dayananda', g: 'genz', r: 'CEO of Elzian Agro', t: 'Host', p: 'img/Lilan.png' }, { n: 'Dr. Arpan Yagnik', g: 'millennials', r: 'Professor of Advertising Penn State University', t: 'Guest Speaker', p: 'img/Arpan.png' }],
      description: 'What if one of the biggest barriers to sustainable agriculture isn\'t a lack of technology, resources, or knowledge, but fear itself?\n\n In this thought-provoking episode of Intergenerational Podcasts, host <a href="https://lilan.elzian.com/" target="_blank" rel="noopener">Lilan Dayananda</a> welcomes <a href="https://behrend.psu.edu/person/arpan-yagnik-phd" target="_blank" rel="noopener">Dr. Arpan Yagnik</a>, internationally recognised expert in Fear Management, Creativity, and Creative Leadership, for an insightful conversation on the psychological dimensions of sustainable agricultural transformation.\n\nAs farmers and agricultural communities navigate climate uncertainty, changing technologies, financial risks, and evolving farming practices, fear of failure and resistance to change can become significant obstacles to progress.\n\nDrawing on his expertise in fear management and human behaviour, Dr. Yagnik explores how individuals and communities can recognise and overcome these barriers, embrace innovation, and develop the confidence to make more sustainable choices.\n\nTogether, we explore how courage, creativity, leadership, and intergenerational collaboration can help shape a more resilient agricultural future.\n\nBecause sustainable agriculture requires more than changing how we farm; it requires changing how we think, feel, and respond to change.\n\nJoin us for an inspiring conversation about transforming fear into courage and cultivating a future where both people and the planet can flourish.',
      summary: 'Lilan Dayananda and Dr. Arpan Yagnik explore overcoming fear and embracing change for sustainable agriculture.',
      about: "Explore how courage, creativity, and leadership can help overcome fear and drive sustainable agricultural transformation. In this episode, Lilan Dayananda and Dr. Arpan Yagnik discuss the psychological barriers to change, the importance of embracing innovation, and how intergenerational collaboration can create a more resilient and sustainable agricultural future.",
      take: ['Overcoming fear and resistance to agricultural change.', 'Building confidence through creativity and innovation.', 'Empowering sustainable change through leadership.', 'Strengthening agriculture through intergenerational collaboration.'],
      chapters: [
          { t: '00:45', title: 'Understanding Climate Anxiety and the Role of Fear in Agriculture' },
          { t: '02:50', title: 'Overcoming Farmers’ Fear of Change and Adopting New Technologies' },
          { t: '08:40', title: 'Precision Agriculture, Land Degradation and the Challenges of Technological Adoption' },
          { t: '12:52', title: 'Intergenerational Knowledge Gaps and Encouraging Youth Participation in Agriculture' },
          { t: '15:50', title: 'Food Safety, Chemical Agriculture and the Hidden Fears Behind Farming Decisions' },
          { t: '20:48', title: 'Overcoming the Fear of Starting Agriculture Without Prior Experience' },
          { t: '24:00', title: 'Climate Change, Livestock Farming and the Challenges of Attracting Young Farmers' },
          { t: '26:06', title: 'Farmers’ Financial Insecurity, Climate Risks and Mental Health Challenges' },
          { t: '27:50', title: 'Balancing Farmers’ Freedom, Government Regulations and Agricultural Innovation' },
          { t: '34:33', title: 'A Success Story: Overcoming Fear and Finding New Opportunities in Agriculture' }
      ],
      tags: ['#agriculture', '#climate', '#SDGs', '#fear_management'],
    },
    { n: 1, cat: 'environment', gens: ['genz', 'boomers'], title: 'Analog Forestry for Regenerative Agriculture', date: '29 May 2026', dur: 2100,
      audio: 'audio/episode-01.mp3',
      platforms: {
        podbean: 'https://interpodcasts.podbean.com/e/analog-forestry-for-regenerative-agriculture/',
      },
      img: 'img/Ranil x Lilan.png',
      guests: [{ n: 'Lilan Dayananda', g: 'genz', r: 'CEO of Elzian Agro', t: 'Host', p: 'img/Lilan.png' }, { n: 'Dr. Ranil Senanayake', g: 'boomers', r: 'The Farther of Analog Forestry', t: 'Guest Speaker', p: 'img/Ranil.png' }],
      description: 'Tune into this captivating episode where we delve into the crucial role of Analog Forestry in paving the way for regenerative and precision agriculture. Get ready for a treasure trove of insights into the future of precision agriculture and a seamless transition into the world of organic farming. Tune in now for a riveting exploration of sustainable farming practices that are shaping the future of agriculture.',
      summary: 'Dr. Ranil promotes analog forestry for sustainable agriculture, forest conservation, and rural economic development through digital innovation.',
      about: "Dr. Ranil explains how Analog forestry can positively impact on organic & regenerative agriculture. Dr. Ranil’s original 17-acre model analog forest in Sri Lanka (now over 40 years, established) actively demonstrates that the restoration and protection of rainforests and natural resources is compatible with the economic wellbeing of rural communities. With his 60+ years of experience in the field of Forestry and Ecology sector and as the leading scientist of the Earth Restoration Foundation and a director of the International Analog Forestry Network, he believes in rapid digital inclusion in sustainable development efforts.",
      take: ['Analog forestry supports regenerative agriculture.', 'Forest conservation strengthens rural livelihoods.', 'Digital innovation promotes sustainability.'],
      chapters: [
        { t: '03:40', title: 'How can Analog forestry help organic & regenerative agriculture?' },
        { t: '06:00', title: 'What is analog forestry? How can Analog forestry help in arresting the loss of living soil?' },
        { t: '11:00', title: 'How can Analog forestry help in arresting loss of water holding capacity?' },
        { t: '13:54', title: 'How can Analog forestry help in responding to increasing ambient temperature?' },
        { t: '16:31', title: 'How can Analog forestry help in restoring the loss of biodiversity?' },
        { t: '20:00', title: 'How technology-based, data-driven (precision) solutions can impact Analog Forestry practices?' },
        { t: '27:13', title: 'Incorporating trees and perennial plants into agricultural systems for sustainability and ecological benefits.' },
        { t: '32:22', title: 'Changing agricultural landscape sustainably.' }
      ],
      tags: ['#agriculture', '#climate', '#forestry', '#SDGs'],
    },
  ]
};
