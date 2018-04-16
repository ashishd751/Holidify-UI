import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
		  <div className="title">Create account</div>
		  <input type="text" placeholder="E-mail"/>
		  <input type="password" placeholder="Password"/>
		  <input type="checkbox" id="rememberMe"/>
		  <label htmlFor="rememberMe"></label><span>I have read and agree to the <a href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
		  <button>Create Account</button>
		  <div className="social"> <span>or sign up with social media</span></div>
		  <div className="buttons">
		    <button className="facebook"><i className="fa fa-facebook"></i>Facebook</button>
		    <button className="twitter"><i className="fa fa-twitter"></i>Twitter</button>
		    <button className="google"><i className="fa fa-google-plus"></i>Google</button>
		  </div>
		  <div className="already">Already have an account? <a href="#">Sign In</a></div>
		</div>
      </div>
    );
  }
}

export default Home;