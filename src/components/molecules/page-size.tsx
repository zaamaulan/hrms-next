import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PageSizeProps {
  pageSize: number;
  onChange: (value: number) => void;
}

export const PageSize = ({ onChange, pageSize }: PageSizeProps) => {
  return (
    <div className="flex items-center gap-x-5">
      <p className="text-sm text-secondary">Showing</p>
      <Select
        value={String(pageSize)}
        onValueChange={(value) => onChange(Number(value))}
        defaultValue="10"
      >
        <SelectTrigger className="flex w-fit gap-x-2">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent>
          {[10, 25, 50].map((item) => (
            <SelectItem key={item} value={item.toString()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
