import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddView from "./Views/AddView";
import LoginView from "./Views/LoginView";

import "./App.css";
import SummaryView from "./Views/SummaryView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SummaryView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/add" element={<AddView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
