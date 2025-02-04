import React, { useState } from "react";
import { searchUsers } from "../services/api.js";
import "../styles/searchbox.css";

/**
 * SearchBox Component
 * @component
 * @description A search input field to find GitHub users and display 
 * search results. Users can select a result to navigate to their details.
 *
 * @param {Function} onSelect - Callback function triggered when a user 
 * is selected from the search results.
 */
const SearchBox = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Handles the search request to fetch users from GitHub API.
   * Updates the search results state on success or sets an error on failure.
   */
  const handleSearch = async () => {
    if (!query) return;
    try {
      console.log("Fetching users...");
      const { data } = await searchUsers(query);
      console.log("API Response:", data);
      setResults(data.items);
      setError(null);
    } catch (error) {
      console.error("API Error:", error);
      setError("Failed to load search results");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub Users"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      {error && <p className="error">{error}</p>}
      <ul className="search-results">
        {results.map((user) => (
          <li key={user.id} onClick={() => onSelect(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;




