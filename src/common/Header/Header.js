import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand prime-title" href="#">Holidify</a>
	        </div>
	        <div id="navbar" className="navbar-collapse collapse">
	          <ul className="nav navbar-nav navbar-right">
	            <li className="active"><a href="./">Home <span className="sr-only">(current)</span></a></li>	          	
	            <li><a href="../navbar/">Login</a></li>
	            <li><a href="../navbar-static-top/">Sign Up</a></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
      </div>
    );
  }
}

export default Header;