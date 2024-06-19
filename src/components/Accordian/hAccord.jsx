import React, { useState } from "react";
import "./style_h.css";
import items from "../../data/homedata";

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
              <div className="flex justify-between max-[640px]:justify-between p-6">
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
                  {item.content3}
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
