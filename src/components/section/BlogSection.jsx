import { ChevronRightIcon } from "lucide-react";
import React from "react";
import blogs from "../../assets/data/blogs.json";
import FullTitle from "../FullTitle";

import blogImage1 from "../../assets/img/blogImage1.png";
import blogImage2 from "../../assets/img/blogImage2.png";
import blogImage3 from "../../assets/img/blogImage3.png";
import BlogCard from "../BlogCard";
import Button from "../Button";

const blogImage = {
  1: blogImage1,
  2: blogImage2,
  3: blogImage3,
};

const BlogSection = () => {
  return (
    <section className="my-6 space-y-6 md:px-32 md:pt-10 px-4">
      <div className="flex items-center justify-between">
        <FullTitle title="Useful pet knowledge" subtitle="You already know ?" />
        <div className="md:block hidden">
          <Button
            secondary
            icon={<ChevronRightIcon className="h-5 w-5" />}
            title="View more"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:gap-6 gap-3 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} img={blogImage[blog.id]} />
        ))}
      </div>
      <div className="md:hidden">
        <Button
          secondary
          icon={<ChevronRightIcon className="h-5 w-5" />}
          title="View more"
        />
      </div>
    </section>
  );
};

export default BlogSection;
