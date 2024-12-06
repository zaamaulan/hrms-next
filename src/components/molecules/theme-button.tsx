import React from "react";
import { Button } from "../ui/button";
import { DarkTheme, LightTheme } from "../atoms/icons/theme";

export const ThemeButton = () => {
  return (
    <div className="inline-grid grid-cols-2">
      <Button>
        <LightTheme />
        <span className="font-normal">Light</span>
      </Button>
      <Button variant="ghost">
        <DarkTheme className="!text-hrms-dark" />
        <span className="font-normal">Dark</span>
      </Button>
    </div>
  );
};
