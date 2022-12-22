"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="pl-6 yPaddings sm:pl-16">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col mx-auto innerWidth"
      >
        <div className="relative z-10 flex flex-col items-center justify-center -ml-16">
          <motion.h1 variants={textVariant(0.8)} className="heroHeading">
            Metaverse
          </motion.h1>
          <motion.h1 variants={textVariant(1)} className="heroHeading">
            of
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex items-center justify-center"
          >
            <h1 className="heroHeading">Ma</h1>
            <div className="heroDText"></div>
            <h1 className="heroHeading">Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0, 1)}
          className="relative w-full md:-mt-[225px] -mt-[69px]"
        >
          <div className="absolute inset-x-0 -top-[30px] w-full h-[300px] hero-gradient rounded-tl-[140px] z-0]"></div>
          <img
            src="/cover.png"
            alt="Cover Image"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore" className="outline-none">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="Stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
