import React, { Component } from 'react';
import './App.css';

import SideBar from './shared/SideBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SideBar />
          
        </div>
      </div>
    );
  }
}

export default App;
