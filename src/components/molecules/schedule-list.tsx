import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
const schedules = Array.from({ length: 10 }).map((_, i) => ({
  date: Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.now() + i * 24 * 60 * 60 * 1000)),
  events: Array.from({ length: 3 }).map((_, j) => ({
    time: Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(Date.now() + j * 60 * 60 * 1000)),
    role: [
      "UI/UX Designer",
      "Magento Developer",
      "Sales Manager",
      "React Developer",
      "DevOps Engineer",
      "Project Manager",
    ][(i + j) % 6],
    task: [
      "Practical Task Review",
      "Resume Review",
      "Final HR Round",
      "Code Review",
      "Daily Standup",
      "Design Mockup Feedback",
    ][(i + j) % 6],
  })),
}));

export const ScheduleList = () => {
  return (
    <ScrollArea
      className="absolute flex max-h-[calc(100vh-20rem)] flex-col overflow-y-auto"
      type="scroll"
    >
      <ul className="mr-4 flex flex-col gap-y-5">
        {schedules.map((schedule) => (
          <li key={schedule.date} className="flex flex-col gap-y-5">
            <p className="text-secondary-foreground">{schedule.date}</p>
            <ul className="flex flex-col gap-y-5">
              {schedule.events.map((event) => (
                <li
                  key={event.time}
                  className="grid h-full grid-cols-[.6fr_auto_1fr] items-center gap-x-5"
                >
                  <p className="text-xl font-semibold">{event.time}</p>
                  <Separator
                    orientation="vertical"
                    className="w-0.5 bg-gradient-to-b from-hrms-primary to-transparent"
                  />
                  <div>
                    <p className="text-sm">{event.role}</p>
                    <p className="font-semibold">{event.task}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};
