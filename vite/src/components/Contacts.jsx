import React from 'react';

const Contacts = () => {
  return (
    <div>
      <h1>Contacts page</h1>
      <footer>
        <section id="contactbox" className="footer">
          <h3 className="text-center">Contact Me</h3>
          <div className="container text-center">
            <div className="row flex-column flex-md-row justify-content-center">
              <div className="col">
                <a href="tel:+447875428055" className="btn btn-dark btn-responsive" role="button" title="Call-me" aria-label="Call me">
                  <i className="fas fa-phone"></i> Call
                </a>
              </div>
              <div className="col">
                <a href="mailto:Jonrahman90@gmail.com" className="btn btn-dark btn-responsive" role="button" title="Email-me" aria-label="Email me">
                  <i className="fas fa-envelope"></i> Email
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/JonRahman/JanyalomRahmanPortfolio" className="btn btn-dark btn-responsive" role="button" title="GitHub" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
              <div className="col">
                <a href="https://www.linkedin.com/in/jonrahman" className="btn btn-dark btn-responsive" role="button" title="LinkedIn" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
              <div className="col">
                <a href="https://instagram.com/abu_idrees_jr?igshid=OGQ5ZDc2ODk2ZA==" className="btn btn-dark btn-responsive" role="button" title="Instagram" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Contacts;
