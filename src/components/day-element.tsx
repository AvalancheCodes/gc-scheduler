import React, { useState, useEffect } from "react";
import Day from "../model/day";
import moment from "moment";

interface IDayProps {
  day: Day;
  // Set to true if an empty day should be rendered
  isEmpty: boolean;
}

const dayButtonClicked = (event: any) => {
  console.log(event.target);
};

const DayElement: React.FC<IDayProps> = ({ day, isEmpty }) => {
  const liRef = React.createRef<HTMLLIElement>();

  useEffect(() => {
    // Set the width and the height of liRef to be the same
    if (liRef.current) {
      liRef.current.style.height = liRef.current.clientWidth + "px";
      if (!isEmpty) {
        liRef.current.style.cursor = "pointer";
        liRef.current.classList.add("cal-day", "text-center");
      }

      const enable =
        day.hasAvailability && moment(day.date).isAfter(Date.now());
      console.log("day.hasAvailability", enable);
      if (enable) {
        //&& !moment(day.date).isBefore(Date.now())
        liRef.current.classList.add("cal-day--available");
      }
    }
  }, [liRef.current]);

  return (
    <li ref={liRef}>
      {!isEmpty ? (
        <a onClick={dayButtonClicked} className="text-decoration-none">
          <span className="px-0">{moment(day.date).format("D")}</span>
        </a>
      ) : (
        <span> </span>
      )}
    </li>
  );
};

export default DayElement;
