import React from 'react';
import './event.css';

function EventCard({ date, eventName, venue, eventType, imageUrl }) {

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
    


  return (
    <div className="event-card">
      <div className="event-header">
        <img src={imageUrl} alt="" />
        <p>{date}</p>
        <i className="fas fa-heart like-btn"></i>
      </div>
      <div className="event-content">
        <h2>{eventName}</h2>
        <p>{venue}</p>
      </div>
      <div className="event-footer">
        <p style={{ backgroundColor: eventType === "Workshop" ? "#e48e2c" : "#582bac" }}>{eventType}</p>
        <div className="btn-group">
          <button>Buy Ticket</button>
          <div className="share">
            <button className="share-btn">
              <i className="fa-solid fa-share"></i>
            </button>
            <ul className="popup">
              <li>
                <a href="www.google.com" style={{ color: "rgb(79, 153, 213)" }}>
                  <i className="fas fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="www.google.com" style={{ color: "rgb(34, 173, 34)" }}>
                  <i className="fas fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
