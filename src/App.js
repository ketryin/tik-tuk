import React from "react";
import { Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Timeline />} />
        <Route path="/profile/:name" exact restricted element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
