//Determine number of days until vacation

//Today's date
const todayDate = new Date();
//Scheduled dates
const summerBreak = new Date('June 4, 2021');
const schoolOut = new Date('May 27, 2021');
const beachTrip = new Date('July 8, 2021');

//Calculate time until scheduled Date
const timeUntilSchoolOut = schoolOut.getTime() - todayDate.getTime();
const timeUntilSummerBreak = summerBreak.getTime() - todayDate.getTime();
const timeUntilBeach = beachTrip.getTime() - todayDate.getTime();

//Calculate days until event
const calculateDays = time => {
  const timeConst = 1000 * 60 * 60 * 24;
  return Math.ceil(time / timeConst);
};

//Display days until event
document.getElementById('school-out').innerHTML = calculateDays(
  timeUntilSchoolOut
);
document.getElementById('summer-break').innerHTML = calculateDays(
  timeUntilSummerBreak
);
document.getElementById('beach-trip').innerHTML = calculateDays(timeUntilBeach);
