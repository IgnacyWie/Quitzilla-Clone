import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import getCurrentGoal from "../Services/getCurrentGoal";
import getTimeSince from "../Services/getTimeSince";
import { available_habits } from "../Views/AddView";
import SampleIcon from "./SampleIcon";

export default function HabitCard(props) {
  const [time, setTime] = useState("");
  const [difference, setDifference] = useState(0);
  const [currentGoal, setCurrentGoal] = useState({});

  useEffect(() => {
    const result = getTimeSince(props.time_since);
    setTime(result.string);
    setDifference(result.difference);

    setInterval(() => {
      setTime(getTimeSince(props.time_since).string);
    }, 1000);
  }, [props.time_since]);

  useEffect(() => {
    setCurrentGoal(getCurrentGoal(difference));
    console.log(currentGoal);
  }, [difference, currentGoal]);

  return (
    <div className="w-full bg-white rounded-xl shadow-sm flex py-2 pb-5 px-5 space-x-2">
      <div className="w-10 h-10 pt-2">
        <SampleIcon />
      </div>
      <div className="w-full space-y-2 pt-3">
        <h2 className="font-bold">{props.name}</h2>
        <div className="pt-2 font-semibold">
          <h3 className="text-xs text-gray-500">Abstinence Time</h3>
          <h3 className="">{time}</h3>
        </div>
        <div className="font-semibold w-full">
          <div className="flex w-full justify-between pb-1">
            <h3 className="text-xs font-semibold">Current Goal:</h3>
            {currentGoal && (
              <h3 className="text-xs font-semibold">{currentGoal.name}</h3>
            )}
          </div>
          {currentGoal && (
            <ProgressBar value={difference / currentGoal.seconds} />
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(props.value * 100);
    console.log(percentage);
  }, []);

  if (percentage > 0) {
    return (
      <div className="w-full h-2 bg-gray-100 rounded-full">
        <div
          className="rounded-full h-2 bg-red-400"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    );
  } else {
    return <> </>;
  }
}
