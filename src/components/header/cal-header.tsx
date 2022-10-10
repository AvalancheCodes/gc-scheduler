import React from "react";
import moment from "moment";
import Week from "../../model/week";
import Day from "../../model/day";

const CalHeader: React.FC<{ week: Week }> = ({ week }) => {
  return (
    <>
      {week.childrenDays.map((day: Day, index: any) => {
        return (
          <div className="weekday" key={index}>
            <span className="btn text-muted fw-normal px-1">
              {moment(day.date).format("ddd")}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default CalHeader;
