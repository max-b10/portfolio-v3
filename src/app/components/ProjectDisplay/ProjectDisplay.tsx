import React from "react";
import styles from "./ProjectDisplay.module.scss";
import Image from "next/image";
import { Button } from "../../../UI/molecules/button/Button";
import FlappyBirdPic from "../../../../public/images/ProjectPreviews/flappy-bird.png";
interface ProjectDisplayProps {
  index: number;
  title: string;
  //   imageSrc: string;
  description: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  index,
  title,
  //   imageSrc,
  description,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`${styles.projectContainer} ${
        isEven ? styles.light : styles.dark
      }`}
    >
      <div className={styles.contentContainer}>
        <div className={`${styles.projectHeader}`}>
          <h3>{title}</h3>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={FlappyBirdPic}
            className={styles.image}
            alt="background image"
            height={200}
            width={200}
          />
        </div>
        <div className={`${styles.projectDescription}`}>
          <p>{description}</p>
        </div>

        <div className={`flex justify-content-center ${styles.test}`}>
          <Button primary label={"Play Game"} />
          <Button primary label={"View Code"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
