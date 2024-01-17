import Image from "next/image";
import React from "react";
import {
  ElementName,
  setTestSelector,
} from "../../../lib/testSelector/testSelector";

import { IconProps } from "./Icon.types";

const BASE_PATH = "icons";

export const Icon: React.FC<IconProps> = ({
  iconName,
  width = 16,
  height = 16,
  title,
  tooltip,
  tooltipProps = {},
}) => {
  const iconPath = `/${BASE_PATH}/${iconName}`;

  if (title == undefined) {
    title = iconName.split(".").slice(0, -1).join(".").split("/").slice(-1)[0];
  }

  return (
    <>
      {tooltip && <>{tooltip}</>}

      <Image
        color="white"
        src={iconPath}
        alt={title}
        width={width}
        height={height}
        {...tooltipProps}
        {...setTestSelector(ElementName.IMAGE, title)}
      />
    </>
  );
};
