import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";
interface BannerProps {
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  showTopBorder = false,
  showBottomBorder = false,
}) => {
  return (
    <div
      className={`relative ${styles.banner} ${
        showTopBorder ? styles.topBorder : ""
      } ${showBottomBorder ? styles.bottomBorder : ""}`}
    >
      <Image src={"/images/MB.png"} alt={"Mb"} width={16} height={16} />
    </div>
  );
};

export default Banner;
