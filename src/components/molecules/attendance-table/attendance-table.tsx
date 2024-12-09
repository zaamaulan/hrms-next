"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "@/components/atoms/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageSize } from "../page-size";
import { PaginationButton } from "../pagination-button";
import { useState } from "react";

interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  overview?: boolean;
}

export const AttendanceTable = <TData, TValue>({
  columns,
  data,
  overview,
}: DataTableProps<TData, TValue>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      columnFilters,
      pagination,
    },
  });

  return (
    <>
      <Card>
        <CardHeader
          className={cn(
            "flex flex-row items-center justify-between p-5",
            overview && "pb-0",
          )}
        >
          {overview ? (
            <>
              <CardTitle className="text-lg text-secondary-foreground">
                Attendance Overview
              </CardTitle>
              <Link href="/">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </>
          ) : (
            <div className="relative flex flex-1 flex-shrink-0">
              <Input
                placeholder="Search"
                value={
                  (table
                    .getColumn("employeeName")
                    ?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table
                    .getColumn("employeeName")
                    ?.setFilterValue(event.target.value)
                }
                className="max-w-sm rounded-[10px] border border-hrms-gray/25 pl-12 focus:!ring-hrms-gray/40"
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          )}
        </CardHeader>
        <CardContent className="py-5 pt-0">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-none">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="p-0 !py-3 !font-normal"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="border-b border-b-hrms-gray/15"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="p-0 !py-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        {!overview && (
          <CardFooter className="flex items-center justify-between p-5 !pt-0">
            <PageSize
              pageSize={table.getState().pagination.pageSize}
              onChange={(value) => table.setPageSize(value)}
            />
            <PaginationButton table={table} />
          </CardFooter>
        )}
      </Card>
    </>
  );
};
