const BlogCard = ({ title, date, author, imageUrl, url }) => {
  return (
    <a href={url}>
      <div className=" lg:hover:scale-[150%] transition duration-500 rounded-xl overflow-hidden p-4 border m-4 border-gray-700 cursor-pointer bg-gradient-to-br  from-[#371e3e] from-2% via-[#0a1e3e] to-[#040a39] to-9% grid grid-rows-2 h-full">
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
