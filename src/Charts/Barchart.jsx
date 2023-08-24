import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Items", "Receive", "Issue", "Remaining"],
  ["Cement-Bags", 1000, 400, 200],
  ["Stone Blast", 1170, 460, 250],
  ["Sand", 660, 1120, 300],
  ["Crush", 1030, 540, 350],
  ["Large Stone", 1030, 540, 350],
  ["Brick Khanger", 1030, 540, 350],
  ["Blocks", 1030, 540, 350],
  ["Block A Class", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Performance",
    subtitle: "Karachi Relief Trust",
  },
  colors: ['blue', 'red', 'green'],
};

export default function BarChart() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="Bar"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
