import { DepartmentCard } from "@/components/molecules/department-card";

export const departments = [
  { id: 1, memberCount: 20, label: "Design Department" },
  { id: 2, memberCount: 14, label: "Sales Department" },
  {
    id: 3,
    memberCount: 18,
    label: "Project Manager Department",
  },
  { id: 4, memberCount: 10, label: "Marketing Department" },
];

const memberData = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: "John Doe",
  role: "Project Manager",
}));

export const DepartmentGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {departments.map((department) => (
        <DepartmentCard
          key={department.label}
          title={department.label}
          memberCount={department.memberCount}
          href={`/departments/${department.id}`}
          memberData={memberData}
        />
      ))}
    </div>
  );
};
