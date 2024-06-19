import BlogCard from "../components/BlogCard";
import Footer from "../components/footer";
import { getSortedBlogDataInDescendingOrder } from "../data/blogdata";

const Blogs = () => {
  const sortedBlogData = getSortedBlogDataInDescendingOrder();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center scale-80 py-48 bg-transparent">
        <div className="text-white text-7xl font-bold text-center pb-16">
          Blogs
        </div>

        <div className="w-full max-w-6xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {sortedBlogData.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                date={blog.date}
                author={blog.author}
                imageUrl={blog.imageUrl}
                url={blog.url}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
