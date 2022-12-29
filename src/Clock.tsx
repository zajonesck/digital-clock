import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState<string | undefined>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="Digital">{clockState}</div>;
}

export default Clock;
