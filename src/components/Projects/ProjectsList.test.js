import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsList from './ProjectsList';

it('Check for state vars', () => {
  const mock_json = [{
    id: 1,
    name: 'Home',
    status: 'On Going',
    tasks: [{
      Developing: 1,
      Done: 1,
      Testing: 1
    }],
    users: [{
      name: 'Jeff',
      role: 'Developer',
      isOnline: true
    }]
  }];

  const mock_state = {
    projects: mock_json
  }

  const getProjectList = () =>{
    return mock_state;
  }
  const div = document.createElement('div');
  expect(mock_state).toHaveProperty('projects');
  
  expect(getProjectList().projects[0]).toHaveProperty('id');
  expect(getProjectList().projects[0]).toHaveProperty('name');
  expect(getProjectList().projects[0]).toHaveProperty('status');

});
