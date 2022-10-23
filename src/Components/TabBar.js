import MenuIcon from "./MenuIcon";
import AddIcon from "./AddIcon";
import SettingsIcon from "./SettingsIcon";

export default function TabBar() {
  return (
    <div className="px-4 py-5 flex justify-between items-center">
      <MenuIcon />
      <AddIcon />
      <SettingsIcon />
    </div>
  );
}
