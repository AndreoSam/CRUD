import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Redux/Components/Home";
import Create from "../Redux/Components/Create";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default Routing;
