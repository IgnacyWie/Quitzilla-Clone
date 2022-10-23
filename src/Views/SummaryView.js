import HabitCard from "../Components/HabitCard";
import AddIcon from "../Components/AddIcon";
import MenuIcon from "../Components/MenuIcon";
import SettingsIcon from "../Components/SettingsIcon";
import { useEffect, useState } from "react";
import supabase from "../Services/supabase";
import TabBar from "../Components/TabBar";

export default function SummaryView() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function test() {
      const { data } = await supabase.from("habits").select();
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
            <HabitCard name={habit.name} time_since={habit.last_relapse} />
          ))}
        </div>
      </div>
      <TabBar />
    </div>
  );
}
