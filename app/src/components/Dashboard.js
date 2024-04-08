import React, { Component} from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome 5
import CardProfile from './CardProfile';
import './dashboard.css'
import EventContainer from './EventContainer';
import LineGraph from './LineGraph';
import data from './Userdata';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  closeMenu = () => {
    // Define closeMenu function logic here
  };

  openMenu = () => {
    // Define openMenu function logic here
  };
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
    // Perform any other actions based on the search query if needed
  };
 

  

  render() {
    return (
      <div>
       
        <div className="dashboard-container">
          <div className="left-frame">
            <CardProfile />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <LineGraph data={data} />
          </div>
          <div className="right-frame">
            {/* Add your events content here */}
            <h1>Welcome to Your Dashboard</h1>
            <body className="darkmode">
              <div className="content">
                <div className="left-content">
                    <div className="search-and-check">
                        <form className="search-box">
                            <input type="text" id="searchBox"  placeholder="Search event..." value={this.state.searchQuery} onChange={this.handleSearchChange} />                           
                            <i className="fas fa-search"></i>
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
            <h1>Events</h1>
            <EventContainer searchQuery={this.state.searchQuery} />
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;