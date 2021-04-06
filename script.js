//Determine number of days until vacation

const todayDate = new Date();
const summerBreak= new Date('June 4, 2021');
const schoolOut = new Date('May 27, 2021');
const beachTrip = new Date('July 8, 2021');


const timeConst = 1000 * 60 * 60 * 24;


const timeUntilSchoolOut = schoolOut.getTime() - todayDate.getTime();
const timeUntilSummerBreak = summerBreak.getTime() - todayDate.getTime();


const daysUntilSchoolOut = Math.ceil(timeUntilSchoolOut / timeConst);
const daysUntilSummerBreak = Math.ceil(timeUntilSummerBreak / timeConst);



document.getElementById('school-out').innerHTML = daysUntilSchoolOut;
document.getElementById('summer-break').innerHTML = daysUntilSummerBreak;

