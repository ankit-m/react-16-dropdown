import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import '../styles/examples.css';
import '../styles/prism.css';
import '../../src/main.css';

import './prism';

import Jumbotron from './Jumbotron';
import BasicUsage from './BasicUsage';
import Customization from './Customization';
import Controlled from './Controlled';
import Features from './Features';

function App() {
  return (
    <Fragment>
      <Jumbotron />
      <Features />
      <BasicUsage />
      <Customization />
      <Controlled />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('react-app'));
