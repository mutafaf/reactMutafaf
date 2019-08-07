import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
