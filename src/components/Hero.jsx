import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#227a7a]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
              {/* <span className='text-[#F75935]'>   -   How to add color in?*/} 
        
         
          <p
            // initial={{ x: -200 }}
            // animate={{
            //   x: 0,
            //   transition: {
            //     type: "spring",
            //     stiffness: 1500,
            //     damping: 15,
            //     mass: 0.5,
            //   },
            // }}
            className={`${styles.heroMidText} mt-2 text-white-100`}
          >
            Hi, I am <span className='text-[#F75935]'>Sean</span>
          </p>


          <TypeAnimation  
      sequence={[
        'A developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'A software engineer', // Types 'Three' without deleting 'Two'
        600,
        'A consultant', 
        300,
        'A reports demon',
        300,
        'A back end boss', 
        300, 
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className={`${styles.heroSubText} mt-2 text-white-100`}
    />
        </div>
      </div>

      <ComputersCanvas />

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

export default Hero;
