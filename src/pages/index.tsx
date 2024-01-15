import React from "react";
import { Button } from "../UI/molecules/button/Button";
import HeroSection from "../app/components/HeroSection/HeroSection";

const Home = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <div className={`flex justify-content-center`}>
        <Button primary label={"Play Game"} />
        <Button primary label={"View Code"} />
      </div>
    </>
  );
};

export default Home;
