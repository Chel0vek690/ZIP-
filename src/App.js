import React from 'react';
import Home from './pages/Home';
import Login from './pages/login';
import Registration from './pages/Registration';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
