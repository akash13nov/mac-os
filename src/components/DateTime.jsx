import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setDateTime(formatted.replace(" ", ", "));
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
  return <div>{dateTime}</div>;
};

export default DateTime;
