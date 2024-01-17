import React from "react";
import { Button } from "../UI/molecules/button/Button";
import HeroSection from "../app/components/HeroSection/HeroSection";
// import Navbar from "../app/components/Navbar/Navbar";
import Banner from "../app/components/Banner/Banner";
import styles from "./index.module.css";
const Home = (): JSX.Element => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner showBottomBorder />

      <HeroSection />
      <Banner showTopBorder showBottomBorder />
      <div className={`flex justify-content-center ${styles.test}`}>
        <Button primary label={"Play Game"} />
        <Button primary label={"View Code"} />
      </div>
      <Banner showTopBorder />
    </>
  );
};

export default Home;
