"use client";
import ModeToggle from "@/components/shared/mode-toggle";
import { navLink } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import GlobalSearch from "./global-search";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-createRound">Blog</h1>
        </Link>
        {/* Nav links */}
        <div className="gap-2 hidden md:flex">
          {navLink.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                "hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-md transition-colors",
                pathname === nav.route && "text-blue-400"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {/* Search */}
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
