"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import StartSteps from "../components/StartSteps";
import { startingFeatures } from "../constants";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";

const GetStarted = () => {
  return (
    <div className="relative z-10 paddings">
      <motion.div
        variants={staggerContainer(0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col gap-8 mx-auto innerWidth lg:flex-row"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex-1 flexCenter"
        >
          <img
            src="/get-started.png"
            alt="Get started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col"
        >
          <TypingText title="| How MoM Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={index} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default GetStarted;
