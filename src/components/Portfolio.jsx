const Portfolio = ({ portfolio }) => (
    <section id="portfolio" className="section portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolio.map((port, index) => {
          return (
            <div className={`portfolio-item ${port.name}`} key={index}>
              <a href={port.url} target="_blank" rel="noopener noreferrer">
                <img src={port.image} alt={port.alt} />
                <span className="project-name">{port.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
  
  export default Portfolio;
  