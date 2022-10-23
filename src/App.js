import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SummaryView from "./Views/SummaryView";

function App() {
  const [currentHabit, setCurrentHabit] = useState();
  const [habit, setHabit] = useState(false);

  function toggleHabit() {
    setHabit(!habit);
  }

  return <SummaryView toggleHabit={toggleHabit} />;
}

export default App;
