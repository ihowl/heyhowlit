import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'heyhowlit!', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is a landing page. But from where are you landing?', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'howlit',
  subtitle: 'I play video games on the internet',
  cta: 'Yeah, but what else?',
};

// ABOUT DATA
export const aboutData = {
  img: 'itme.jpg',
  paragraphOne: 'By day, I am a technology leader focused on building work environments that allow people to bring their best to their work. I\'m a tired dad to a wonderful kiddo and okay husband to a wonderful wife. By night, I\'m pretty much the same I guess.',
  paragraphTwo: 'I have been streaming since 2013! That may sound impressive, but I promise it just means that I am old. I ran the world\'s greatest video game website and podcast with some amazing friends until 2014. I switched to making games, made a really cool card game and then took a long break from being Very Online.',
  paragraphThree: 'These days when I\'m not working or hanging out with my family you can find me streaming on Twitch',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lsr-website.png',
    title: 'LeftStickRight',
    info: 'A website about video games. Quite a novel concept, right? I ran this with some very good friends from about 2007 until 2014. We had a webcomic, reviews, a podcast and much more. It was great, trust me.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bitthecardgame.jpg',
    title: 'BIT! The Card Game',
    info: 'Started at the Global Game Jam in 2013, this PvP card game was a project that would take just over two years to get to production. We even did a Kickstarter (it did not succeed!) We ultimately printed about 100 copies of the game in 2015 and sold out that summer. We have never done reprints!',
    info2: '',
    url: 'https://www.twitter.com/bitthegame',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in connecting? Well then let\'s connect!',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/heyhowlit',
    },
    {
      id: nanoid(),
      name: 'twitch',
      url: 'https://www.twitch.com/leftstickright',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC46lCrqef9VRL37PfvbUHiA',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
