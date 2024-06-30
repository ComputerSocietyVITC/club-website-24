import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AnimatedSection = ({
    children,
    delay,
    className,
}: {
    children: React.ReactNode;
    delay: number;
    className: string;
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Trigger when 50% of the element is in view
    });

    return (
        <motion.section
            className={className}
            ref={ref}
            initial={{ opacity: 0, y: 40 }} // Start from opacity 0 and 10 pixels above
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate to opacity 1 and natural position
            transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.section>
    );
};

const HeroText = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10">
            <AnimatedSection delay={0.5} className="">
                We are the
            </AnimatedSection>
            <AnimatedSection delay={1} className="">
                IEEE Computer Society
            </AnimatedSection>
            <AnimatedSection delay={1.5} className="">
                VIT Chennai
            </AnimatedSection>
            <section className="text-white font-light text-4xl grid lg:grid-cols-5 sm:grid-rows-3 md:grid-rows-3 text-left lg:text-center sm:place-items-start place-items-center px-6 content-center pt-[10vh]">
                <section className="flex h-full w-full ">
                    <section className="lg:hidden">|</section>
                    <AnimatedSection delay={0.5} className="">
                        DISCOVER
                    </AnimatedSection>
                </section>
                <motion.section
                    initial={{ x: 500, opacity: 0 }} // Start position (off-screen to the right if positive)
                    animate={{ x: 0, opacity: 1 }} // End position (back to its original position)
                    transition={{ duration: 1 }} // Duration of the animation in seconds
                    className="hidden lg:block"
                >
                    |
                </motion.section>
                <section className="flex ">
                    <section className="lg:hidden ">|</section>
                    <AnimatedSection delay={1} className="">
                        DEVELOP
                    </AnimatedSection>
                </section>
                <motion.section
                    initial={{ x: -500, opacity: 0 }} // Start position (off-screen to the right if positive)
                    animate={{ x: 0, opacity: 1 }} // End position (back to its original position)
                    transition={{ duration: 1 }}
                    className=" hidden lg:block"
                >
                    |
                </motion.section>
                <section className="flex ">
                    <section className="lg:hidden">|</section>
                    <AnimatedSection delay={1.5} className="">
                        DEPLOY
                    </AnimatedSection>
                </section>
            </section>
        </section>
    );
};
export default HeroText;
