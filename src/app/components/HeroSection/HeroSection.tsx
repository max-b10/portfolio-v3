import React from "react";
import styles from "./HeroSection.module.scss";
import IntroTitle from "../IntroTitle/IntroTitle";

interface HeroSectionProps {
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className={`relative ${styles.heroSection}`}>
      <div
        className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
      >
        <IntroTitle nameString="Max Bungay" portfolioString={"Portfolio"} />
      </div>

      <div
        className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
      >
        {/* <div>{title}</div> */}
        <div className={styles.titleContainer}>
          <div className={styles.name}>Max Bungay</div>
          <div className={styles.occupation}>Frontend Developer</div>
        </div>
        <div className={styles.profileContainer}>
          <p className={styles.profileDescription}>
            <span>Welcome</span>
            <span>to my</span>
            <span>portfolio,</span>
            <span>built using</span>
            <span>Next.js & React.</span>
            <span>Feel free</span>
            <span>to take a scroll</span>
            <span>down and check</span>
            <span>out some vanilla </span>
            <span>JavaScript Classics,</span>
            <span>Retro Games,</span>
            <span>Responsive Design</span>
            <span>and more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
