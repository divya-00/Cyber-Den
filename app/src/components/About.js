import React, { Component } from 'react';
import './about.css'; // Make sure to import the corresponding CSS file
import Review from './Review'; // Assuming Review is another component you have
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5
import myImage from './hlogo.png' // Import the image
import myImage1 from './cs2 (1).jpg'; // Import the image

class About extends Component {
  componentDidMount() {
    // Include external scripts here if needed
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }

  render() {
    return (
      <div>
        
        <div id="header1">
          <div className="cotainer">
            <div className="header-text">
              <p>
              <img src={myImage}  alt="Logo" height="170px" width="400px"/></p>
              <h1>Unlocking <span> Cyber Secrets<br />One bite</span> at a time</h1>
            </div>
          </div>
        </div>
        <div id="about" className="about">
          <div className="container1">
            <div className="row">
              <div className="about-col-1">
                <img src={myImage1}  alt="me "/>
              </div>
              <div className="about-col-2">
                <h1 className="sub-title">About <span>Us</span></h1>
                <p className="me">
                <div className="Section">
                    <div className="card">
                      <h1> Mission Statement</h1>
                      <p>Cyber Den is committed to providing high-quality cybersecurity education, empowering users to enhance their skills, and contributing to a safer digital environment.</p>
                    </div>
                </div>
                  <br />
                  <p>Cyber Den is a browser-based cyber security training platform, with learning content covering all skill levels from the complete beginner to the seasoned hacker. Learning cyber security previously entailed a black-box approach with a lack of guides and challenges, leaving the industry incredibly tricky for people to break into and difficult for those already in-market to upskill continuously. This is where we come in!</p>
                </p>
                <div className="tab-titles">
                  <p className="tab-links active-link" onClick={(event) => this.opentab(event,'accessible')}>Accessible</p>
                  <p className="tab-links" onClick={(event) => this.opentab(event,'approach')}>Innovative Approach</p>
                  <p className="tab-links" onClick={(event) => this.opentab(event,'content')}>Content Variety</p>
                  <p className="tab-links" onClick={(event) => this.opentab(event,'curiosity')}>Sparking Curiosity</p>
                </div>
                <div className="tab-contents active-tab" id="accessible">
                  <p>In response to the rising demand for skilled cyber security professionals and the widening skills gap, CyberDen was created. Our mission is to break down barriers to entry by providing affordable and accessible cyber security education. Expensive courses and certifications often deter individuals from entering the field, but at CyberDen, we strive to make learning resources available to all.</p>
                </div>
                <div className="tab-contents" id="approach">
                  <p>Before CyberDen, cyber security education primarily focused on theoretical concepts, leaving learners with significant gaps in practical application and engagement.</p>
                  <p>At CyberDen, we provide users with their own personal virtual machine, which can be deployed with just a click of a button. This hands-on approach enables learners to actively practice hacking and defending machines, mirroring real-world scenarios and job roles. Our immersive training methodology aligns with market demands and enhances retention through experiential learning.</p>
                </div>
                <div className="tab-contents" id="content">
                  <p>CyberDen is an inclusive platform accessible to individuals at any skill level in the cyber security realm. Whether you're a complete novice with no coding or cyber security background or an experienced professional seeking to stay abreast of emerging threats, our tailored training labs accommodate diverse learning needs. For beginners, our labs provide a gentle introduction, guiding you through fundamental concepts and offering support as you build essential skills.</p>
                  <p>For seasoned practitioners, CyberDen offers advanced training to sharpen expertise and navigate complex challenges.</p>
                </div>
                <div className="tab-contents" id="curiosity">
                  <p>With training for all, we're here to spark intrigue in cyber learners. We're passionate about training the next generation of cyber and bridging the skills gap the world currently faces.</p>
                  <p>We work with schools, colleges, and universities to give students practical experience in hacking and defending machines - in a gamified, engaging environment that makes people want to learn more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Review /> {/* Assuming Review is another component */}
        <div className="copyright">
          <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
        </div>
      </div>
    );
  }

  opentab(event,tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
}

export default About;