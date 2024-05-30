import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 900]);

  const third = Math.ceil(images.length / 4);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third, 3*third);
  const FourthPart = images.slice(3 * third, 4*third);

  return (
    <div className={cn("h-[100em] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start max-w-5xl mx-auto gap-10 py-40 px-10" ref={gridRef}>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {FourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <img src={el} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" alt="thumbnail" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
