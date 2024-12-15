// components/organisms/JobCard.tsx
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { JobCardContent } from "../molecules/job-card-content";
import { BadgeDemo } from "../molecules/badge";

export const JobCard = ({
  status,
  jobs,
  statusColor
}: {
  status: string;
  statusColor: string
  jobs: Array<{
    title: string;
    category: string;
    location: string;
    salary: string;
    tags: string[];
  }>;
}) => {
  return (
    <Card>
      <CardHeader>
        <BadgeDemo label={status} statusColor={statusColor} />
      </CardHeader>
      {jobs.map((job, idx) => (
        <CardContent key={idx}>
          <JobCardContent
            title={job.title}
            category={job.category}
            location={job.location}
            salary={job.salary}
            tags={job.tags}
          />
        </CardContent>
      ))}
    </Card>
  );
};
