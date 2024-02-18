export const TypingText = ({ title, textStyles }) => (
  <p className={`font-normal text-[14px] text-crimson ${textStyles}`}>
    {title.split("").map((letter, index) => (
      <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
    ))}
  </p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </h2>
);
