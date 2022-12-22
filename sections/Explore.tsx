"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TitleText, TypingText } from "../components/CustomTexts";
import ExploreCard from "../components/ExploreCard";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore" className="paddings">
      <motion.div
        variants={staggerContainer(0.5, 5)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex flex-col mx-auto innerWidth"
      >
        <TypingText title="| The Worlds" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="hidden md:block" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
