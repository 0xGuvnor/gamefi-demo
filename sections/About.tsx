"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <div className="relative z-10 paddings">
      <div className="z-0 gradient-02"></div>
      <motion.div
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex-col mx-auto innerWidth flexCenter"
      >
        <TypingText title="| About MoM" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[20px] sm:text-[32px] text-center text-[#c7c7c7]"
        >
          <span className="font-extrabold text-white">Lorem</span> ipsum dolor
          sit amet consectetur adipisicing elit. Obcaecati aliquid enim autem
          minima{" "}
          <span className="font-extrabold text-white">
            voluptatum asperiores
          </span>{" "}
          debitis vitae necessitatibus veniam beatae at veritatis molestiae rem,
          voluptas laboriosam quas corporis{" "}
          <span className="font-extrabold text-white">sunt dignissimos</span>.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit
          facilis reiciendis iusto,{" "}
          <span className="font-extrabold text-white">
            quo tempore laudantium
          </span>{" "}
          cupiditate error officiis soluta et ex voluptas? Ipsam tenetur
          voluptas nobis magnam quia?{" "}
          <span className="font-extrabold text-white">Illo?</span>
        </motion.p>

        <motion.img
          src="/arrow-down.svg"
          alt="Arrow down"
          variants={fadeIn("up", "tween", 0.5, 1.5)}
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </div>
  );
};
export default About;
