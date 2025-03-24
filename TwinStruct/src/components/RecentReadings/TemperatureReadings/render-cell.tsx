// This file contains the render cell component for the room temperature readings table.

import { Chip } from "@nextui-org/react";
import React from "react";

export type Temperature = {
  ID: string;
  Time: string;
  TEMPERATURE: number | string;
};

type Props = {
  user: Temperature;
  columnKey: keyof Temperature;
};

export const RenderCell = ({ user, columnKey }: Props) => {
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "ID":
      return <span className="text-white">{cellValue}</span>;
    case "Time":
      return <span className="text-white">{cellValue}</span>;
    case "TEMPERATURE":
      const temperature = Number(cellValue);
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            temperature <= 26
              ? "success"
              : temperature > 26
                ? "danger"
                : "warning"
          }
        >
          {cellValue + "°C"}
        </Chip>
      );
    default:
      return cellValue;
  }
};
