import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import About from './About';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="about" component={About} title="About page" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
