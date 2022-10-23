import goals from "./goals";

export default function getCurrentGoal(difference) {
  if (difference > 0) {
    var suitableGoals = [];
    goals.forEach((goal) => {
      if (goal.seconds > difference) {
        suitableGoals.push(goal);
      }
    });
    return (suitableGoals[0]);
  }
}
