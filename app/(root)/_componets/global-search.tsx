"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Loader2, Minus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { IBlog } from "@/types";
import { getSearchBlog } from "@/service/blog.service";
import { debounce } from "lodash";
import SearchCard from "@/components/card/search";
import { Separator } from "@/components/ui/separator";

function GlobalSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLocaleLowerCase();
    if (text && text.length > 2) {
      setIsLoading(true);
      const data = await getSearchBlog(text);
      setBlogs(data);
      setIsLoading(false);
    } else {
      setBlogs([]);
      setIsLoading(false);
    }
  };

  const debounceSearch = debounce(handleSearch, 500);

  return (
    <Drawer>
      <DrawerTrigger>
        <div
          className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2
          "
        >
          <span className="hidden md:flex">Search</span>
          <Search className="w-4 h-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="container max-w-6xl mx-auto py-12">
          <Input
            placeholder="Type to search blog..."
            className="bg-secondary"
            onChange={debounceSearch}
            disabled={isLoading}
          />
          {isLoading && <Loader2 className="animate-spin mt-4 mx-auto" />}
          {blogs.length ? (
            <div className="text-2xl font-createRound">
              {blogs.length} Result found.
            </div>
          ) : null}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2">
            {blogs.map((blog) => (
              <SearchCard key={blog.slug} {...blog} />
            ))}
          </div>
          {blogs.length ? <Separator className="mt-3" /> : null}
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-createRound text-2xl">
                See posts by categories
              </p>
              <Minus />
              <Link href={"/categories"}>
                <DrawerClose className="text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Link href={`/categories/${item.slug}`} key={item.slug}>
                  <DrawerClose>
                    <Badge variant={"secondary"}>{item.name}</Badge>
                  </DrawerClose>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-createRound text-2xl">See posts by tags</p>
              <Minus />
              <Link href={"/tags"}>
                <DrawerClose className="text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((item) => (
                <Link href={`/tags/${item.slug}`} key={item.slug}>
                  <DrawerClose>
                    <Badge variant={"secondary"}>{item.name}</Badge>
                  </DrawerClose>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default GlobalSearch;
