"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardSolid,
  DashboardStroke,
  DepartementSolid,
  DepartementStroke,
  EmployeeSolid,
  EmployeeStroke,
  AttedanceSolid,
  AttedanceStroke,
  PayrollSolid,
  PayrollStroke,
  JobSolid,
  JobStroke,
  CandidateSolid,
  CandidateStroke,
  HolidaySolid,
  HolidayStroke,
  SettingSolid,
  SettingStroke,
} from "../atoms/icons";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    iconStroke: DashboardStroke,
    iconSolid: DashboardSolid,
  },
  {
    name: "All Employees",
    href: "/employees",
    iconStroke: EmployeeStroke,
    iconSolid: EmployeeSolid,
  },
  {
    name: "All Departments",
    href: "/departements",
    iconStroke: DepartementStroke,
    iconSolid: DepartementSolid,
  },
  {
    name: "Attendance",
    href: "/attedance",
    iconStroke: AttedanceStroke,
    iconSolid: AttedanceSolid,
  },
  {
    name: "Payroll",
    href: "/payroll",
    iconStroke: PayrollStroke,
    iconSolid: PayrollSolid,
  },
  {
    name: "Jobs",
    href: "/jobs",
    iconStroke: JobStroke,
    iconSolid: JobSolid,
  },
  {
    name: "Candidates",
    href: "/candidates",
    iconStroke: CandidateStroke,
    iconSolid: CandidateSolid,
  },
  {
    name: "Holidays",
    href: "/holidays",
    iconStroke: HolidayStroke,
    iconSolid: HolidaySolid,
  },
  {
    name: "Settings",
    href: "/settings",
    iconStroke: SettingStroke,
    iconSolid: SettingSolid,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-y-2.5">
        {menus.map((menu, index) => {
          const active = pathname === menu.href;
          const Icon = active ? menu.iconSolid : menu.iconStroke;

          return (
            <li key={index} className="flex">
              <div
                className={cn(
                  "w-[3px] rounded-full",
                  active ? "bg-primary" : "bg-transparent",
                )}
              />

              <Link
                href={menu.href}
                className={cn(
                  "flex w-full gap-x-4 rounded-r-lg px-5 py-3 font-normal text-secondary-foreground",
                  active && "!border-hrms-primary bg-primary/15 text-primary",
                )}
              >
                <Icon />
                <span className={cn(active && "font-semibold")}>
                  {menu.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
