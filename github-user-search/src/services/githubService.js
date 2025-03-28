import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch user profile data from GitHub
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - GitHub user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Optional for authentication
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Search GitHub users with advanced filters
 * @param {Object} filters - Filtering criteria (e.g., location, repo count, followers)
 * @returns {Promise<Object>} - Search results from GitHub API
 */
export const searchUsers = async (filters) => {
  try {
    const query = buildSearchQuery(filters);
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Construct a search query string based on provided filters
 * @param {Object} filters - Filtering criteria
 * @returns {string} - Query string for GitHub Search API
 */
const buildSearchQuery = (filters) => {
  let queryParts = [];

  if (filters.username) queryParts.push(`${filters.username} in:login`);
  if (filters.location) queryParts.push(`location:${filters.location}`);
  if (filters.repos) queryParts.push(`repos:>${filters.repos}`);
  if (filters.followers) queryParts.push(`followers:>${filters.followers}`);
  if (filters.language) queryParts.push(`language:${filters.language}`);

  return queryParts.join("+");
};

/**
 * Handle API errors gracefully
 * @param {Object} error - Error object
 */
const handleError = (error) => {
  if (error.response) {
    console.error(`GitHub API Error (${error.response.status}):`, error.response.data);
  } else {
    console.error("Network or unknown error:", error.message);
  }
  throw error;
};
