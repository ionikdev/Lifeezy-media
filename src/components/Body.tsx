import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Orbitron, Gabriela } from "next/font/google";

type Props = {
  title: string;
  disabled?: boolean;
  playMarquee?: boolean;
};

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Body = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <div className="h-[screen] w-[100%] ">
      <motion.div className="relative " variants={banner}>
        <BannerRowTop title={"Lifeezy"} />
        <BannerRowCenter title={"Media"} playMarquee={playMarquee} />
        <BannerRowBottom title={"studio"} />
      </motion.div>
    </div>
  );
};

const AnimatedLetters = ({ title, disabled }: Props) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map(
      (letter: string): JSX.Element => (
        <motion.span
          key={letter}
          className="row-letter"
          variants={disabled ? undefined : letterAni}
        >
          {letter}
        </motion.span>
      )
    )}
  </motion.span>
);

const BannerRowTop = ({ title }: Props) => {
  return (
    <div className={`$gabriela.className} banner-row`}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <Image
          src="/hero.png"
          alt={"avata"}
          height={500}
          width={500}
          className="absolute top-[50px] right-0 z-[110]"
        />
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }: Props) => {
  return (
    <div className={`banner-row center ${orbitron.className} `}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["60%", "75%", "20%", "20%", "50%"],
        }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2, delay: 1.5 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 3,
            delay: 1,
          }}
        >
          Book <br />
          Now
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }: Props) => {
  return (
    <div
      className={`banner-row marquee opacity-20  ${playMarquee && "animate"}`}
    >
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Body;
