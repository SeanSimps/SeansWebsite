import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";

const HeroTech = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div className="relative z-0 pr-5 top-[120px]">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1 flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#227a7a]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="col-span-4">
            <p className={`${styles.heroMidText} mt-2 text-white-100`}>
              Hi, I am <span className="text-[#F75935]">Sean</span>
            </p>
            <div className="{`${styles.heroSubText} mt-2 text-white-100`">
              <TypeAnimation
                sequence={[
                  "A developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "A software engineer", // Types 'Three' without deleting 'Two'
                  600,
                  "A consultant",
                  300,
                  "A reports demon",
                  300,
                  "A back end boss",
                  300,
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className={`${styles.heroSubText} mt-2 text-white-100`}
              />
            </div>
          </div>

          <div className="col-span-5 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 flex flex-wrap justify-end">
            {technologies.map((technology) => (
              <div key={technology.name} className="w-1/3 max-w-xs p-2">
                <div className="flex flex-row items-center">
                  <div className="ml-auto w-24 h-24">
                    <BallCanvas icon={technology.icon} />
                  </div>
                  <div className="pl-2">
                    <p className="text-white-100">
                      {technology.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <motion.div 
        animate={{
          y: [0, 0, 10, -10, 10, -10, 0, 0],
          // x: [0, 0, 3, -3, 3, -3, 0, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[47px] h-[85px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                }}
              
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </motion.div>
      
    </section>
  );
};

export default HeroTech;
