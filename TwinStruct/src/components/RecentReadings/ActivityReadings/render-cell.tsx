// This file contains the render cell component for the window activity readings table.

import { Chip } from "@nextui-org/react";
import React from "react";

export type Activity = {
  ID: string;
  Time: string;
  "Window activity": number | string;
};

type Props = {
  user: Activity;
  columnKey: keyof Activity;
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
    case "Window activity":
      return (
        <Chip size="sm" variant="flat" color={"success"}>
          <span className="text-xs capitalize">{cellValue}</span>
        </Chip>
      );
    default:
      return cellValue;
  }
};
