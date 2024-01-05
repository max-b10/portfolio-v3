import React from "react";
import { useRouter } from "next/router";
import { Button } from "../UI/molecules/button/Button";

const Home = (): JSX.Element => {
  // Function to navigate to the /profile page

  return (
    <div>
      <span>My new portfolio</span>
      <Button label="hi" />
    </div>
  );
};

export default Home;
