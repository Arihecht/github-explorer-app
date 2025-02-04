/**
 * Home Page Component
 * 
 * @component
 * @description Renders the home page with a search box for GitHub users.
 * Users can enter a GitHub username, and upon selection, navigate to 
 * the user details page.
 */

import React from "react";
import SearchBox from "../components/SearchBox.js";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>GitHub Explorer</h1>
      <SearchBox 
        onSelect={(username) => navigate(`/user/${username}`)} 
      />
    </div>
  );
};

export default Home;




