import { useData } from "@/context";
import { Button } from "@nextui-org/button";
import React from "react";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

export const SpreadsheetImporter = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { updateData } = useData();
  const fieldsMvts: any = [
    {
      label: "ID",
      key: "ID",
      alternateMatches: ["ID"],
      fieldType: { type: "input" },
      example: "SXHJFKLSO",
      validations: [
        {
          rule: "required",
          errorMessage: "Id is required",
          level: "error",
        },
      ],
    },
    {
      label: "Temperature",
      key: "TEMPERATURE",
      alternateMatches: ["TEMPERATURE"],
      fieldType: { type: "input" },
      example: "18",
    },
    {
      label: "Time",
      key: "Time",
      alternateMatches: ["Time"],
      fieldType: { type: "input" },
      example: "8:00:00 AM",
    },
    {
      label: "Window activity",
      key: "Window activity",
      alternateMatches: ["Window activity"],
      fieldType: { type: "input" },
      example: "1",
    },
    {
      label: "Power consumption",
      key: "POWER CONSUMPTION",
      alternateMatches: ["Power consumption"],
      fieldType: { type: "input" },
      example: "1.2 kWh",
    },
  ];

  const handleImportSubmit = (data: any) => {
    if (data.all.some((item: any) => item.hasOwnProperty("TEMPERATURE"))) {
      updateData("roomTemperature", data.all);
    } else if (
      data.all.some((item: any) => item.hasOwnProperty("Window activity"))
    ) {
      updateData("windowActivity", data.all);
    } else if (
      data.all.some((item: any) => item.hasOwnProperty("POWER CONSUMPTION"))
    ) {
      updateData("powerConsumption", data.all);
    }
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Button
        className="rounded bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 font-bold text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Importer" : "Open Importer"}
      </Button>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        fields={fieldsMvts}
        isNavigationEnabled
        allowInvalidSubmit={true}
        onSubmit={handleImportSubmit}
        tableHook={(data, addError) => {
          addError(0, "reference", {
            message: "This reference doesn't exist",
            level: "error",
          });
          return [...data];
        }}
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};
