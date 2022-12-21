"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 py-8 xPaddings backdrop-blur-lg"
    >
      <div className="absolute w-[50vw] inset-0 gradient-01"></div>
      <div className="flex justify-between gap-8 mx-auto innerWidth">
        <img
          src="/search.svg"
          alt="Search"
          className="object-contain w-6 h-6 cursor-pointer"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white cursor-pointer">
          MoM
        </h2>
        <img
          src="/menu.svg"
          alt="Menu"
          className="object-contain w-6 h-6 cursor-pointer hover:opacity-75"
        />
      </div>
    </motion.nav>
  );
};
export default Navbar;
