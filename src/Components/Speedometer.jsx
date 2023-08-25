import React, { useState, useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedometer = () => {
  const initialSpeedValues = [0, 0, 0]; // Initial speed values
  const targetSpeedValues = [10, 45, 90]; // Target speed values
  const segmentColors = ['#b3e0f5', '#4da6ff', '#0074e0', '#003566']; // Light blue shades

  const speedometerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px', // Margin between speedometers
    marginLeft: '30px', // Margin from left
  };

  const speedometerStyle = {
    width: '300px', // Adjust the width for larger speedometers
  };

  const [speedValues, setSpeedValues] = useState(initialSpeedValues);

  useEffect(() => {
    const transitionDuration = 1000; // Duration of the transition in milliseconds

    const updateSpeedValues = () => {
      const newSpeedValues = speedValues.map((currentValue, index) => {
        const difference = targetSpeedValues[index] - currentValue;
        const step = difference / (transitionDuration / 100);
        return Math.min(currentValue + step, targetSpeedValues[index]);
      });

      setSpeedValues(newSpeedValues);

      if (newSpeedValues.some((value, index) => value < targetSpeedValues[index])) {
        requestAnimationFrame(updateSpeedValues);
      }
    };

    requestAnimationFrame(updateSpeedValues);
  }, []); // This effect runs only once after the initial render

  return (
    <div>
      <h2 style={{ marginLeft: '20px' }}>Progress Bar</h2>
      <div style={speedometerContainerStyle}>
        {speedValues.map((speed, index) => (
          <div key={index} style={speedometerStyle}>
            <h3 style={{ textAlign: 'center' }}>
              {index === 0 ? 'Layout' : index === 1 ? 'Excavation' : 'Stone Blast' }
            </h3>
            <ReactSpeedometer
              minValue={0}
              maxValue={100}
              value={speed}
              segmentColors={segmentColors}
              needleColor="steelblue"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speedometer;