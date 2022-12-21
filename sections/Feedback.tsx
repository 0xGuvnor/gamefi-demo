"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => {
  return (
    <section className="relative z-10 paddings">
      <motion.div
        variants={staggerContainer(0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col gap-6 mx-auto innerWidth lg:flex-row"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient"></div>
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Gregory Hirsch
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Founder | CEO
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            veritatis, quasi facere quaerat expedita non quis, et amet enim
            quae, quas consequatur laborum eius voluptatum qui alias officia
            cumque ipsa!"
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex items-center justify-center flex-1"
        >
          <img
            src="/planet-09.png"
            alt="Planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.div></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Feedback;
