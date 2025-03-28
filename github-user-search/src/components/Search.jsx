import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUserData = async (event, loadMore = false) => {
    event.preventDefault();
    if (!username) return;
    setLoading(true);
    setError(null);
    if (!loadMore) setUsers([]);

    try {
      const response = await axios.get(`https://api.github.com/search/users`, {
        params: { q: `${username} in:login location:${location}`, per_page: 5, page },
      });
      const fetchedUsers = response.data.items;
      setUsers((prevUsers) => (loadMore ? [...prevUsers, ...fetchedUsers] : fetchedUsers));
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <form onSubmit={(e) => fetchUserData(e)} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-700">Location (Optional)</label>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full p-2 border rounded-lg mb-4"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700">Minimum Repositories (Optional)</label>
        <input
          type="number"
          placeholder="Enter min repo count"
          className="w-full p-2 border rounded-lg mb-4"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {users.length > 0 && (
        <div className="mt-6 w-full max-w-md bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Search Results:</h3>
          {users.map((user) => (
            <div key={user.id} className="flex items-center p-3 border-b">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-md font-bold">{user.login}</h4>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
          <button
            className="w-full bg-gray-800 text-white p-2 rounded-lg mt-4"
            onClick={(e) => {
              setPage(page + 1);
              fetchUserData(e, true);
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
