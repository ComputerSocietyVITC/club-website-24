const BlogCard = ({ title, date, author, imageUrl, url }) => {
  return (
    <a href={url} className="block">
      <div className="lg:hover:scale-[105%] transition duration-250 rounded-2xl overflow-hidden border border-gray-700 cursor-pointer bg-gradient-to-br from-[#371e3e] from-2% via-[#0a1e3e] to-[#040a39] to-9% h-full flex flex-col m-1 lg:m-0">
        <img
          className="w-full h-auto object-cover rounded-t-xl"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4 flex-1">
          <h2 className="text-white font-bold text-xl lg:text-2xl mb-2">{title}</h2>
          <p className="text-[#D1D5DB] text-sm">{date} • {author}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
