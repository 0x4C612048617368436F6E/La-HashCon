import React from "react";

const SmallerCalendar = (prop: any) => {
  return (
    <div
      key={`${prop.weekIdx}-${prop.dayIdx}`}
      className={`w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer
            ${
              prop.val.date === new Date().getDate() && prop.val.isCurrentMonth
                ? ""
                : "hover:bg-gray-300"
            } ${
              prop.val.date === new Date().getDate() && prop.val.isCurrentMonth
                ? "bg-blue-600 text-white"
                : ""
            } ${!prop.val.isCurrentMonth ? "text-gray-400" : "text-black"}`}
      onClick={() => prop.renderMonthInLargerArea(prop.weekIdx)}
    >
      {prop.val.date || ""}
    </div>
  );
};

export default SmallerCalendar;
