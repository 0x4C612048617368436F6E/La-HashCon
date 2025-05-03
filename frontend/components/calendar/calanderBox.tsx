import React from "react";

const CalendarBox = (prop: any) => {
  return (
    <div
      className={`w-full h-12
        ${prop.row === 0 ? "border-l border-l-gray-400" : "border border-gray-400"}
      ${prop.row === 0 ? "border-r border-r-gray-400" : "border border-gray-400"}
      ${prop.row === 0 ? "h-20" : ""}
      `}
    >
      <h6 className="text-[10px]">{prop.item}</h6>
    </div>
  );
};

export default CalendarBox;
