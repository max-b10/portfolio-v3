import React from "react";
import styles from "./IntroTitle.module.scss";

interface IntroTitleProps {
  nameString: string;
  portfolioString: string;
}

const IntroTitle: React.FC<IntroTitleProps> = ({
  nameString,
  portfolioString,
}) => {
  return (
    <div className={styles.titleContainer}>
      <div className={`mr-1 ${styles.name}`}>{nameString}</div>
      <div className={`ml-1 ${styles.portfolio}`}>{portfolioString}</div>
    </div>
  );
};

export default IntroTitle;
