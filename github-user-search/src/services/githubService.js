import axios from "axios";

const BASE_URL = "https://api.github.com";
const Last_URL = "https://api.github.com/search/users?q"

/**
 * Fetch GitHub user details by username
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - GitHub user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Optional for higher rate limits
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Search for GitHub users using the GitHub Search API
 * @param {Object} filters - Filtering criteria (e.g., location, minRepos, followers)
 * @returns {Promise<Object>} - GitHub user search results
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
 * Build the search query string for GitHub's user search API
 * @param {Object} filters - Filtering options
 * @returns {string} - Search query string
 */
const buildSearchQuery = (filters) => {
  let queryParts = [];

  if (filters.username) queryParts.push(`${filters.username} in:login`);
  if (filters.location) queryParts.push(`location:${filters.location}`);
  if (filters.minRepos) queryParts.push(`repos:>=${filters.minRepos}`);
  if (filters.followers) queryParts.push(`followers:>=${filters.followers}`);
  if (filters.language) queryParts.push(`language:${filters.language}`);

  return queryParts.join("+");
};

/**
 * Handle API errors
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
