import React, { useState, useEffect } from "react";
import "./Timer.css";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeUp, setTimeUp] = useState("");
  const [deadline, setDeadline] = useState(new Date("Dec 31, 2023 21:00:00").getTime());

  useEffect(() => {
    const count = () => {
      const now = new Date().getTime();
      const t = deadline - now;

      if (t >= 0) {
        const dd = Math.floor(t / (1000 * 60 * 60 * 24));
        const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((t % (1000 * 60)) / 1000);

        setDays(dd < 10 ? "0" + dd : dd);
        setHours(hh < 10 ? "0" + hh : hh);
        setMinutes(mm < 10 ? "0" + mm : mm);
        setSeconds(ss < 10 ? "0" + ss : ss);
      } else {
        clearInterval(x);
        setTimeUp("TIME IS UP");
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    };

    const x = setInterval(count, 1000);

    return () => clearInterval(x); // Cleanup interval on component unmount
  }, [deadline]);

  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
