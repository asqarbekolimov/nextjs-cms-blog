"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLink } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Mobile = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Link href={"/"}>
          <h1 className="text-4xl font-createRound">Blog</h1>
        </Link>
        <Separator className="my-3" />
        <div className="flex flex-col space-y-3">
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
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
