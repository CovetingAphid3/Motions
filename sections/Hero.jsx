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
          Explore With
        </h1>
        <div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Style</h1>
        </div>
      </div>

      <div className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className="absolute w-full h-[530px] bg-white rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/apollo.svg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
