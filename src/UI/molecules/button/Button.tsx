import React from "react";
import styles from "./button.module.scss";
import type { ButtonProps } from "./Button.types";
import { Button as ButtonComp } from "primereact/button";
import {
  ElementName,
  setTestSelector,
} from "../../../lib/testSelector/testSelector";

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
        {...setTestSelector(ElementName.BUTTON, label)}
      />
    );
  }

  return (
    <ButtonComp
      label={label}
      className={`${styles.secondaryButton} ${classNameWrapper}`}
      iconPos={iconPos}
      {...props}
      {...setTestSelector(ElementName.BUTTON, label)}
    />
  );
};
