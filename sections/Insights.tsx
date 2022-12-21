"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import InsightCard from "../components/InsightCard";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";

const Insights = () => {
  return (
    <section className="relative z-10 paddings">
      <motion.div
        variants={staggerContainer(0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col mx-auto innerWidth"
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText
          title={<>Insights about the Metaverse</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Insights;
