import React, {Component} from 'react';

class UsersList extends Component{
 
  render() {

    return(
      <div className="col-sm-9">
        <div className="panel panel-default">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Departamento</th>
                <th>Online?</th>
                <th>Tarefa Atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usuário</td>
                <td>Departamento</td>
                <td>Online?</td>
                <td>Tarefa Atual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersList;