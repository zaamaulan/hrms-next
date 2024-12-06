import Link from "next/link";
import { LogoLight } from "../atoms/icons";
import { Navigation } from "../molecules/navigation";
import { ThemeButton } from "../molecules/theme-button";

export const Sidebar = () => {
  return (
    <div className="sticky top-0 h-full p-5">
      <aside className="flex min-h-[calc(100vh-2.5rem)] w-[17.5rem] gap-y-20 flex-col justify-between rounded-[20px] p-[1.875rem]">
        <div className="flex flex-col gap-y-[1.875rem]">
          <Link href="/">
            <LogoLight />
          </Link>
          <Navigation />
        </div>
        <ThemeButton />
      </aside>
    </div>
  );
};
