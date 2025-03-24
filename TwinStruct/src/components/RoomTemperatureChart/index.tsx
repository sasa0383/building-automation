// This component is used to display the visualisation of the data in form of grahs.


"use client";
import React, { useMemo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type TChart = {
  graphHeader: string;
  contextData?: any;
  staticData: any;
  className?: string;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const RoomTemperatureChart = ({
  graphHeader,
  contextData = [],
  staticData,
  className,
}: TChart) => {
  const chartData = useMemo(() => {
    const labels = Array.from(
      new Set([
        ...contextData?.map((item: any) => item.Time),
        ...staticData?.map((item: any) => item.time),
      ]),
    ).sort();

    const contextDataSet = {
      label: "Room Temperature",
      data: labels?.map(
        (label: string) =>
          contextData.find((item: any) => item.Time === label)?.TEMPERATURE ||
          null,
      ),
      borderColor: "#33A6FF",
      fill: true,
    };

    const fixedDataSet = {
      label: "Outside Temperature",
      data: labels?.map(
        (label: string) =>
          staticData.find((item: any) => item.time === label)?.temperature ||
          null,
      ),
      borderColor: "rgb(255, 159, 64)",
      fill: true,
    };

    return {
      labels,
      datasets: [contextDataSet, fixedDataSet],
    };
  }, [contextData, staticData]);

  return (
    <Card isHoverable className={className}>
      <CardHeader className="justify-start">
        <span className="text-large">{graphHeader}</span>
      </CardHeader>
      <CardBody className="p-0">
        <Line
          data={chartData}
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
            scales: {
              x: {
                display: true,
              },
              y: {
                display: true,
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
