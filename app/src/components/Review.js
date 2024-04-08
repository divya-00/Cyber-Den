import React from 'react';
import './review.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5
import myImage from './review1.jpeg'; // Import the image
import myImage1 from './review2.jpeg'; // Import the image
import myImage2 from './review3.jpeg'; // Import the image


const Review = () => {
  return (
    <div class="review" id="review">

        <h1 class="head">Our customers <span>reviews</span></h1>
    
        <div class="box-container">
    
            <div class="box">
                
                <img src={myImage}  alt="" />
                <h3>Anu Varshitha</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>The website's user-friendly interface and real-time updates made managing my
                     healthcare a breeze. Kudos to the team for creating such a fantastic platform!</p>
            </div>
            <div class="box">
              <img src={myImage2}  alt="" />
                <h3>Krishna Reddy</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>Effortlessly schedule appointments and access comprehensive doctor profiles. 
                    This website prioritizes convenience and patient satisfaction</p>
            </div>
            <div class="box">
              <img src={myImage1}  alt="" /> 
                <h3>Thanmayi</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>Highly recommended for its intuitive design and easy navigation. 
                    Managing healthcare has never been so efficient and stress-free!</p>
            </div>
    
        </div>
    
      </div>
  );
}

export default Review;