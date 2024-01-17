import React from "react";
import HeroSection from "../app/components/HeroSection/HeroSection";
// import Navbar from "../app/components/Navbar/Navbar";
import Banner from "../app/components/Banner/Banner";
import ProjectDisplay from "../app/components/ProjectDisplay/ProjectDisplay";
import { projects } from "../menu/projectsData";
const Home = (): JSX.Element => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner showBottomBorder />

      <HeroSection />
      <Banner showTopBorder />
      {projects.map((project) => (
        <ProjectDisplay
          key={project.id}
          index={project.index}
          title={project.title}
          // imageSrc={project.imageSrc}
          description={project.description}
        />
      ))}

      <Banner showTopBorder />
    </>
  );
};

export default Home;
