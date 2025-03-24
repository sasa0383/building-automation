// This file contains the code for the room temperature chart

"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type TChart = {
  graphHeader: string;
  className?: any;
  data: any;
  isCustomTemperature?: boolean;
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const setLegendSpacingPlugin = [
  {
    id: "increase-legend-spacing",
    beforeInit(chart: any) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 12;
      };
    },
  },
];

export const setLegendStyle = {
  position: "top" as const,
  align: "start" as const,
  labels: {
    boxHeight: 12,
    boxWidth: 12,
    useBorderRadius: true,
    pointStyle: "rectRounded",
    borderRadius: 3,
  } as const,
};

export const Visualizations = ({
  graphHeader,
  data,
  className,
  isCustomTemperature,
}: TChart) => {
  const chartData = {
    labels: data?.map((item: any) => item.Time),
    datasets: [
      {
        label: graphHeader,
        data: data.map((item: any) =>
          parseFloat(
            item.TEMPERATURE ||
              item["POWER CONSUMPTION"] ||
              item["Window activity"],
          ),
        ),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const datasets = data?.map((dataset: any) => ({
    label: dataset?.label,
    data: dataset?.values?.map((item: any) => parseFloat(item?.value)),
    borderColor: dataset?.color,
    backgroundColor: dataset?.backgroundColor,
  }));

  const customChartData = {
    labels: data[0]?.values?.map((item: any) => item?.Time),
    datasets,
  };

  return (
    <Card isHoverable className={className}>
      <CardHeader className="justify-start">
        <span className="text-large">{graphHeader}</span>
      </CardHeader>
      <CardBody className="p-0">
        <Line
          plugins={setLegendSpacingPlugin}
          data={isCustomTemperature ? customChartData : chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            animations: {
              tension: {
                duration: 1000,
                easing: "linear",
                from: 0,
                to: 0.4,
              },
            },

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
              },
            },
          }}
        />
      </CardBody>
    </Card>
  );
};
