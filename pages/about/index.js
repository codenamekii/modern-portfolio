import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaLaravel key="laravel" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'LIDM - Finalist',
        stage: '2020',
      },
      {
        title: 'LIDM - Finalist',
        stage: '2021'
      },
      {
        title: 'Gemastik - Stage',
        stage: '2020',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - UIM',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - PT. STI',
        stage: '2022 - 2024',
      },
      {
        title: 'Intern - PT. STI',
        stage: '2022',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Informatic Technology - Makassar Islamic University',
        stage: '2024',
      },
      {
        title: 'Dicoding Course - Makassar',
        stage: '2020',
      },
      {
        title: 'Certified Graphic Designer - UIM Makassar',
        stage: '2021',
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 z-10"><span className="text-accent">Stories</span> Behind The Scene 📷</motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10"
          >
            A few years ago, I started to get interested in the digital world. Starting from online games, it gave rise to a curiosity to find out more about how digitalization is developing.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex xl:gap-x-4 justify-end z-10 mb-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 z-10"
              >
                <div className="text-accent font-extrabold text-2xl xl:text-4xl mb-2 ">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-white text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of Experience</div>
              </div>
              {/* Clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 z-10"
              >
                <div className="text-accent font-extrabold text-2xl xl:text-4xl mb-2 ">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-white text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Satisfied Clients</div>
              </div>
              {/* Projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 z-10"
              >
                <div className="text-accent font-extrabold text-2xl xl:text-4xl mb-2 ">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-white text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Finished Project</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[45%] h-[320px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 ">
                {/* title */}
                <div className="font-thin text-sm mb-2 md:mb-0 "> {item.title} </div>
                <div className="hidden md:flex">-</div>
                <div> {item.stage} </div>
                <div className="flex gap-x-4 ">
                  {/* Icons */}
                  {item.icons?.map((icon, iconIndex) => {
                    return <div className="text-2xl text-white" key={iconIndex}>{icon}</div>;
                  })}
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;