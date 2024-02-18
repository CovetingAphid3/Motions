'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Travel Astro" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Planning your next adventure? Welcome to{' '}
        <span className="font-extrabold text-white">Travel Astro</span> - your
        gateway to a world of travel possibilities. Immerse yourself in the
        excitement of exploring new destinations, meeting fellow travelers, and
        creating memories that will last a lifetime. With{' '}
        <span className="font-extrabold text-white">Travel Astro</span>, the
        journey begins from the moment you dream it. Whether you're a solo
        explorer or seeking group adventures, let the magic of travel unfold.
        Embark on a virtual journey with us and scroll down to discover the
        wonders that await!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;