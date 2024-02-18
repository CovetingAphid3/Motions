"use client";



import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className={`flex-1 ${styles.flexCenter}`}>
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </div>
      <div className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
