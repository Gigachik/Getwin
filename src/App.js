import "./App.css";
import Home from "components/home/Home";
import Profile from "components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import routesByName from "./constants/routesByName";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path={routesByName.home} element={<Home />} />
          <Route path={routesByName.pokemonsProfile} element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
