import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DirectionIcon } from "../atoms/icon";

interface DepartmentCardProps {
  title: string;
  memberCount: number;
  href?: string;
  children?: React.ReactNode;
  memberData: {
    id: number;
    name: string;
    role: string;
  }[];
}

export const DepartmentCard = ({
  // children,
  memberCount,
  title,
  href,
  memberData,
}: DepartmentCardProps) => {
  return (
    <Card className="p-5">
      <CardHeader className="flex flex-row items-center justify-between p-0 !pb-5">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {memberCount} {`Member${memberCount > 1 && "s"}`}
          </CardDescription>
        </div>
        {href && (
          <Link href={href}>
            <Button variant="ghost" className="text-primary hover:text-primary">
              View All
            </Button>
          </Link>
        )}
      </CardHeader>

      {memberData && (
        <>
          <Separator />
          <CardContent className="p-0 !pt-5">
            {memberData.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between border-b py-2 first:pt-0 last:border-none last:pb-0"
              >
                <div className="inline-flex items-center gap-x-2.5">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="avatar"
                    />
                    <AvatarFallback>HR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-secondary-foreground">{member.name}</p>
                    <p className="text-sm text-secondary">{member.role}</p>
                  </div>
                </div>
                <Link href={`/employees/${member.id}`}>
                  <Button variant="ghost" size="icon">
                    <DirectionIcon />
                  </Button>
                </Link>
              </div>
            ))}
          </CardContent>
        </>
      )}
    </Card>
  );
};
