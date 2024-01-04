import React from "react";
import styles from "./button.module.scss";
import type { ButtonProps } from "./Button.types";
import { Button as ButtonComp } from "primereact/button";

export const Button = ({
  label,
  primary = false,
  classNameWrapper,
  iconPos,
  ...props
}: ButtonProps) => {
  if (primary) {
    return (
      <ButtonComp
        label={label}
        className={`${styles.primaryButton} ${classNameWrapper}`}
        iconPos={iconPos}
        {...props}
      />
    );
  }

  return (
    <ButtonComp
      label={label}
      className={`${styles.secondaryButton} ${classNameWrapper}`}
      iconPos={iconPos}
      {...props}
    />
  );
};
