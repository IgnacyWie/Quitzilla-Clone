const moment = require("moment");

export default function getTimeSince(time_string) {
  const now = moment();
  const time = moment(time_string);

  const difference = now.diff(time, "seconds");
  const differenceMinutes = now.diff(time, "minutes");
  const differenceHours = now.diff(time, "hours");
  const differenceDays = now.diff(time, "days");
  const differenceMonths = now.diff(time, "months");
  const differenceYears = now.diff(time, "years");

  const seconds = difference - differenceMinutes * 60;
  const minutes = differenceMinutes - differenceHours * 60;
  const hours = differenceHours - differenceDays * 24;
  const days = differenceDays - differenceMonths * 30;
  const months = differenceMonths - differenceYears * 12;

  var baseString = `${minutes}m ${seconds}s`;

  if (differenceHours > 0) {
    baseString = `${hours}h ${baseString}`;
  }
  if (differenceDays > 0) {
    baseString = `${days}d ${baseString}`;
  }
  if (differenceMonths > 0) {
    baseString = `${months}m ${baseString}`;
  }
  return {
    string: baseString,
    difference: difference,
  };
}
