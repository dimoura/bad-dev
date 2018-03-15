import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

it('Check for state vars', () => {
  const mock_json = [{
     "id":"1",
     "name":"Projetasso",
     "start_date":"2018-03-01",
     "qa_date":"2018-03-24",
     "milestone_date":"2018-03-31",
     "project_status":"On Going",
     "tasks":[
        {
           "id":"1",
           "page":"Home",
           "error":"Ajusta o menu",
           "developer":"Frontend",
           "approve":"Faremos no final",
           "comments":"Vamos alterar no final, rola?",
           "status":"Developing"
        }
     ],
     "users":[
        {
           "name":"Jeff",
           "role":"Developer"
        }
     ],
     creatingNewTask: false
  }];

  const mock_state = {
    dataset: mock_json
  }

  const getProjectList = () =>{
    return mock_state;
  }
  const div = document.createElement('div');
  expect(mock_state).toHaveProperty('dataset');
  
  expect(getProjectList().dataset[0]).toHaveProperty('id');
  expect(getProjectList().dataset[0]).toHaveProperty('name');
  expect(getProjectList().dataset[0]).toHaveProperty('start_date');
  expect(getProjectList().dataset[0]).toHaveProperty('qa_date');
  expect(getProjectList().dataset[0]).toHaveProperty('milestone_date');
  expect(getProjectList().dataset[0]).toHaveProperty('project_status');

  expect(getProjectList().dataset[0]).toHaveProperty('users');
  expect(getProjectList().dataset[0].users[0]).toHaveProperty('name');
  expect(getProjectList().dataset[0].users[0]).toHaveProperty('role');

});
