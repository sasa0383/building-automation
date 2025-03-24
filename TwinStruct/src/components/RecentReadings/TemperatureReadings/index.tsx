//This file contains the TemperatureReadings component which is used to display the room temperature data in a table format.

"use client";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";
import { RenderCell } from "./render-cell";
import { type Temperature } from "./render-cell";

export const TemperatureColumns = [
  { name: "ID", uid: "ID" },
  { name: "Time", uid: "Time" },
  { name: "TEMPERATURE", uid: "TEMPERATURE" },
];

export const TemperatureReadings = ({ data }: { data: Temperature[] }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(data.length / rowsPerPage);

  const currentItems = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  return (
    <div className="flex flex-col gap-4">
      <Table aria-label="Room Temperature Data">
        <TableHeader columns={TemperatureColumns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={currentItems}>
          {(item) => (
            <TableRow key={item.ID}>
              {(columnKey) => (
                <TableCell>
                  <RenderCell
                    user={item}
                    columnKey={columnKey as keyof Temperature}
                  />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mt-6 flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          total={pages}
          initialPage={1}
          page={page}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};
