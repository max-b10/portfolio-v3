import React, { ReactNode } from "react";

interface HeroSectionProps {
  title?: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "HeroSection test",
}) => {
  return (
    <div className="flex justify-content-center align-items-center h-screen">
      {title}
    </div>
  );
};

export default HeroSection;
