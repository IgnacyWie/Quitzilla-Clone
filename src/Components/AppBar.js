import { Link } from "react-router-dom";
import BackIcon from "./BackIcon";

export default function AppBar(props) {
  return (
    <div className="flex flex-col pt-6 justify-between">
      <Link to="/" className="flex items-center h-6">
        <BackIcon />
        <h1 className="text text-red-500">Summary </h1>
      </Link>
      <h1 className="px-5 text-4xl font-semibold pb-3">Add</h1>
      <div className="pr-3 w-8" />
    </div>
  );
}
