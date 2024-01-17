import React from "react";
import styles from "./ProjectDisplay.module.scss";
import Image from "next/image";
import { Button } from "../../../UI/molecules/button/Button";

interface ProjectDisplayProps {
  title: string;
  imageSrc: string;
  description: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  title,
  imageSrc,
  description,
}) => {
  return (
    <div className={styles.projectContainerLight}>
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
