import React from 'react';

class SideBar extends React.Component{
  render (){
    return (
      <div className="sidebar col-sm-3">
        <ul className="list-unstyled sidebar__tasks">
          <li className="sidebar__tasks-title">Vai Planeta!
            <ul className="list-unstyled">
              <li>Projects</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};

export default SideBar;