"use client";

import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Search as SearchIcon } from "../atoms/icons";

interface SearchProps {
  placeholder: string;
}

export const Search = ({ placeholder = "Search" }: SearchProps) => {
  const handleSearch = (term: string) => {
    console.log(term);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        className="rounded-[10px] border border-hrms-gray/25 pl-12 focus:!ring-hrms-gray/40"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
    </div>
  );
};
