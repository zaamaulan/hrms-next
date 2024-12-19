import { holidayCollumns } from "@/components/organisms/holiday/holiday-list-table/holiday-list-columns";
import { HolidayListTable } from "@/components/organisms/holiday/holiday-list-table/holiday-list-table";
import { Layout } from "@/components/templates/layout";
import React from "react";

const holidays = [
  {
    date: "January 01, 2023",
    day: "Tuesday",
    holidayName: "New Year",
  },
  {
    date: "January 07, 2023",
    day: "Saturday",
    holidayName: "International Programmers' Day",
  },
  {
    date: "February 04, 2023",
    day: "Saturday",
    holidayName: "World Cancer Day",
  },
  {
    date: "April 01, 2023",
    day: "Saturday",
    holidayName: "April Fool Day",
  },
  {
    date: "May 07, 2023",
    day: "Monday",
    holidayName: "International Programmers' Day",
  },
  {
    date: "May 22, 2023",
    day: "Tuesday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    date: "June 05, 2023",
    day: "Monday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    date: "August 07, 2023",
    day: "Monday",
    holidayName: "International Friendship Day",
  },
  {
    date: "September 15, 2023",
    day: "Friday",
    holidayName: "International Day of Democracy",
  },
  {
    date: "November 14, 2023",
    day: "Tuesday",
    holidayName: "World Diabetes Day",
  },
  {
    date: "December 25, 2023",
    day: "Monday",
    holidayName: "Merry Chrismas",
  },
];

const HolidayPage = () => {
  return (
    <Layout title="Holidays" description="All Holiday Lists">
      <HolidayListTable data={holidays} columns={holidayCollumns} />
    </Layout>
  );
};

export default HolidayPage;
