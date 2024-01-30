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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export default App;
