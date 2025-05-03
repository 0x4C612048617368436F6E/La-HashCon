"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import calendarLogic from "./calendarLogic";
import { Days, Month, time } from "@/values/days";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useStore from "@/stores/stores";
import { Tooltip } from "@heroui/tooltip";
import CalendarBox from "./calanderBox";
import SmallerCalendar from "./smallerCalender";

const CalendarComponent = () => {
  const { theme } = useTheme();
  //console.table(calendarLogic());

  const month = useStore((store: any) => store.month);
  const increaseMonth = useStore((store: any) => store.increaseMonth);
  const decreaseMonth = useStore((store: any) => store.decreaseMonth);
  const resetMonth = useStore((store: any) => store.resetMonth);

  //get stuff for larger content
  const daysToRender = useStore((store) => store.daysToRender);
  const setDaysToRender = useStore((store) => store.setDaysToRender);

  console.log(daysToRender);

  const increaseMonthFunc = () => {
    increaseMonth();
  };

  const decreaseMonthFuc = () => {
    decreaseMonth();
  };

  //currentMonth.toString() as unknown as number
  const currentMonth = new Date(new Date().getFullYear(), month).getMonth();

  const currentYear = new Date(new Date().getFullYear(), month).getFullYear();

  const renderMonthInLargerArea = (row: number, column: number) => {
    //so we can pass in just column
    console.log("Row: ", row);
    console.log("Stuff", calendarLogic(new Date().getFullYear(), month));
    console.log(
      "Days to render: ",
      calendarLogic(new Date().getFullYear(), month)[row][column].date
    );
    setDaysToRender("");
    setDaysToRender(
      calendarLogic(new Date().getFullYear(), month)[row][column].date
    );
  };

  useEffect(() => {
    if (month != new Date().getMonth()) {
      resetMonth();
      return;
    }
    let val = calendarLogic(new Date().getFullYear(), month);
    //render for large screen
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (val[i][j].date === new Date().getDay()) {
          console.log("Row: ", i - 1);
          console.log("Column: ", j);
          renderMonthInLargerArea(i - 1, j);
          return;
        }
      }
    }
  }, []);

  return (
    <div className="relative grid grid-cols-1 gap-4">
      {/* Calendar block */}
      <div
        className={`w-1/2 mx-auto ${theme === "dark" ? "bg-white text-black" : "bg-white"} p-6 rounded-lg shadow-md`}
      >
        <div className="flex justify-between">
          <div className="flex">
            <h2 className="text-xl font-bold mb-4 mr-2">
              {Month[currentMonth.toString() as unknown as number]}
            </h2>

            <h2 className="text-xl font-bold mb-4">{currentYear.toString()}</h2>
          </div>

          <div className="flex">
            <Tooltip content="Previous month">
              <span
                className="text-xl font-bold mb-4 mr-5 hover:cursor-pointer"
                onClick={() => decreaseMonthFuc()}
              >
                <IoIosArrowBack />
              </span>
            </Tooltip>

            <Tooltip content="Next month">
              <span
                className="text-xl font-bold mb-4 hover:cursor-pointer"
                onClick={() => increaseMonthFunc()}
              >
                <IoIosArrowForward />
              </span>
            </Tooltip>
          </div>
        </div>

        {/* Days of the week header */}
        {/* Header row (days of the week) */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {Days.map((val) => (
            <div
              key={val.id}
              className="w-10 h-10 flex items-center justify-center font-semibold text-sm"
            >
              {val.value[0]}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {calendarLogic(new Date().getFullYear(), month).map(
            (week: any[], weekIdx: number) =>
              week.map((val: any, dayIdx: number) => (
                <SmallerCalendar
                  weekIdx={weekIdx}
                  dayIdx={dayIdx}
                  val={val}
                  renderMonthInLargerArea={renderMonthInLargerArea}
                />
              ))
          )}
        </div>
      </div>
      {/* Second Column */}
      <div
        className={`${theme === "dark" ? "bg-white text-black" : "bg-white"} p-6 rounded-lg shadow-md`}
      >
        <div className="grid grid-cols-7 gap-1 w-full">
          <div className="h-10 flex items-center justify-center font-semibold text-sm text-center">
            {`${new Date(new Date().getFullYear(), month, Number(daysToRender)).getDay().toString()} 
            ${daysToRender}
            ${new Date(new Date().getFullYear(), month, Number(daysToRender))
              .getFullYear()
              .toString()}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
