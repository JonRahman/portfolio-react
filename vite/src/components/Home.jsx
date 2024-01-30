import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg mx-auto bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#navbox">Janyalom Rahman</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#aboutbox">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                      Work
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="#workbox">Prework</a></li>
                      <li><a className="dropdown-item" href="#workbox">Refactor</a></li>
                      <li><a className="dropdown-item" href="#workbox">Responsive</a></li>
                      <li><a className="dropdown-item" href="#workbox">Bootstrap</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skillsbox">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactbox">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-success me-2" type="button">Subscribe</button>
            </form>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Home;
