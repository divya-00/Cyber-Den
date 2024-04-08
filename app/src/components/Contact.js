import React, { Component } from 'react';
import './contact.css'; // Make sure to import the corresponding CSS file
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5
import axios from 'axios';


class Contact extends Component {
  componentDidMount() {

    
        // Create a new script element
    const script = document.createElement('script');

    // Set the source attribute to the Font Awesome script URL
    script.src = 'https://kit.fontawesome.com/64d58efce2.js';

    // Set the crossorigin attribute
    script.crossOrigin = 'anonymous';

    // Append the script element to the head of the document
    document.head.appendChild(script);

    // Include external scripts here if needed
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    script1.async = true;
    document.body.appendChild(script1);

   
  
    // Add focus and blur event listeners
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", this.focusFunc);
      input.addEventListener("blur", this.blurFunc);
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      email: '',
      phone: '',
      message: '',
      submissionStatus: '',
      displayStatus: 'form',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username: this.state.username,
        email: this.state.email,
        phone: parseInt(this.state.phone), // Convert phone number to integer
        message: this.state.message
      };
  
      const response = await axios.post('http://localhost:5000/send-message', formData);
      console.log(response.data);
      this.setState({
        submissionStatus: 'success',
        displayStatus: 'success',
      });
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      
      this.setState({
        submissionStatus: 'error',
        displayStatus: 'error',
      });
      // Handle error
    }
  };
  

  focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  render() {
    return (
      <div>
        
        <div className="container2">
          <span className="big-circle"></span>
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Have a question or feedback? Feel free to reach out to us using the form below. We're here to assist you!
              </p>
              <div className="info">
                <div className="information"><br/><p>
                  <i className="fas fa-map-marker-alt"></i> 
                  IT dept, VRSEC, Kanuru, Vijayawada, 520007</p>
                </div>
                <div className="information">
                  <p><i className="fas fa-envelope"></i> 
                  cyberden@cs.com</p>
                </div>
                <div className="information">
                  <p><i className="fas fa-phone"></i>
                  123-456-789</p>
                </div>
              </div>
              <div className="social-media">
                <p><br/>Connect with us :</p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/devi-divya-sri-perni/"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/devi-divya-sri-perni/"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/devi-divya-sri-perni/"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/devi-divya-sri-perni/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
                {this.state.displayStatus === 'form' && (
                  <form  onSubmit={this.handleSubmit}>
                  <h3 className="title">Contact us</h3>
                  <div className="input-container-n">
                    <input type="text" name="username" className="input" value={this.state.username} onChange={this.handleChange} />
                    <label>Username</label>
                    <span>Username</span>
                  </div>
                  <div className="input-container-n">
                    <input type="email" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
                    <label>Email</label>
                    <span>Email</span>
                  </div>
                  <div className="input-container-n">
                    <input type="tel"  name="phone" className="input" value={this.state.phone} onChange={this.handleChange} />
                    <label>Phone</label>
                    <span>Phone</span>
                  </div>
                  <div className="input-container-n textarea">
                    <textarea name="message" className="input" value={this.state.message} onChange={this.handleChange}></textarea>
                    <label>Message</label>
                    <span>Message</span>
                  </div>
                  <input type="submit" value="Send" className="btn" />
                </form>
                )}
                {this.state.displayStatus === 'success' && (
                  <div className="success-message"><br/><h1><i class="far fa-smile-beam"></i></h1><h2 style={{fontSize:"30px", padding:"40px 40px 40px 100px"}}>Message sent successfully!</h2></div>
                )}
                {this.state.displayStatus === 'error' && (
                  <div className="error-message"><br/><h1><i class="far fa-sad-tear"></i></h1><h2 style={{fontSize:"30px", padding:"40px"}}>Failed to send message. Please try again later.</h2></div>
                )}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
        </div>
      </div>
    );
  }
}

export default Contact;