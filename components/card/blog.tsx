import { IBlog } from "@/types";
import { CalendarDays, Clock, Dot, Minus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends IBlog {
  isVertical?: boolean;
}

const BlogCard = (blog: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "grid gap-4 group",
        blog.isVertical ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}
    >
      <div className="relative bg-secondary rounded-md">
        <Image
          src={blog.image}
          width={650}
          height={335}
          alt={blog.title}
          className="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
        />
      </div>
      <div className="flex flex-col space-y-4">
        {/* time info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            <p>{blog.date}</p>
          </div>
          <Minus />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <p>01 min read</p>
          </div>
        </div>

        {/* title */}
        <h2 className="text-3xl max-md:text-2xl font-createRound group-hover:text-blue-500 transition-colors">
          {blog.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3">{blog.description}</p>

        {/* author */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/author/thomas-macaulay.jpg"}
              alt="author"
              width={30}
              height={30}
              className="object-cover rounded-sm"
            />
            <p>by {blog.author}</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"}>Machine learning</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
