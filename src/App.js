import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import SideBar from './shared/SideBar';
import ProjectsList from './components/Projects/ProjectsList';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SideBar />
         <Switch>
            <Route path="/projects" component={ProjectsList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
