import React from "react";
import styles from "./ProjectDisplay.module.scss";
import Image from "next/image";
import { Button } from "../../../UI/molecules/button/Button";

interface ProjectDisplayProps {
  index: number;
  title: string;
  imageSrc: string;
  description: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  index,
  title,
  imageSrc,
  description,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`${styles.projectContainer} ${
        isEven ? styles.light : styles.dark
      }`}
    >
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <Image src={imageSrc} alt="background image" height={150} width={150} />
        <div>
          <span>{description}</span>
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
