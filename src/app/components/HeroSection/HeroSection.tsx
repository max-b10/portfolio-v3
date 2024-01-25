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
        <div className={styles.headerContainer}>
          <div className={styles.name}>Max Bungay</div>
          <div className={styles.occupation}>Frontend Developer</div>
          <div className={styles.nav}>
            <nav>
              <ol>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className={styles.profileContainer}>
          <p className={styles.profileDescription}>
            <span>Welcome</span>
            <span>to my</span>
            <span>portfolio,</span>
            <span>built using</span>
            <span>Next.js & React.</span>
            <span>Feel free to </span>
            <span>take a scroll</span>
            <span>down and check</span>
            <span>out some vanilla </span>
            <span>JavaScript Classics,</span>
            <span>Retro Games,</span>
            <span>Responsive Design</span>
            <span>and more.</span>
          </p>
        </div>
      </div>
      <div className={styles.bubblesWrapper}>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
        <div>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
