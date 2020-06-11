module.exports = {
  // General Information
  siteTitle: 'Nghia Lam | Game Creator',
  siteDescription:
    'Nghia Lam is a game creator lived in Vietnam, who specialized in developing game/application with various game engine and techniques.',
  siteKeywords:
    'Nghia Lam, nghialam, zZnghialamZz, game developer, game designer, C++, Unity, GameMaker Studio 2',
  siteUrl: 'https://zznghialamzz.github.io',
  siteLanguage: 'en_US',
  name: 'Nghia Lam',
  location: 'Vietnam, Ho Chi Minh City',
  email: 'nghialam12795@gmail.com',
  github: 'https://github.com/zZnghialamZz',
  twitterHandle: '@NghiaLam12795',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zZnghialamZz',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nghia-lam-8115a0155/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/NghiaLam12795',
    },
  ],

  // Site Setup
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
