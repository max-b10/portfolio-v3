interface IconProps {
  /**
   * Name of Icon file in folder icons
   */
  iconName: string;
  /**
   * A width of Icon, default to 16
   */
  width?: number;
  /**
   * A height of Icon, default to 16
   */
  height?: number;
  /**
   * Title when hovering the Icon
   */
  title?: string;
  /**
   * Tooltip
   */
  tooltip?: JSX.Element;
  /**
   * A props for Icon to use tooltips
   */
  tooltipProps?: object;
}

export type { IconProps };
