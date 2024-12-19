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

import { AddCircleIcon } from "@/components/atoms/icon";
import { Search as SearchIcon } from "@/components/atoms/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { BadgeDemo } from "@/components/molecules/badge";
import Link from "next/link";

interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const HolidayListTable = <TData, TValue>({
  columns,
  data,
  className,
  // ...props
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
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5">
        <div className="relative flex flex-1 flex-shrink-0">
          <Input
            placeholder="Search"
            value={
              (table.getColumn("holidayName")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("holidayName")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm rounded-[10px] border border-hrms-gray/25 pl-12 focus:!ring-hrms-gray/40"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        <div className="inline-flex gap-x-5">
          <Link href="/holidays/add">
            <Button>
              <AddCircleIcon />
              <span>Add New Holiday</span>
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
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
      <CardFooter className="p-5 !pt-0">
        {/* <PageSize
          pageSize={table.getState().pagination.pageSize}
          onChange={(value) => table.setPageSize(value)}
        />
        <PaginationButton table={table} /> */}
        <BadgeDemo statusColor="bg-primary" label="Upcoming" />
        <BadgeDemo statusColor="bg-secondary" label="Past Holidays" />
      </CardFooter>
    </Card>
  );
};
