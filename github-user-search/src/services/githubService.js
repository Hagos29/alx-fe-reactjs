VITE_APP_GITHUB_API_KEY
const GITHUB_API_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubData = async (endpoint) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${endpoint}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch data from GitHub API");
    }

    return await response.json();
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
};
