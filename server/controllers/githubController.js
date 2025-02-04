const axios = require("axios");

const GITHUB_API = "https://api.github.com";

/**
 * Searches for GitHub users based on a query parameter.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const searchUser = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`${GITHUB_API}/search/users?q=${q}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Error fetching users" });
  }
};

/**
 * Fetches details of a specific GitHub user, including their repositories.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserDetails = async (req, res) => {
  try {
    const { username } = req.params;
    const userResponse = await axios.get(`${GITHUB_API}/users/${username}`);
    const reposResponse = await axios.get(`${GITHUB_API}/users/${username}/repos`);
    res.json({ ...userResponse.data, repos: reposResponse.data });
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    res.status(500).json({ message: "Error fetching user details" });
  }
};

/**
 * Fetches repository details and the last 5 commits for a given repository.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getRepoDetails = async (req, res) => {
  try {
    const { username, repo } = req.params;
    const repoUrl = `${GITHUB_API}/repos/${username}/${repo}`;
    const commitsUrl = `${GITHUB_API}/repos/${username}/${repo}/commits?per_page=5`;

    console.log("🔍 Fetching repo details:", repoUrl);
    console.log("🔍 Fetching last 5 commits:", commitsUrl);

    const repoResponse = await axios.get(repoUrl);
    const commitsResponse = await axios.get(commitsUrl);

    console.log("✅ Repo details fetched successfully.");
    res.json({ ...repoResponse.data, commits: commitsResponse.data });
  } catch (error) {
    console.error("❌ Error fetching repository details:", error.message);
    res.status(500).json({
      message: "Error fetching repository details",
      error: error.message,
      details: error.response?.data || "No additional details"
    });
  }
};

module.exports = { searchUser, getUserDetails, getRepoDetails };


