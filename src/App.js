import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import logo from './logo.svg';

import OlympicAnalyzer from './containers/OlympicAnalyzer/OlympicAnalyzer';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {
  render() {

    // let routes = (
    //   <Switch>
    //     <Route path="/" exact component={OlympicAnalyzer} />
    //     <Redirect to="/" />
    //   </Switch>
    // );

    return (

      <BrowserRouter>
        <div>
          <header className="App-header">
            <h1 className="App-title"></h1>
          </header>
          <Route path="/" exact component={OlympicAnalyzer} />
        </div>
      </BrowserRouter>
    );
  }
}

// <div>
//   <Layout>
//     {routes}
//   </Layout>
// </div>

// let routes = {
//   <Switch>
//     <Route path = "/" exact component={OlympicAnalyzer} />
//     <Redirect to = "/" />
//   </Switch>
// };

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

export default App;
