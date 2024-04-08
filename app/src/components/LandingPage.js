import React from 'react';
import './Land.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      {/* Start Landing Page */}
      <div className="landing-page">
        <header>
          <div className="containerinfo">
            <div className="infos">
              <h1 style={{ fontSize: "6rem"}}>Looking For Inspiration</h1>
              <br/>
              <h2 style={{ fontSize: "2.5rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</h2>
              <br/><br/><br/>
              <center><button><Link to="/learn">&nbsp;Getting Started</Link></button></center>
            </div>
            <div className="image">
              <img className="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Main" />
            </div>
          </div>
        </header>
      </div>
      {/* End Landing Page */}
      <div className="copyright">
          <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
        </div>
    </div>
  );
};

export default LandingPage;
