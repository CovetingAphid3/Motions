"use client";

import styles from "../styles";

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative `}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Travel Discovery
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
      />
    </div>
  </nav>
);

export default Navbar;
