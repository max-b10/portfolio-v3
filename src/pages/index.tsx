import React from "react";
import { Button } from "../UI/molecules/button/Button";

const Home = (): JSX.Element => {
  return (
    <div>
      <div className={`flex`}>
        <Button primary label={"Play Game"} />
        <Button primary label={"View Code"} />
      </div>
    </div>
  );
};

export default Home;
