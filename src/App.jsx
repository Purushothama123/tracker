import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage/homepage";
import Loginpage from "./Components/loginpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
