import React, { Component } from 'react';

class ProjectsList extends Component {


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
                <tr>
                  <td>Editar</td>
                  <td>Projeto</td>
                  <td>Status</td>
                  <td className="text-center">Tasks Feitas</td>
                  <td className="text-center">Tasks Para Revisão</td>
                  <td className="text-center">Tasks em Desenvolvimento</td>
                  <td className="text-center">Usuários Na task</td>
                </tr>
              </tbody>
            </table>
          </div>  
        </div>   
      </div>
    );
  }
}

export default ProjectsList;