import { ListOfDates } from "@/types";

const calendarLogic = (
  year: any = new Date().getFullYear(),
  month: any = new Date().getMonth()
) => {
  let days: any = [];
  let dayOfTheWeek = new Date(year, month, 1).getDay();

  //get day of previous month
  let numOfDaysPrevMonth = new Date(year, month, 0).getDate();

  //get the number of days in the month
  let numOfDays = new Date(year, month + 1, 0).getDate();

  //get previous days in last month
  for (let i = dayOfTheWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, numOfDaysPrevMonth - i).getDate(),
      isCurrentMonth: false,
    });
  }

  //Add number of days in the  month to array
  for (let i = 1; i <= numOfDays; i++) {
    days.push({
      date: new Date(year, month, i).getDate(),
      isCurrentMonth: true,
    });
  }

  //finally add day for next month
  let j = 1;
  while (days.length != 42) {
    days.push({
      date: new Date(year, month + 1, j).getDate(),
      isCurrentMonth: false,
    });
    j++;
  }
  //creat nested array and return that (we must always have 42 items)
  let actualVal = [];
  let innerValue: ListOfDates[];
  for (let i = 0; i < 6; i++) {
    innerValue = [];
    for (let j = 0; j < 7; j++) {
      innerValue.push(days[j + i * 7]);
    }
    actualVal.push(innerValue);
  }
  return actualVal;
};

export default calendarLogic;
