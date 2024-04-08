import './performance.css';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import React, { Component } from 'react';


class Performance extends Component {
    componentDidMount() {

      //! Share Button Popup
      const sharebtns = document.querySelectorAll(".share-btn");
  
      sharebtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const popup = btn.closest(".event-footer").querySelector(".popup");
  
          btn.classList.toggle("active");
          popup.classList.toggle("active");
  
          event.stopPropagation();
        });
      });
  
      document.addEventListener("click", (event) => {
        const popups = document.querySelectorAll(".popup");
  
        popups.forEach((popup) => {
          if (popup.classList.contains("active") && !popup.contains(event.target)) {
            popup.classList.remove("active");
  
            const shareBtn = popup.closest(".event-footer").querySelector(".share-btn");
            shareBtn.classList.remove("active");
          }
        });
      });
  
      //! Like Buttons
      const likeBtns = document.querySelectorAll(".like-btn");
  
      likeBtns.forEach((likeBtn) => {
        likeBtn.addEventListener("click", () => {
          if (likeBtn.classList.contains("bxs-heart")) {
            likeBtn.classList.remove("bxs-heart");
            likeBtn.classList.add("bx-heart");
            likeBtn.classList.remove("bounce-in");
          } else {
            likeBtn.classList.add("bxs-heart");
            likeBtn.classList.remove("bx-heart");
            likeBtn.classList.add("bounce-in");
          }
        });
      });

      // Get references to the search box and component container
        
    }
  
    render() {
      return (
        <body className="darkmode">
          <div className="content">
            <div className="left-content">
                <div className="search-and-check">
                    <form className="search-box">
                        <input type="text" placeholder="Search event..." />
                        <i className="bx bx-search"></i>
                    </form>
                </div>
            
                <div className="header">
                    <picture className="night-img">
                        <img
                        className="header-mobile"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e349d3c2-ee2c-4982-866e-776236508fc9"
                        alt=""
                        />
                        <img
                        className="header-tablet"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1266c923-a1d3-441a-bbb6-2dc6663b1f8b"
                        alt=""
                        />
                        <img
                        className="header-desktop"
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/91011799-2b47-457d-9e11-65fe38a105d0"
                        alt=""
                        />
                    </picture>

                </div>
        </div>
        </div>
        </body>
      );
    }
  }
  
  export default Performance;
  