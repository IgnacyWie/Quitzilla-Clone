import MenuIcon from "./MenuIcon";
import AddIcon from "./AddIcon";
import SettingsIcon from "./SettingsIcon";
import { Link } from "react-router-dom";

export default function TabBar() {
  return (
    <div className="px-4 py-5 flex justify-between items-center">
      <MenuIcon />
      <Link to="/add">
        <AddIcon />
      </Link>
      <SettingsIcon />
    </div>
  );
}
