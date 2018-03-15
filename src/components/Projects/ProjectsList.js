import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  getProjectList = async () =>{
    const api_call = await fetch('http://localhost:8080/controllers/projects/controller.php');
    const data = await api_call.json();

    this.setState({
      projects: data.response
    });
  }

  componentDidMount(){
    this.getProjectList();
  }

  filterTaskByStatus = (task, status) =>{
    var _temp = 0;

    for(var task_status in task){
      // console.info(task.hasOwnProperty);
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

          <div className="panel panel-info">
            <Link className="btn-on-panel" to="/projects/new">
              <span className="btn-icon">+</span>
              Criar Novo Projeto
            </Link>

            <Link className="btn-on-panel active" to="/projects/new">
              Projetos Em Desenvolvimento
            </Link>

            <Link className="btn-on-panel" to="/projects/new">
              Projetos Finalizados
            </Link>
          </div>
          
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
                  <td className="text-center"><Link to={`/project/edit/${item.id}`}><i className="glyphicon glyphicon-pencil"></i></Link></td>
                  <td width="30%"><Link to={`/project/${item.id}/tasks`}>{item.name}</Link></td>
                  <td width="100px"><Link to={`/project/${item.id}/tasks`}>{item.status}</Link></td>
                  <td className="text-center task-done"><Link to={`/project/${item.id}/tasks`}>{this.filterTaskByStatus(item.tasks, 'Done')}</Link></td>
                  <td className="text-center task-testing"><Link to={`/project/${item.id}/tasks`}>{this.filterTaskByStatus(item.tasks, 'Testing')}</Link></td>
                  <td className="text-center test-developping"><Link to={`/project/${item.id}/tasks`}>{this.filterTaskByStatus(item.tasks, 'Developing')}</Link></td>
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