"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import NewFeatures from "../components/NewFeatures";
import { newFeatures } from "../constants";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";

const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col"
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about Metaverse of Madness?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flex-1 flexCenter"
        >
          <img
            src="/whats-new.png"
            alt="What's new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default WhatsNew;
