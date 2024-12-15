import { LocationIcon } from "../atoms/icon";
import { JobStroke } from "../atoms/icons";
import { Button } from "../ui/button";

export const JobCardContent = ({
  title,
  category,
  location,
  salary,
  tags,
}: {
  title: string;
  category: string;
  location: string;
  salary: string;
  tags: string[];
}) => {
  return (
    <div className="flex flex-col gap-y-5 p-5 pt-0">
      {/* Job Info */}
      <div className="inline-flex gap-x-3">
        <Button size="icon" variant="ghost" className="flex-shrink-0 bg-accent">
          <JobStroke />
        </Button>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-secondary">{category}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="inline-flex flex-wrap gap-2.5">
        {tags.map((tag, idx) => (
          <Button key={idx} size="sm">
            {tag}
          </Button>
        ))}
      </div>

      {/* Location and Salary */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-1">
          <LocationIcon />
          <p className="text-sm">{location}</p>
        </div>
        <p className="text-sm">
          <span className="font-semibold">{salary}</span>/Month
        </p>
      </div>
    </div>
  );
};
