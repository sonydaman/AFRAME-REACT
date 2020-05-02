import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Routes from './Routes'
import { CompNav } from './_components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <CompNav >
          <Routes />
        </CompNav>
      </Router>
    </div>
  );
}

export default App;
