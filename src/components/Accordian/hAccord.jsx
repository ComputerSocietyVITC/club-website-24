import React, { useState } from "react";
import "./style_h.css";

const HAccord = ({ items }) => {
  const [accord, setActiveAccord] = useState(-1);

  const toggleAccordion = (index) => {
    if (accord === index) {
      setActiveAccord(-1);
    } else {
      setActiveAccord(index);
    }
  };

  return (
    <div className="text-white h_accord_main flex flex-col items-center">
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
                  <span className="verticle">-</span>
                ) : (
                  <span className="verticle">+</span>
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
  );
}

export default HAccord;
