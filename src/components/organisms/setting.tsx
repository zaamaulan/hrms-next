import React from "react";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

const settings = [
  {
    title: "Appearance",
    description: "Customize how your theme looks on your device",
    types: "select",
    options: ["Light", "Dark", "System"],
  },
  {
    title: "Language",
    description: "Select your language",
    types: "select",
    options: ["English", "Indonesia"],
  },
  {
    title: "Two-factor Authentication",
    description: "Keep your account secure by enabling 2FA via mail",
    types: "switch",
  },
  {
    title: "Mobile Push Notifications",
    description: "Receive push notification",
    types: "switch",
  },
  {
    title: "Desktop Notification",
    description: "Receive push notification  in desktop",
    types: "switch",
  },
  {
    title: "Email Notifications",
    description: "Receive email notification",
    types: "switch",
  },
];

export const Setting = () => {
  return (
    <Card className="flex flex-col gap-y-10 p-5">
      {settings.map((setting, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-semibold">{setting.title}</p>
            <p className="text-sm text-secondary">{setting.description}</p>
          </div>
          {setting.types === "select" ? (
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={setting.options && setting.options[0]}
                />
              </SelectTrigger>
              <SelectContent>
                {setting.options?.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Switch />
          )}
        </div>
      ))}
    </Card>
  );
};
