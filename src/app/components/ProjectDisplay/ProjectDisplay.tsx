import React from "react";
import styles from "./ProjectDisplay.module.scss";
import Image, { StaticImageData } from "next/image";
import { Button } from "../../../UI/molecules/button/Button";
interface ProjectDisplayProps {
  index: number;
  title: string;
  imageSrc: StaticImageData;
  description: string;
  playUrl?: string;
  codeUrl?: string;
  playText?: string;
  viewText?: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  index,
  title,
  imageSrc,
  description,
  playUrl,
  codeUrl,
  playText,
  viewText,
}) => {
  const isEven = index % 2 === 0;
  const isPrimary = isEven;
  const playGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(playUrl ?? "", "_blank");
  };
  const viewCode = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(codeUrl ?? "", "_blank");
  };

  return (
    <div
      className={`${styles.projectContainer} ${
        isEven ? styles.light : styles.dark
      }`}
    >
      <div className={styles.contentContainer}>
        <div className={styles.leftColumn}>
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
              classNameWrapper={`mr-2 ${styles.button}`}
              primary={isPrimary}
              label={playText ?? "Play Game"}
              onClick={playGame}
            />
            <Button
              classNameWrapper={`ml-2 ${styles.button}`}
              primary={isPrimary}
              label={viewText ?? "View Code"}
              onClick={viewCode}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <Image
            src={imageSrc}
            className={styles.image}
            alt="background image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
