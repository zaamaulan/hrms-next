import { AddCircleIcon } from "@/components/atoms/icon";
import { Search } from "@/components/molecules/search";
import { JobCard } from "@/components/organisms/job-card";
import { Layout } from "@/components/templates/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const jobs = [
  {
    status: "Active",
    title: "UI/UX Designer",
    category: "Design",
    tags: ["Design", "Full Time", "Remote"],
    location: "California, USA",
    salary: "$3600/Month",
  },
  {
    status: "Active",
    title: "Sr. UX Researcher",
    category: "Design",
    tags: ["Design", "Full Time"],
    location: "New York, USA",
    salary: "$1500/Month",
  },
  {
    status: "Active",
    title: "BDM",
    category: "Sales",
    tags: ["Sales", "Full Time"],
    location: "New York, USA",
    salary: "$1000/Month",
  },
  {
    status: "Active",
    title: "React JS",
    category: "Developer",
    tags: ["Developer", "Full Time"],
    location: "California, USA",
    salary: "$2000/Month",
  },

  // Inactive Jobs
  {
    status: "Inactive",
    title: "Hr Executive",
    category: "HR",
    tags: ["HR", "Full Time", "Remote"],
    location: "California, USA",
    salary: "$3600/Month",
  },
  {
    status: "Inactive",
    title: "Python Developer",
    category: "Developer",
    tags: ["Developer", "Full Time"],
    location: "New York, USA",
    salary: "$1500/Month",
  },

  // Completed Jobs
  {
    status: "Completed",
    title: "UI/UX Designer",
    category: "Design",
    tags: ["Design", "Full Time", "Remote"],
    location: "California, USA",
    salary: "$3600/Month",
  },
  {
    status: "Completed",
    title: "Sr. UX Researcher",
    category: "Design",
    tags: ["Design", "Full Time"],
    location: "New York, USA",
    salary: "$1500/Month",
  },
  {
    status: "Completed",
    title: "BDM",
    category: "Sales",
    tags: ["Sales", "Full Time"],
    location: "New York, USA",
    salary: "$1000/Month",
  },
];

const JobPage = () => {
  const activeJobs = jobs.filter((job) => job.status === "Active");
  const inactiveJobs = jobs.filter((job) => job.status === "Inactive");
  const completedJobs = jobs.filter((job) => job.status === "Completed");

  return (
    <Layout title="Jobs" description="Show All Jobs">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <Search placeholder="Search" />
          <Button>
            <AddCircleIcon />
            Add New Job
          </Button>
        </CardHeader>

        <CardContent className="grid grid-cols-3 gap-5">
          <JobCard
            status="Active Jobs"
            statusColor="bg-yellow-500"
            jobs={activeJobs}
          />
          <JobCard
            status="Inactive Jobs"
            statusColor="bg-red-500"
            jobs={inactiveJobs}
          />
          <JobCard
            status="Completed Jobs"
            statusColor="bg-emerald-500"
            jobs={completedJobs}
          />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default JobPage;
