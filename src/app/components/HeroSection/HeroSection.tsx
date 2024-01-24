import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import IntroTitle from "../IntroTitle/IntroTitle";

interface HeroSectionProps {
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className={`relative ${styles.heroSection}`}>
      <Image
        src="/images/firebackground.jpg"
        alt="background image"
        layout="fill"
        style={{
          opacity: "30%",
        }}
        objectFit="cover"
      />
      <div
        className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
      >
        <IntroTitle
          nameString={`Max${"\u00A0".repeat(2)}Bungay`}
          portfolioString={"Portfolio"}
        />
      </div>

      <div
        className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
      >
        {/* <div>{title}</div> */}
      </div>
    </div>
  );
};

export default HeroSection;
