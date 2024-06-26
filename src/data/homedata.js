import socialMediaLinks from "./socialMediaLinks";

const items = [
  {
    header: "ABOUT US",
    content: (
      <div className="about-us-content">
        IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create (sometimes Break!), Develop, and Explore. Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge. Come join us on this journey!
      </div>
    ),
  },
  {
    header: "OUR VISION",
    content: (
      <div className="our-vision-content">
        At IEEE Computer Society VITC, our belief is grounded in the principles of mutual learning and growth. We believe in empowering the community to innovate, develop, create, and to empower itself, which for us is, the greatest Return on Investment for a Technical Society. With a transcendent passion for Tech, and a solemn cognizance of people's struggles, we aspire to solve the great problems of today, and prepare together for a brighter tomorrow.
      </div>
    ),
  },
  {
    header: "NEWSLETTER",
    content: (
      <div className="newsletter-content text-center">
        Want to stay updated with the latest news about IEEE CS VITC? Enter your email address and allow notifications.
        <input
          type="email"
          className="border-2 border-teal-300/[0.8] bg-gradient-to-r from-[#123838]  to-[#0C2B38] rounded-lg mt-12 mb-3  text-md px-2 py-1 w-full text-center "
        />
        <button className="hover:scale-110 duration-200 transition border-2 border-cyan-100/[0.6] bg-gradient-to-r from-[#123838]  to-[#0C2B38] rounded-2xl my-4 text-xl px-4 p-2 text-center text-blue-100/[0.8]">
          Subscribe
        </button>
      </div>
    ),
  },
  {
    header: "CONTACT",
    content: (
      <div className="contact-content">
        <div>
          <div className="flex flex-col">
            <div className="text-lg sm:self-center md:self-center lg:text-base text-blue-200 inline-block mb-3 font-bold">
              Email
            </div>
            <a
              href="mailto:ieeecomputersociety@vit.ac.in"
              target="_blank"
              rel="noreferrer"
              className="my-3 block text-white hover:text-white/[0.8] text-base lg:text-lg lg:text-left hover:scale-125 transition duration-200"
            >
              ieeecomputersociety@vit.ac.in
            </a>
          </div>
        </div>
        <div className="my-4 w-full flex flex-col justify-center lg:order-4">
          <div className="text-lg lg:text-base lg:text-center text-blue-200 inline-block mb-3 md:self-center sm:self-center font-bold">
            Social Media
          </div>
          <div className="grid grid-cols-4 place-items-center">
          {socialMediaLinks.map((link, index) => (
            <div
              key={index}
              className="hover:scale-150 transition duration-200"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={link.icon}
                  alt={link.platform}
                  className="h-7 my-5 "
                />
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default items;
