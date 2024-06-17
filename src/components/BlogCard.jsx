const BlogCard = ({ title, date, readTime, imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden p-4 border m-4 border-gray-200 blog-card cursor-pointer bg-gradient-to-t from-[#040414] to-[#0E1C31]">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-date">{date}  • {readTime}</p>
      <img className="blog-image" src={imageUrl} alt={title} />
    </div>
  );
};

export default BlogCard;
