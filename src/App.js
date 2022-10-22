import logo from "./logo.svg";
import "./App.css";
import HabitCard from "./Components/HabitCard";
import AddIcon from "./Components/AddIcon";
import MenuIcon from "./Components/MenuIcon";
import SettingsIcon from "./Components/SettingsIcon";
import { useEffect, useState } from "react";
import supabase from "./Services/supabase";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function test() {
      const { data, error } = await supabase.from("habits").select();
      console.log(data);
      setHabits(data);
    }
    test();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-between">
      <div className="px-4">
        <h1 className="text-4xl font-semibold pt-12 pb-8">Summary</h1>
        <div className="space-y-3">
          {habits.map((habit) => (
            <HabitCard
              name={habit.name}
              time="5d 2h 23m 43s"
              progress="0.25"
              time_since={habit.last_relapse}
              goal="10 days"
            />
          ))}
        </div>
      </div>
      <div className="px-4 py-5 flex justify-between items-center">
        <MenuIcon />
        <AddIcon />
        <SettingsIcon />
      </div>
    </div>
  );
}

export default App;
