import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import NavBar from './NavBar';

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
    </Router>
  );
};

export default App;
