import supabase from "../Services/supabase";
import { Link } from "react-router-dom";

export default function AddHabitCard(props) {
  if (!props.custom) {
    return (
      <button className="flex w-full" onClick={() => AddHabit(props.name)}>
        <Link to="/" className="w-full">
          <li className="py-4 pl-4 w-full space-x-5 flex items-center shadow rounded-xl">
            <div className="text-red-500">{props.icon}</div>
            <h1 className="text-xl">{props.name}</h1>
          </li>
        </Link>
      </button>
    );
  }
}

async function AddHabit(habit) {
  const { error } = await supabase.from("habits").insert({ name: habit });
}
