import profileImage from '../assets/images/profile.png';

const Home = ({ home }) => (
  <section id="home" className="section home">
    <div className='home-left'>
      <h2>Welcome to My Portfolio</h2>
      <h1>{home.name}</h1>
      <p>{home.objective}</p>
        <div className="home-button">
          {home.button.map((btn, index) => {
            const btnClass = btn === 'Hire Me' ? 'hire-btn' : 'talk-btn';
            const hrefMove = btn === 'Hire Me' ? 'contact' : 'contact';
            return (
              <a href={`#${hrefMove}`} key={index}>
                <button className={btnClass} key={index}>{btn}</button>
              </a>
            )
          })}
        </div>
    </div>
    <div className='home-right'>
      <img src={profileImage} alt="A boy as web developer, he was standing" />
    </div>
  </section>
);

export default Home;
