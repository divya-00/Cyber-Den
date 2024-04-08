import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5

class Logout extends Component {

  componentDidMount() {
    // Include external scripts here if needed
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <section>
          <div className="boxy">
            <div className="squares" style={{ '--i': 0 }}></div>
            <div className="squares" style={{ '--i': 1 }}></div>
            <div className="squares" style={{ '--i': 2 }}></div>
            <div className="squares" style={{ '--i': 3 }}></div>
            <div className="squares" style={{ '--i': 4 }}></div>
            <div className="squares" style={{ '--i': 5 }}></div>
            <div className="containerglass">
              <div className="signform">
                <h2>
                  You have logged out successfully &nbsp; &nbsp;
                  <i className="fas fa-smile-wink"></i>
                </h2>
                <p>
                  Would you like to {!isAuthenticated && <Link to="/signin">log in</Link>} again?</p><p>
                  Sign up to create a new account {!isAuthenticated && <Link to="/signup"> Sign up</Link>}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright">
          <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
        </div>
      </div>
    );
  }
}

export default Logout;
