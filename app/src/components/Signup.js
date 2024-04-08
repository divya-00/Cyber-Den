import React, { Component } from 'react';
import './signin.css'; // Make sure to import the corresponding CSS file
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5
import axios from "axios";



class Signup extends Component {
  componentDidMount() {
    // Include external scripts here if needed
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      name: '',
      password: '',
      rememberMe: false,
      isLoggedIn: false,
      errorMessage: false, 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { setIsAuthenticated } = this.props; 
    try {
      const response = await axios.post('http://localhost:5000/register', this.state); // Send form data to backend
      console.log(response.data); // Handle response as needed
      setIsAuthenticated(true);
      this.setState({ isLoggedIn: true, errorMessage: false }); 
      // Redirect or show success message
    } catch (error) {
      console.error('Error:', error);
      this.setState({ errorMessage: true});
      // Handle error, show error message
    }
  };

  showHidePassword = () => {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  };

  render() {
    const { isLoggedIn, errorMessage } = this.state;
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
                  {isLoggedIn ? ( // If logged in, display success message
                      <h1>You have registered and logged in successfully! <i className="fas fa-smile"></i></h1>
                    ) : ( // If not logged in, display the form
                    <div className="signform">
                    <h2>Hello, Welcome &nbsp;&nbsp;<i className="fas fa-smile"></i></h2>
                    <form onSubmit={this.handleSubmit}>
                          <div className="inputBx">
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
                            <span>Email</span>
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="inputBx">
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                            <span>Username</span>
                            <i className="fas fa-user-circle"></i>
                          </div>
                          <div className="inputBx">
                            <input type="text" name="name"  value={this.state.name} onChange={this.handleChange} required  />
                            <span>Name</span>
                            <i className="fas fa-user"></i>
                          </div>
                          <div className="inputBx password">
                            <input id="password-input" type="password"  name="password" value={this.state.password} onChange={this.handleChange} required  />
                            <span>Password</span>
                            <Link to="#" className="password-control" onClick={() => this.showHidePassword()}></Link>
                            <i className="fas fa-key" onClick={() => this.showHidePassword()}></i>
                          </div>
                          <label className="remember">
                            <input type="checkbox"  name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange}  /> Remember me
                          </label>
                          <div className="inputBx">
                            <input type="submit" value="Log up"/>
                          </div>
                          {errorMessage && <p className="error-message"> <h2>Invalid Credentials</h2></p>}
                    </form>
                        <p>Have an Account <Link to="/signin">Log in</Link></p>
                      </div>
                  )}
                        
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

export default Signup;