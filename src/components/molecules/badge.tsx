import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BadgeDemoProps {
  label: string;
  statusColor: string
}

export const BadgeDemo = ({ label = "Badge", statusColor = "bg-gray-500" }: BadgeDemoProps) => {
  return (
    <Badge variant="ghost" className="gap-1.5 text-sm">
      <span
        className={cn("size-2.5 rounded-full", statusColor)}
        aria-hidden="true"
      ></span>
      {label}
    </Badge>
  );
};
