import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
    title: "Cement-Bags",
    subtitle: "Karachi Relief Trust",
  },
  colors: ["blue", "red", "green"],
};

export default function BarChart2() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={data}
          options={options}
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 1) {
                  openModal();
                }
              },
            },
          ]}
        />
      </div>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", maxWidth: "800px", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
          <h2 id="modal-title">Modal Chart</h2>
          <div style={{ width: "50%", height: "300px" }}>
            
          </div>
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
