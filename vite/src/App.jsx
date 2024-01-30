import React from 'react';
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
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
        </Switch>
      </div>
      <div>
        <h1>My React Portfolio</h1>
      </div>
    </Router>
  );
}

export default App;
