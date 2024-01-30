import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';

const App = () => {


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contacts" component={Contacts} />
      </Switch>
      <div>
      
      </div>
      <h1>My React Porfolio</h1>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
      </p>
    </Router>
  );
}

export default App;
