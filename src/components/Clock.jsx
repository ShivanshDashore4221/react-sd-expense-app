import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #182338;
  border: 1px solid #22304a;
  border-radius: 20px;
  font-variant-numeric: tabular-nums;
  font-size: 0.95rem;
  color: #e8edf6;
`;

// function formatTime(date) {
//   return date.toLocaleTimeString("en-IN", { hour12: false });
// }

function formatTime(date) {
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

const Clock = () => {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);
    return () => {
      console.log("Cleaning up the clock interval");
      clearInterval(intervalId);
    };
  }, []);

  return <ClockPill>{formatTime(currTime)}</ClockPill>;
};

export default Clock;
