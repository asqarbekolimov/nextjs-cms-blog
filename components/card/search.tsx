import { IBlog } from "@/types";
import Link from "next/link";
import React from "react";
import { DrawerClose } from "../ui/drawer";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

function SearchCard(blog: IBlog) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <DrawerClose className="flex flex-col space-y-2 text-start">
        <Image
          src={blog.image.url}
          alt={blog.title}
          width={200}
          height={200}
          className="rounded-md shadow-xl dark:shadow-white/10"
        />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <p className="text-sm">
            {format(new Date(blog.createdAt), "MMM dd, yyyy")}
          </p>
        </div>
        <h1 className="font-createRound">{blog.title}</h1>
      </DrawerClose>
    </Link>
  );
}

export default SearchCard;
