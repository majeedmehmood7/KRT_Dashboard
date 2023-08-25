import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Region", "Value"],
  ["Sindh", 200],
  ["Punjab", 300],
  ["Khyber Pakhtunkhwa", 400],
  ["Balochistan", 500],
  ["Gilgit-Baltistan", 600],
  ["Azad Kashmir", 700],
];

export function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1][0];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        region: "PK", // Set the region to Pakistan
        displayMode: "regions",
        resolution: "provinces",
      }}
    />
  );
}
 