import AddHabitCard from "../Components/AddHabitCard";
import AddIcon from "../Components/AddIcon";
import AppBar from "../Components/AppBar";
import BackIcon from "../Components/BackIcon";
import TabBar from "../Components/TabBar";
import {
  FaBeer,
  FaLaptop,
  FaLeaf,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

export const available_habits = [
  {
    name: "Weed",
    icon: <FaLeaf />,
  },
  {
    name: "Procrastination",

    icon: <FaLaptop />,
  },
  {
    name: "Alcohol",
    icon: <FaBeer />,
  },
  {
    name: "Compulsive Shopping",
    icon: <FaShoppingCart />,
  },
];

export default function AddView() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-between">
      <div>
        <AppBar title="Add" />
        <ul className="px-5 text-2xl flex flex-col items-center">
          <div className="w-full">
            {available_habits.map((habit) => (
              <AddHabitCard name={habit.name} icon={habit.icon} />
            ))}
            <AddHabitCard name={"Custom Habit"} icon={<FaPlus />} />
          </div>
        </ul>
      </div>
      <TabBar />
    </div>
  );
}
