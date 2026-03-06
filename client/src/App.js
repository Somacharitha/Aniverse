import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Watchlist from "./pages/watchlist";
import Recommendations from "./pages/Recommendations";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>

    </Router>
  );
}

export default App;