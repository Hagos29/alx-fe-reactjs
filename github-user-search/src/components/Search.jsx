import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (event) => {
    event.preventDefault();
    if (!username) return;
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <form onSubmit={fetchUserData} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {user && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg text-center">
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-2 text-xl font-semibold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;