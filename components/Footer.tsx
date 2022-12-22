"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className="relative paddings"
    >
      <div className="footer-gradient"></div>

      <div className="flex flex-col gap-8 mx-auto innerWidth">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="Headset icon"
              className="object-contain w-6 h-6"
            />
            <span className="font-normal text-[16px] text-white uppercase">
              Enter metaverse
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Metaverse of Madness
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2022 Metaverse of Madness. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="object-contain w-6 h-6 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
