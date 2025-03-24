// This file contains the render cell component for the power consumption readings table.

import { Chip } from "@nextui-org/react";
import React from "react";

export type powerReadings = {
  ID: string;
  Time: string;
  "POWER CONSUMPTION": number | string;
};

type Props = {
  user: powerReadings;
  columnKey: keyof powerReadings;
};

export const RenderCell = ({ user, columnKey }: Props) => {
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "ID":
      return (
        <div>
          <span className="text-gray-200">{user.ID}</span>
        </div>
      );
    case "Time":
      return (
        <div>
          <span className="text-gray-200">{user.Time}</span>
        </div>
      );
    case "POWER CONSUMPTION":
      return (
        <Chip size="sm" variant="flat" color={"success"}>
          <span className="text-xs capitalize">{cellValue}</span>
        </Chip>
      );
    default:
      return cellValue;
  }
};
