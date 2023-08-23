import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Cement-bags", "Hours per Day"],
  ["Cement-bags", 11],
  ["Stone Blast", 2],
  ["Sand", 2],
  ["Crush", 2],
  ["Blocks", 7], 
  ["Blocks A class", 7], 

  // CSS-style declaration
];

export const options = {
  title: "Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
