src/components/RecentReadings/ActivityReadings/index.tsx

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
import { type Activity, RenderCell } from "./render-cell";

export const windowActivityColumns = [
  { name: "ID", uid: "ID" },
  { name: "Time", uid: "Time" },
  { name: "Window activity", uid: "Window activity" },
];

export const ActivityReadings = ({ data }: { data: Activity[] }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(data.length / rowsPerPage);

  const currentItems = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className=" flex  flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={windowActivityColumns}>
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
                    columnKey={columnKey as keyof Activity}
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
