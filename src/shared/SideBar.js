import React from 'react';
import { Link } from  'react-router-dom';

class SideBar extends React.Component{
  render (){
    return (
      <div className="sidebar col-sm-3">
        <ul className="list-unstyled sidebar__tasks">
          <li className="sidebar__tasks-title">Vai Planeta!
            <ul className="list-unstyled">
              <li><Link className="sidebar__tasks__link" to="/projects"><i className="glyphicon glyphicon-th-list"></i>Projetos</Link></li>
              <li><Link className="sidebar__tasks__link" to="/users"><i className="glyphicon glyphicon-pawn"></i>Usuários</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};

export default SideBar;