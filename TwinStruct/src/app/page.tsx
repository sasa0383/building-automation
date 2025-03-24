// This is the main page of the application. It contains the main components of the application such as the NavBar, Graph, ImageSlider, PieChart, DonutChart, SpreadsheetImporter, TemperatureReadings, PowerConsumptionReadings, ActivityReadings. It also contains the logic to send an email when the conditions are met.


"use client";
import {
  Visualizations,
  ImageSlider,
  NavBar,
  PieChart,
  DonutChart,
  SpreadsheetImporter,
  TemperatureReadings,
  PowerConsumptionReadings,
  ActivityReadings,
  RoomTemperatureChart,
} from "@/components";
import { useData } from "@/context";
import { Tab, Tabs } from "@nextui-org/react";
import { useEffect } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { GiPowerLightning } from "react-icons/gi";
import { checkConditionsAndSendEmail } from "@/utils";
import { roomTemperatureOutsidetempData } from "@/fixtures";

export default function HomePage() {
  const { data } = useData();

  useEffect(() => {
    checkConditionsAndSendEmail(data);
  }, [data]);

  const tabs = [
    {
      id: "temperature",
      label: "Room temperature",
      icon: <FaTemperatureHigh />,
      content: (
        <div className="flex w-full">
          <div className="flex w-1/3 flex-col pr-3">
            <div>
              <TemperatureReadings data={data.roomTemperature} />
            </div>
            <div className="py-5">
              <RoomTemperatureChart
                graphHeader="Room & Outside Temperature"
                contextData={data.roomTemperature}
                staticData={roomTemperatureOutsidetempData}
                className=""
              />
            </div>
          </div>
          <Visualizations
            graphHeader="Room temperature"
            className="w-2/3"
            data={data.roomTemperature}
          />
        </div>
      ),
    },
    {
      id: "Window activity",
      label: "Window activity",
      icon: <FiActivity />,
      content: (
        <div className="flex w-full">
          <div className="flex w-1/3 flex-col pr-3">
            <div>
              <ActivityReadings data={data.windowActivity} />
            </div>
            <div className="py-5">
              <PieChart data={data.windowActivity} />
            </div>
          </div>
          <Visualizations
            graphHeader="Window Activity"
            className="w-2/3"
            data={data.windowActivity}
          />
        </div>
      ),
    },
    {
      id: "power",
      label: "Power consumption",
      icon: <GiPowerLightning />,
      content: (
        <div className="flex w-full">
          <div className="flex w-1/3 flex-col pr-3">
            <div>
              <PowerConsumptionReadings data={data.powerConsumption} />
            </div>
            <div className="py-5">
              <DonutChart />
            </div>
          </div>
          <Visualizations
            graphHeader="Power consumption"
            className="w-2/3"
            data={data.powerConsumption}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <NavBar />

      <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c] p-12">
        <div className="py-8">
          <SpreadsheetImporter />
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              color="primary"
              variant="bordered"
              items={tabs}
            >
              {(item) => (
                <Tab
                  key={item.id}
                  title={
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  }
                >
                  {item.content}
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
        <div className="py-8">
          <ImageSlider />
        </div>
      </main>
    </>
  );
}
