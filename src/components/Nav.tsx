import React from "react";
import { motion } from "framer-motion";
import { Rubik_Vinyl, Castoro } from "next/font/google";
type Props = {};

const rubik = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const castoro = Castoro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Nav = (props: Props) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        delay: 0.2,
      }}
      className={` w-full h-[10vh]   rounded-lg sticky top-2 `}
    >
      <div className="flex items-center justify-between p-5 px-[100px] ">
        <div
          className={` ${rubik.className} text-2xl font-semibold text-black `}
        >
          {" "}
          Lifeezy
        </div>
        <ul
          className={` ${castoro.className} flex items-center justify-around gap-10 text-xl text-black`}
        >
          <li>Weddings</li>
          <li>Headshot</li>
          <li>Birthday</li>
          <li>house</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
