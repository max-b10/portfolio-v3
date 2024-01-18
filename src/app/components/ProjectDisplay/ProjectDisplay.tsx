import React from "react";
import styles from "./ProjectDisplay.module.scss";
import Image, { StaticImageData } from "next/image";
import { Button } from "../../../UI/molecules/button/Button";
interface ProjectDisplayProps {
  index: number;
  title: string;
  imageSrc: StaticImageData;
  description: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  index,
  title,
  imageSrc,
  description,
}) => {
  const isEven = index % 2 === 0;
  const isPrimary = isEven;
  return (
    <div
      className={`${styles.projectContainer} ${
        isEven ? styles.light : styles.dark
      }`}
    >
      <div className={styles.contentContainer}>
        <div className={styles.projectHeader}>
          <span>{title}</span>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            className={styles.image}
            alt="background image"
          />
        </div>

        <div className={`${styles.projectDescription}`}>
          <p>{description}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            classNameWrapper="mr-2"
            primary={isPrimary}
            label={"Play Game"}
          />
          <Button
            classNameWrapper="ml-2"
            primary={isPrimary}
            label={"View Code"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
