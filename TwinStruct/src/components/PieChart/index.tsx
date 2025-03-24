//This file contains the PieChart component which is used to display the distribution of the window activity.

"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { calculateActivityDistribution } from "@/utils";

ChartJS.register(ArcElement, ChartJSTooltip, ChartJSLegend);

export const PieChart = ({ data }: any) => {
  const distribution = calculateActivityDistribution(data);

  const chartData = {
    labels: distribution.map((d) => `Activity ${d.activity}`),
    datasets: [
      {
        data: distribution.map((d) => d.percentage),
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card isHoverable>
      <CardHeader className="justify-start">
        <span className="text-large">Window Activity Distribution</span>
      </CardHeader>
      <CardBody className="p-0">
        <Pie
          data={chartData}
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
