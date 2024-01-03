import { ReactNode } from 'react';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';
  /**
   * The Icon in the button
   */
  icon?: ReactNode;
  /**
   * Optional class for button styling
   */
  classNameWrapper?: string;
  /**
   * Optional class for button styling
   */
  iconPos?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { ButtonProps };
