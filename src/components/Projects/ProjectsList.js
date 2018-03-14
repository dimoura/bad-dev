import React, { Component } from 'react';

class ProjectsList extends Component {

data_projects = [{
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
    },
    {
      name: 'Amarilis',
      role: 'UX',
      isOnline: false
    }]
  },
  {
    id: 2,
    name: 'Checkout',
    status: 'On Hold',
    tasks: [{
      Developing: 1,
      Done: 1,
      Testing: 1
    }],
    users: [
    {
      name: 'Amarilis',
      role: 'UX',
      isOnline: false
    }]
  },
  {
    id: 3,
    name: 'Menu',
    status: 'On Going',
    tasks: [{
      Developing: 1,
      Done: 1,
      Testing: 1
    }],
    users: [
    {
      name: 'Amarilis',
      role: 'UX',
      isOnline: false
    },
    {
      name: 'Dani',
      role: 'Developer',
      isOnline: true
    }]
  }];

  state = {
    projects: this.data_projects
  }


  filterTaskByStatus = (task, status) =>{
    var _temp = 0;

    for(var task_status in task){
      if(task[task_status].status === status){
        _temp = task[task_status].total;
        break;
      }
    }
    return _temp;
  }

  render(){
    return(
      <div className="col-sm-9">
        <div className="wrap-design">

          
          <div className="panel panel-default">
            <table className="table">
              <thead>
                <tr>
                  <th>Editar</th>
                  <th>Projeto</th>
                  <th>Status</th>
                  <th className="text-center">Tasks Feitas</th>
                  <th className="text-center">Tasks Para Revisão</th>
                  <th className="text-center">Tasks em Desenvolvimento</th>
                  <th className="text-center">Usuários Na task</th>
                </tr>
              </thead>
              <tbody>
              {this.state.projects.map((item, i) =>
                <tr data-percent="80%" className="developing-projects" key={i}>
                  <td className="text-center"><i className="glyphicon glyphicon-pencil"></i></td>
                  <td width="30%">{item.name}</td>
                  <td width="100px">{item.status}</td>
                  <td className="text-center task-done">{this.filterTaskByStatus(item.tasks, 'Done')}</td>
                  <td className="text-center task-testing">{this.filterTaskByStatus(item.tasks, 'Testing')}</td>
                  <td className="text-center test-developping">{this.filterTaskByStatus(item.tasks, 'Developing')}</td>
                  <td className="developing-projects__users">
                    {item.users.map((user, j) =>
                      <p key={j} className={user.role} data-isonline={user.isOnline ? 'Online':'Offline'}>{user.name}<span></span></p>
                    )}
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>   
        </div>   
      </div>
    );
  }
}

export default ProjectsList;