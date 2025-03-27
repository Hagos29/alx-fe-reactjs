import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/search";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
