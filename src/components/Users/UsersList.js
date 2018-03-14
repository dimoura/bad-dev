import React, {Component} from 'react';

class UsersList extends Component{

  data_user = [{
    id: 1,
    name: "Jeff",
    role: "Developer",
    isOnline: true,
    current_task: "Home"
  },
  {
    id: 2,
    name: "Amarilis",
    role: "UX",
    isOnline: false,
    current_task: "Checkout"
  },
  {
    id: 3,
    name: "Dani",
    role: "Developer Jr",
    isOnline: false,
    current_task: "Menu"
  }];

  state = {
    user_list: this.data_user
  }

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
            {this.state.user_list.map((item, k) =>
              <tr key={k}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.isOnline ? 'Sim':'Não'}</td>
                <td>{item.current_task}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersList;