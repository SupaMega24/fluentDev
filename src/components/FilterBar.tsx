"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import { cn } from "../lib/utils";
import Link from "next/link";

const categories = [{ label: "Recent Posts", tag: "latest" }, ...config.categories];

export interface BlogNavigationBarProps {
  className?: string;
  active: string;
}

export const FilterBar = ({ className, active }: BlogNavigationBarProps) => {
  const param = useSearchParams();
  const [searchText, setSearchText] = useState<string>(
    param.get("query") || ""
  );
  const [isSearchActive, setIsSearchActive] = useState(
    param.get("query") !== null && param.get("query") !== ""
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current?.focus();
    }
  }, [isSearchActive]);

  const onHandleKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchText === "") {
        router.push("/");
      } else {
        const urlPath = `/?query=${searchText}`;
        router.push(urlPath);
      }
    }
    if (e.key === "Escape") {
      setIsSearchActive(false);
    }
  };

  const onClearSearch = () => {
    setIsSearchActive(false);
    if (
      searchText === "" &&
      !(param.get("query") === "" || param.get("query") === null)
    ) {
      router.push("/");
    }
  };

  return (
    <div className={cn("flex items-center justify-between px-4", className)}>
      {isSearchActive ? (
        <div className="flex w-full items-center justify-between rounded-sm border px-1">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className="w-full border-none bg-transparent px-4 py-2 focus-visible:outline-none"
            onKeyUp={(e) => onHandleKey(e)}
            onBlur={onClearSearch}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={onClearSearch} className="ml-4">
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div className="hidden sm:flex w-full items-center justify-between  ">
          <div className="flex gap-2 whitespace-nowrap  overflow-x-auto ">
            {categories.map((category) => (
              <Link className="hover:text-blue-700 border-2 hover:border-blue-700 rounded-md"
                href={
                  category.tag === "latest" ? `/` : `/category/${category.tag}`
                }
                key={category.tag}
              >
                <button
                  className={cn(
                    "py-1 px-2",
                    active === category.tag,
                    //"border-b-2 border-black font-semibold ",
                    className = ""
                  )}
                >
                  {category.label}
                </button>
              </Link>
            ))}
          </div>
          <div className="flex-shrink-0 pl-4">
            <button onClick={() => setIsSearchActive(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Open search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
