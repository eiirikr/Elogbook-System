import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));
  const [date, setDate] = useState(moment().format("MMMM D, YYYY"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss A"));
      setDate(moment().format("MMMM D, YYYY"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h2>{time}</h2>
      <p>{date}</p>
    </div>
  );
};

export default Timer;
