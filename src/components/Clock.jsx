import React, { useState, useEffect } from 'react';

const clk_align = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background:'black',
    padding: '10px',
    border: '60px',
    borderRadius: '20px',
    color:"white",
  };
const Clock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={clk_align} >
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Clock;
