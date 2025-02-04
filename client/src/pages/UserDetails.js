import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserDetails } from "../services/api.js";
import "../styles/userdetails.css";

/**
 * UserDetails Component
 * 
 * Fetches and displays user details from GitHub API.
 * Shows username, avatar, bio, and a list of repositories.
 * Handles loading and error states.
 *
 * @returns {JSX.Element} User details page
 */
const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Fetch user details on component mount
  useEffect(() => {
    getUserDetails(username)
      .then(({ data }) => setUser(data))
      .catch((error) => {
        console.error("❌ Error fetching user details:", error.message);
        setError("User not found.");
      });
  }, [username]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <p>{user.bio}</p>

      <h2>Repositories:</h2>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${username}/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;





