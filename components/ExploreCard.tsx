import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useMediaQuery } from "react-responsive";

interface Props extends World {
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
}

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.55)}
      onClick={() => handleClick(id)}
      className={`relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.3s] ease-in-out cursor-pointer ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      }`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <AnimatePresence mode="wait">
        {active !== id ? (
          <motion.h3
            key={id}
            initial={{ opacity: 0, scale: 0, rotate: 360 }}
            animate={
              isMobile
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    rotate: 270,
                  }
            }
            exit={{
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20"
          >
            {title}
          </motion.h3>
        ) : (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { delay: 0.2, type: "spring", duration: 0.05 },
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-0 flex-col justify-start w-full p-8 bg-black/50 rounded-b-[24px] transition-all duration-300 ease-in-out"
          >
            <div className="flexCenter glassmorphism w-[60px] h-[60px] rounded-[24px] mb-[16px]">
              <img
                src="/headset.svg"
                alt="VR headset"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
              Enter the Metaverse
            </p>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default ExploreCard;
