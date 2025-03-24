// This file contains the PowerReadings component which is used to display the power consumption data in a table format


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
import { RenderCell, type powerReadings } from "./render-cell";

export const PowerConsumptionsColumns = [
  { name: "ID", uid: "ID" },
  { name: "Time", uid: "Time" },
  { name: "POWER CONSUMPTION", uid: "POWER CONSUMPTION" },
];

export const PowerConsumptionReadings = ({
  data,
}: {
  data: powerReadings[];
}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(data.length / rowsPerPage);

  const currentItems = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  return (
    <div className=" flex  flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={PowerConsumptionsColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={currentItems}>
          {(item) => (
            <TableRow key={item.ID}>
              {(columnKey) => (
                <TableCell>
                  <RenderCell
                    user={item}
                    columnKey={columnKey as keyof powerReadings}
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
