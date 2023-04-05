export const categories = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "react",
    title: "React",
  },
  {
    id: "nodejs",
    title: "NodeJS",
  },
  {
    id: "express",
    title: "Express",
  },
  {
    id: "mongodb",
    title: "MongoDB",
  },
  {
    id: "javascript",
    title: "JavaScript",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
  },
];

export const portfolio = [
  {
    id: 1,
    tag: ['all', 'react', 'nodejs', 'express', 'mongodb', 'bootstrap'],
    title: 'E-commerce service',
    details: 'User registration, login and profile. Product personalization, cart, order process. Orders history.',
    img: '/images/portfolio/prospero.png',
    link: 'https://prosperostore.marcinbieniek.repl.co/',
    github: 'https://github.com/MarcinBieniek/ProsperoStore'
  },
  {
    id: 2,
    tag: ['all', 'react'],
    title: 'Portfolio web',
    details: 'Porfolio web with snap-scroll effect. Categories filter, contact form. Projects data mapped from db.',
    img: '/images/portfolio/portfolio.png',
    link: '',
    github: 'https://github.com/MarcinBieniek/Portfolio'
  },
  {
    id: 3,
    tag: ['all', 'javascript'],
    title: 'Simple streaming service',
    details: 'VanillaJS. Streaming service with audio player, songs list, search page and song draw page.',
    img: '/images/portfolio/streaming.png',
    link: 'https://streaming-service.herokuapp.com/',
    github: 'https://github.com/MarcinBieniek/SimpleStreamingService'
  },
] 