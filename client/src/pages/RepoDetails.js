import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepoDetails } from "../services/api.js";
import "../styles/repodetails.css";

/**
 * RepoDetails Component
 * @component
 * @description Displays details of a GitHub repository, including its 
 * description, creation date, last update, and recent commits.
 */
const RepoDetails = () => {
  const { username, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Fetch repository details and latest commits when the component mounts.
   */
  useEffect(() => {
    if (!repo) {
      console.error("❌ Error: Repo name is undefined.");
      setError("Repository name is missing.");
      return;
    }

    console.log(`🔍 Fetching repo details for: ${username}/${repo}`);

    getRepoDetails(username, repo)
      .then(({ data }) => {
        console.log("✅ Repo data received:", data);
        setRepoDetails(data);
        setCommits(data.commits); // Set the last 5 commits
      })
      .catch((error) => {
        console.error("❌ Error fetching repo:", error.message);
        setError("Repository not found.");
      });
  }, [username, repo]);

  if (error) return <p>{error}</p>;
  if (!repoDetails) return <p>Loading...</p>;

  return (
    <div>
      <h1>{repoDetails.name}</h1>
      <p>{repoDetails.description}</p>
      <p>
        <strong>Created at:</strong>{" "}
        {new Date(repoDetails.created_at).toLocaleDateString()}
      </p>
      <p>
        <strong>Last updated:</strong>{" "}
        {new Date(repoDetails.updated_at).toLocaleDateString()}
      </p>
      <p>
        <a 
          href={repoDetails.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>

      <h2>Last 5 Commits:</h2>
      <ul>
        {commits.length > 0 ? (
          commits.map((commit, index) => (
            <li key={index}>
              <strong>Message:</strong> {commit.commit.message} <br />
              <strong>Author:</strong> {commit.commit.author.name} <br />
              <strong>Date:</strong>{" "}
              {new Date(commit.commit.author.date).toLocaleString()}
            </li>
          ))
        ) : (
          <p>No recent commits found.</p>
        )}
      </ul>
    </div>
  );
};

export default RepoDetails;









