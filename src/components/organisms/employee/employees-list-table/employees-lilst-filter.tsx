"use client";

import { AddCircleIcon } from "@/components/atoms/icon";
import { Modal } from "@/components/atoms/modal";
import { Search } from "@/components/molecules/search";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { Fragment, useState } from "react";

const departements = [
  { value: "Design", label: "Design" },
  { value: "Java", label: "Java" },
  { value: "HR", label: "HR" },
  { value: "Python", label: "Python" },
  { value: "Sales", label: "Sales" },
  { value: "React JS", label: "React JS" },
  { value: "Business Analyst", label: "Business Analyst" },
  { value: "Account", label: "Account" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "Node JS", label: "Node JS" },
];

export const EmployeesListFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button variant="outline" onClick={() => setOpen(!open)}>
        <AddCircleIcon className="text-secondary-foreground" />
        <span>Filter</span>
      </Button>

      <Modal
        open={open}
        setOpen={setOpen}
        title="Filter"
        // withoutClose
        className="flex w-[383px] flex-col gap-y-5"
      >
        <Search placeholder="Search" />
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">Departement</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2.5">
            {departements.map((departement) => (
              <Label
                key={departement.value}
                className="inline-flex cursor-pointer items-center gap-x-2.5 font-normal"
              >
                <Checkbox name={departement.value} key={departement.value} />
                {departement.label}
              </Label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">Select Type</p>
          <RadioGroup
            defaultValue="option-one"
            className="grid grid-cols-2 gap-x-5 gap-y-2.5"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="OFFICE" id="OFFICE" />
              <Label htmlFor="OFFICE">Office</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="WORK_FROM_HOME" id="WORK_FROM_HOME" />
              <Label htmlFor="WORK_FROM_HOME">Work from Home</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="inline-grid grid-cols-2 gap-x-2.5">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Apply</Button>
        </div>
      </Modal>
    </Fragment>
  );
};
