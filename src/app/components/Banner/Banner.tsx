import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";

const Banner: React.FC = ({}) => {
  return (
    <div className={`relative ${styles.banner}`}>
      <Image src={"/images/MB.png"} alt={"Mb"} width={16} height={16} />
    </div>
  );
};

export default Banner;
