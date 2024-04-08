import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Learn from './components/Learn';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation'; 
import Logout from './components/Logout'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Router>
        <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signin"
            element={<Signin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} // Pass setIsAuthenticated callback
          />
          <Route path="/signup" element={<Signup  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> 
          <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
