import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Unit", "Cement", "Stone", "Sand", "Crush", "Blocks", "A class Block"],
  ["2004", 1000, 400, 300, 200, 700, 100],
  ["2005", 1170, 460, 500, 300, 800, 150],
  ["2006", 660, 1120, 200, 100, 400, 50],
  ["2007", 1030, 540, 400, 250, 600, 75],
];

export const options = {
  title: "Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%" // Set width to 100% for full viewport width
      height="40vh" // Set height to 100vh for full viewport height
      data={data}
      options={options}
    />
  );
}
