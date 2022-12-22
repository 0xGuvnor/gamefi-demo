"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => {
  return (
    <section className="relative z-10 paddings">
      <motion.div
        variants={staggerContainer(0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col mx-auto innerWidth"
      >
        <TypingText
          title="| Players around the World"
          textStyles="text-center"
        />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="Map"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-1.5 rounded-full bg-[#5d6680]">
            <img src="people-01.png" alt="User" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-40 w-[70px] h-[70px] p-1.5 rounded-full bg-[#5d6680]">
            <img src="people-02.png" alt="User" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-1.5 rounded-full bg-[#5d6680]">
            <img src="people-03.png" alt="User" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
