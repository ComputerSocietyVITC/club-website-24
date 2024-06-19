const BlogCard = ({ title, date, author, imageUrl, url }) => {
  return (
    <a href={url}>
      <div className="rounded-xl overflow-hidden p-4 border m-4 border-gray-200 cursor-pointer bg-gradient-to-t from-[#040414] to-[#0E1C31] grid grid-rows-2 h-full">
        <section className="flex flex-col justify-center">
          <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
          <p className="text-[#D1D5DB]">
            {date} • {author}
          </p>
        </section>
        <img
          className="w-full place-self-end rounded-2xl max-w-full"
          src={imageUrl}
          alt={title}
        />
      </div>
    </a>
  );
};

export default BlogCard;
