// This component is used to display the donut chart in the dashboard 

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
} from "chart.js";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

ChartJS.register(ArcElement, ChartJSTooltip, ChartJSLegend);

export const DonutChart = () => {
  const data = {
    labels: ["Water Heating", "Devices", "Lighting", "Room Heating"],
    datasets: [
      {
        data: [15, 11, 14, 70],
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF6347"],
        borderColor: ["#FFFFFF"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card isHoverable>
      <CardHeader className="justify-start">
        <span className="text-large">Subdivision of Energy Consumption</span>
      </CardHeader>
      <CardBody className="p-0">
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                align: "start",
                labels: {
                  boxHeight: 12,
                  boxWidth: 12,
                  useBorderRadius: true,
                  borderRadius: 3,
                },
              },
              tooltip: {
                mode: "index",
                callbacks: {
                  label: function (tooltipItem) {
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                  },
                },
              },
            },
          }}
        />
      </CardBody>
    </Card>
  );
};
