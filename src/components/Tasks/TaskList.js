import React, { Component } from 'react';

var fakeDataSet = [
  {
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
           "name":"Roludao",
           "role":"Developer"
        },
        {
           "name":"Jeffao",
           "role":"UX"
        }
     ],
     creatingNewTask: false
  }
];


class TasksList extends Component{

  state = {
    dataset: fakeDataSet[0],
    creatingNewTask: false
  }

  toggleTaskForms = () => {
    this.setState({
      creatingNewTask: !this.state.creatingNewTask
    });
  }

  createNewTask = async (e) => {
    e.preventDefault();
    var temp_tasks = {
      page: e.target.elements.page.value,
      error: e.target.elements.error.value,
      developer: e.target.elements.developer.value,
      approve: e.target.elements.approve.value,
      comments: e.target.elements.comments.value,
      status: 'Waiting'
    },
    temp_dataset = this.state.dataset;

    const api_call = await fetch(`http://localhost:8080/controllers/tasks/controller.php?project_id=${this.props.match.params.project_id}`, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(temp_tasks)
    });
    const task_id = await api_call.json();
    temp_tasks.id = task_id.success;

    temp_dataset.tasks.push(temp_tasks);

    this.setState({
      dataset: temp_dataset,
      creatingNewTask: false
    })
  }

  updateTask = async (value, field, onId) => {
    var data_body = '{"'+field+'": "'+value+'", "id": "'+onId+'"}';
    data_body = JSON.parse(data_body);

    const api_call = await fetch('http://localhost:8080/controllers/tasks/controller.php', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_body)
    });
    await api_call;
  }
  checkForUpdate = (e) =>{
    if(e.target.defaultValue !== e.target.value){
      this.updateTask(
        e.target.value,
        e.target.name,
        e.target.parentElement.parentElement.dataset.thisId
      );
    }
  }

  getAllTasks = async (e) => {
    const api_call = await fetch(`http://localhost:8080/controllers/tasks/controller.php?project_id=${this.props.match.params.project_id}`);
    const data = await api_call.json();
    this.setState({
      dataset: data.response[0]
    });
  }
  
  componentDidMount(){
    // this.getAllTasks();
  }
  render(){

    return (
      <div className="col-sm-9">
        <div className="panel panel-default">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Página</th>
                <th>Erro</th>
                <th>Desenvolvedor</th>
                <th>Aprovação</th>
                <th>Comentários</th>
              </tr>
            </thead>
            <tbody>
            {this.state.dataset.tasks.map((item, i) =>
              <tr data-this-id={item.id} key={i}>
                <td><input onBlur={this.checkForUpdate} className="form-control" name="page" defaultValue={item.page} key={item.page} /></td>
                <td><input onBlur={this.checkForUpdate} className="form-control" name="error" defaultValue={item.error} key={item.error} /></td>
                <td><input onBlur={this.checkForUpdate} className="form-control" name="developer" defaultValue={item.developer} key={item.developer} /></td>
                <td><input onBlur={this.checkForUpdate} className="form-control" name="approve" defaultValue={item.approve} key={item.approve} /></td>
                <td><input onBlur={this.checkForUpdate} className="form-control" name="comments" defaultValue={item.comments} key={item.comments} /></td>
                <td>
                  <select onBlur={this.checkForUpdate} name="status" className="form-control" defaultValue={item.status} key={item.status}>
                    <option value="nda">Selecione</option>
                    <option value="Testing">Testing</option>
                    <option value="Done">Done</option>
                    <option value="Development">Development</option>
                    <option value="Waiting">Waiting</option>
                  </select>
                </td>
                </tr>
            )}
            {
              this.state.creatingNewTask === true &&
              <tr>
                <td colSpan="5">
                  <form onSubmit={this.createNewTask}>
                    <table>
                      <tbody>
                        <tr>
                          <td><input name="page" className="form-control" /></td>
                          <td><input name="error" className="form-control" /></td>
                          <td><input name="developer" className="form-control" /></td>
                          <td><input name="approve" className="form-control" /></td>
                          <td><input name="comments" className="form-control" /></td>
                        </tr>
                        <tr>
                          <td colSpan="5">
                            <a className="btn btn-info" onClick={this.toggleTaskForms}>Voltar</a>
                            <button className="btn btn-info" type="submit" onClick={this.saveNewTask}>Salvar</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </td>
              </tr>
            }
            </tbody>
          </table>
          {this.state.creatingNewTask !== true && <a className="btn btn-info" onClick={this.toggleTaskForms}>Adicionar Task</a>}
        </div>
      </div>
    );
  }
}

export default TasksList;