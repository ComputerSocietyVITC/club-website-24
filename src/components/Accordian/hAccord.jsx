import React, { useState } from "react";
import "./style_h.css";
const items = [
  {
    header: "ABOUT US",
    header2: "ABOUT US",
    content: "IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create (sometimes Break!), Develop, and Explore. Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge. Come join us on this journey!",

  },

  {
    header: "OUR VISION",
    header2: "OUR VISION",
    content: "At IEEE Computer Society VITC, our belief is grounded in the principles of mutual learning and growth. We believe in empowering the community to innovate, develop, create, and to empower itself, which for us is, the greatest Return on Investment for a Technical Society. With a transcendent passion for Tech, and a solemn cognizance of people's struggles, we aspire to solve the great problems of today, and prepare together for a brighter tomorrow.",


  },

  {
    header: "NEWSLETTER",
    header2: "NEWSLETTER",
    content: " Want to stay updated with the latest news about IEEE CS VITC? Enter you email address and allow notifications.",
  },
  {
    header: "CONTACT",
    header2: "CONTACT",
    content: "",
  },
];



function HAccord() {
  const [accord, setActiveAccord] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveAccord(index);
  };
  return (
    <>
      <div className="text-white h_accord_main flex flex-col items-center">
        {" "}
        {/* */}
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="flex justify-between max-[640px]:justify-between p-6 max-[640px]:p-3">
                <div className="h_accord_heading">
                  <h3 className={accord === index ? "active" : ""}>
                    {item.header}
                  </h3>
                </div>
                <div>
                  {accord === index ? (
                    <>
                      <span className="verticle">-</span>
                    </>
                  ) : (
                    <>
                      <span className="verticle">+</span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <p className={accord === index ? "active" : "inactive"}>
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HAccord;
