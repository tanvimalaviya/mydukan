import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogData } from "@/Components/Blogdata";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-30">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Latest Blogs & Updates
        </h1>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest features, tips, and success stories on
          Dukaan.
        </p>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl shadow-md hover:shadow-lg transition bg-white overflow-hidden"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              {/* <p className="text-gray-500 text-sm mb-4">
                Last updated on:{" "}
                <span className="font-medium">{blog.date}</span> by{" "}
                <span className="text-blue-600">{blog.author}</span>
              </p> */}
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
            <Link
                href={`/blog/${blog.slug}`}   // ✅ dynamic slug link
                className="text-blue-600 font-medium hover:underline"
              >
                Continue Reading →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
