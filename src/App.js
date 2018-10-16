import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styles from './App.css';
import './App.scss';

import OlympicAnalyzer from './containers/OlympicAnalyzer/OlympicAnalyzer';
import Logo from './components/Logo/Logo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className={styles['App-header']}>
            <Logo />
            <a href="/">
              <strong>Logout</strong>
            </a>
          </header>
          <Route path="/" exact component={OlympicAnalyzer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
