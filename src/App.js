import React, { Component } from 'react';
import './App.css';

import SideBar from './shared/SideBar';
import ProjectsList from './components/Projects/ProjectsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SideBar />
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default App;
