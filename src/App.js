import React from 'react';

import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';

import AboutPage from './pages/about/about.component';
import HomePage from './pages/homepage/homepage.component';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
