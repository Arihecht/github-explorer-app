import axios from "axios";

const API_URL = "http://localhost:5000/api/github";

/**
 * @function searchUsers
 * @description Fetches GitHub users based on a search query.
 * @param {string} query - Search term for GitHub users.
 * @returns {Promise} Axios response promise with user data.
 */
export const searchUsers = (query) =>
  axios.get(`${API_URL}/search?q=${query}`);

/**
 * @function getUserDetails
 * @description Fetches details of a specific GitHub user.
 * @param {string} username - GitHub username.
 * @returns {Promise} Axios response promise with user details.
 */
export const getUserDetails = (username) =>
  axios.get(`${API_URL}/user/${username}`);

/**
 * @function getRepoDetails
 * @description Fetches details of a specific GitHub repository.
 * @param {string} username - Owner of the repository.
 * @param {string} repo - Repository name.
 * @returns {Promise} Axios response promise with repo details.
 */
export const getRepoDetails = (username, repo) =>
  axios.get(`${API_URL}/repo/${username}/${repo}`);








