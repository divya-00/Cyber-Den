import React, {} from 'react';
import EventCard from './eventcard'; // Assuming EventCard component is in the same directory

function EventContainer({searchQuery }) {
  // Sample data for upcoming events
  
  

  const upcomingEvents = [
        {
          date: "March 19, 8:00 PM",
          eventName: "Hack Diva",
          venue: "Skyline Amphitheater",
          eventType: "Activity",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/697ef286-1104-4c6c-91d6-0b2a1e04009b"
        },
        {
          date: "March 22, 8:00 PM",
          eventName: "Ethical Hacking",
          venue: "VRSEC",
          eventType: "Workshop",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/19cc9b1d-0dd6-4e4e-ab5c-1d9efd443953"
        },
        {
          date: "March 26, 10:00 PM",
          eventName: "Code with Harry",
          venue: "Jazz Haven Lounge",
          eventType: "Activity",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/34203989-4778-4e9a-8537-d42c073a458d"
        },
        {
          date: "March 28, 3:00 PM",
          eventName: "Cyber Security",
          venue: "Artisan Workshop Space",
          eventType: "Workshop",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3990b1bd-f34d-4fda-bfc9-d807d9e2f0f6"
        },
        {
          date: "April 4, 8:30 PM",
          eventName: "In time Hacks",
          venue: "Epoch Theater",
          eventType: "Activity",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/35bab020-129e-4858-9ce7-076f804fdcc5"
        },
        {
          date: "April 5, 6:45 PM",
          eventName: "Abstract Cyber threats",
          venue: "IIT Mumbai",
          eventType: "Workshop",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/13b71f3a-4fe3-4d95-8f83-1bd5722f5108"
        },
        {
          date: "April 6, 9:00 PM",
          eventName: "Hack the Box",
          venue: "Overture Hall",
          eventType: "Activity",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/566017c5-9b68-4b35-a14f-5d04d43fa408"
        },
        {
          date: "Jun 23, 1:30 PM",
          eventName: "Hack Championships - 2024",
          venue: "NIT Warangal",
          eventType: "Activity",
          imageUrl: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ab202ffd-b0ee-43ee-befb-870fa509cc17"
        }
      
      
    // Add more events as needed
  ];
    // Filter events based on the search query
    const filteredEvents = upcomingEvents.filter(event =>
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
      );



  return (
    <div>
      <div className="event-container">
        {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
            <EventCard
                key={index}
                date={event.date}
                eventName={event.eventName}
                venue={event.venue}
                eventType={event.eventType}
                imageUrl={event.imageUrl}
            />
            ))
        ) : (
            <h2>No events Matched your search  :(</h2>
        )}
    </div>
    </div>
  );
}

export default EventContainer;
