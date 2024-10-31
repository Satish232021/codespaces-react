import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import amazon from './assets/images/amazon.png';
import caffiend from './assets/images/caffiend.png';
import keeper from './assets/images/keeper.png';
import youtube from './assets/images/youtube.png';
import rock_paper_scissor from './assets/images/rock-paper-scissor.png';


const navItems = [
  'Home',
  'About',
  'Portfolio',
  'Contact',
];

const home = {
  name:'Somu Bharath Satish Reddy',
  role:'Web Developer',
  objective:'Passionate web developer dedicated to crafting responsive, user-friendly websites and applications with a strong focus on clean code and seamless user experience.',
  button:[
    'Hire Me', `Let's Talk`
  ]
}

const about = {
  intro:['I am a passionate Web Developer with a strong foundation in creating dynamic and responsive web applications. I enjoy collaborating on projects that drive success and growth for organizations.',
    'My enthusiasm for web development is reflected in the dedication I bring to each project, always eager to tackle new challenges and enhance user experiences with innovative solutions.'
  ],
  skills:[
    'HTML 5', 'CSS 3', 'JavaScript', 'JQuery', 'React.js', 'Node.js & Express.js', 'Rest API', 'PostgreSQL'
  ]
}

const portfolio = [
  {
    name:'Caffiend',
    url:'https://caffiend-react-cool.netlify.app/',
    image:caffiend,
    alt:'Caffiend application image',
  },
  {
    name:'Keeper-Application',
    url:'https://keeper-app-react-cool.netlify.app/',
    image:keeper,
    alt:'keep application image',
  },
  {
    name:'Amazon-Ecommerce',
    url:'https://satish232021.github.io/Amazon-ecommerce-clone/',
    image:amazon,
    alt:'Amazon-Ecommerce application image',
  },
  {
    name:'Youtube-clone',
    url:'https://satish232021.github.io/youtube-clone/',
    image:youtube,
    alt:'Youtube-CLone application image',
  },
  {
    name:'Rock-Paper-Scissor',
    url:'https://satish232021.github.io/rock-paper-scissor/',
    image:rock_paper_scissor,
    alt:'Rock Paper Scissor application image',
  },
]


const App = () => (
  <div>
    <div>
      <Navbar navItems={navItems} />
    </div>
    <div className='content'>
      <section id="home">
        <Home  home={home}/>
      </section>
      <section id="about">
        <About about={about} />
      </section>
      <section id="portfolio">
        <Portfolio portfolio={portfolio} />
      </section>
      <section id="contact">
        <Contact />
      </section> 
    </div>

  </div>
);

export default App;
