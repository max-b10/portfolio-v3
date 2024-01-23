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
      <div>{nameString}</div>
      <div>{portfolioString}</div>
    </div>
  );
};

export default IntroTitle;
