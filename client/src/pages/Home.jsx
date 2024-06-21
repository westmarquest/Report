import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main className="main-content">
      <section className="intro">
        <h6 className="intro-title">Welcome</h6>
        <p className="intro-text">
          Hello, I'm a creative professional with a passion for blending design
          and development to craft captivating digital experiences. Bringing a
          diverse background in graphic design, product advertisement, and
          digital production to the table, while having completed a full stack
          development program and actively adding to my development artilery,
          I'm enthusiastic about collaborating with the minds of tomorrow to
          transform the ideas of today into immersive digital solutions that
          resonate with audiences. Thank you for visitng my portfolio, hope to
          connect soon!
        </p>
      </section>
    </main>
  );
};

export default Home;
