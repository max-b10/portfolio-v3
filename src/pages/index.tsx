import React from "react";
import { Button } from "../UI/molecules/button/Button";
import Layout from "../app/components/Layout/Layout";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className={`flex`}>
        <Button primary label={"Play Game"} />
        <Button primary label={"View Code"} />
      </div>
    </Layout>
  );
};

export default Home;
