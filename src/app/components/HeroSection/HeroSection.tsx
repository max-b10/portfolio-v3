import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  title?: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "HeroSection test",
}) => {
  return (
    <div className={`relative ${styles.heroSection}`}>
      <Image
        src="/images/firebackground.jpg"
        alt="background image"
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`absolute inset-0 flex justify-center items-center ${styles.overlay}`}
      >
        {title}
      </div>
    </div>
  );
};

export default HeroSection;
