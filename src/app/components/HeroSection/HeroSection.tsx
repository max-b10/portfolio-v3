import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import IntroTitle from "../IntroTitle/IntroTitle";

interface HeroSectionProps {
  title?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title = "hiya" }) => {
  const [showTempTitle, setShowTempTitle] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the temp title after a couple of seconds
    const timeout = setTimeout(() => {
      setShowTempTitle(false);
    }, 1500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

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
      {showTempTitle && (
        <div
          className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
        >
          <IntroTitle nameString={"Max Bungay"} portfolioString={"Portfolio"} />
        </div>
      )}
      {!showTempTitle && (
        <div
          className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
