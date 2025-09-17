import Image from "next/image";
import { notFound } from "next/navigation";
import { blogData  } from "@/Components/Blogdata";
const BlogDetailPage = ({ params }) => {
  const { slug } = params;

  // Find blog by slug
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 pt-30">
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      {/* Meta */}
      <p className="text-gray-500 text-sm mb-6">
        Last updated on <span className="font-medium">{blog.date}</span> by{" "}
        <span className="text-blue-600">{blog.author}</span>
      </p>

      {/* Content */}
      <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>  
  );
};

export default BlogDetailPage;
