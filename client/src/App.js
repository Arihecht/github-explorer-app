import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import UserDetails from "./pages/UserDetails.js";
import RepoDetails from "./pages/RepoDetails.js";

/**
 * @component App
 * @description Main application component that defines routes
 *              and renders corresponding pages.
 * @returns {JSX.Element} The application router.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/repo/:username/:repo" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;




