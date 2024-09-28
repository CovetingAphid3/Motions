"use client";

import styles from "../styles";
import { textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div
      viewport={{ once: true, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <h1 variants={textVariant(1.1)} className={styles.heroHeading}>
         <span className="text-white">comfort</span> in
        </h1>
        <div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center pb-5"
        >
          <h1 className={styles.heroHeading}>every<span className="text-white"> mile</span></h1>
        </div>
      </div>

      <div className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div  />

        <img
          src="/hero.jpg"
          alt="hero_cover"
          className="w-full  sm:h-[500px] h-[350px] object-cover rounded-lg  relative pr-10"
        />
      </div>
    </div>
  </section>
);

export default Hero;
