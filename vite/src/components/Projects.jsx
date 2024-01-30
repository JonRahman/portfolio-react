import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects page</h1>
      <section>
        <div className="container text-center">
          <div className="row" id="workbox">
            <h2>Work</h2>
            <div className="col">
              Check out my projects!
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="card-group">
            <div className="card">
              <img src="Images/prework.png" className="mx-auto img-fluid" alt="Prework FrontEnd Developer image" />
              <div className="card-body">
                <h3 className="card-title"><a href="https://jonrahman.github.io/Prework-study-guide/">Prework FrontEnd Developer</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img src="Images/horiseon.png" style={{ height: '60%' }} className="mx-auto img-fluid" alt="Refactor - horiseon image" />
            <div className="card-body">
              <h3 className="card-title"><a href="https://jonrahman.github.io/Horiseon/">Code Refactor</a></h3>
            </div>
          </div>
          <div className="card">
            <img src="Images/my portfolio.png" style={{ height: '60%' }} className="mx-auto img-fluid" alt="Responsive - My portfolio image" />
            <div className="card-body">
              <h3 className="card-title"><a href="https://jonrahman.github.io/JanyalomRahmanPortfolio">Responsive Portfolio</a></h3>
            </div>
          </div>
          <div className="card">
            <img src="Images/snorkeling.jpg" style={{ height: '60%' }} className="mx-auto img-fluid" alt="Bootstrap portfolio image" />
            <div className="card-body">
              <h3 className="card-title"><a href="https://jonrahman.github.io/JR-Bootstrap-Portfolio/">Bootstrap Portfolio</a></h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row" id="skillsbox">
            <h2>Skills</h2>
            <p className="text-center">By the time I graduate, I will be able to:</p>

            <div className="row">
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item">Apply fundamental knowledge of web development with HTML, CSS, and JavaScript.</li>
                  <li className="list-group-item">Create visually-compelling page layouts using UX design principles.</li>
                  <li className="list-group-item">Maintain code versioning and work across distributed teams using Git and GitHub.</li>
                  <li className="list-group-item">Manipulate page information and create interactivity using jQuery and React.</li>
                  <li className="list-group-item">Retrieve data from servers using RESTful-compliant network requests.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item">Organize code, having mastered foundations of object-oriented and functional programming paradigms.</li>
                  <li className="list-group-item">Build modern web applications with industry-standard frameworks like Node.js and React.</li>
                  <li className="list-group-item">Deploy web-based applications using Netlify.</li>
                  <li className="list-group-item">Prepare a portfolio of front-end development work.</li>
                  <li className="list-group-item">To be a better FrontEnd Web Developer.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
