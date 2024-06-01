import React from "react";
import { useQuery } from "@apollo/client";
import Projects from "./Projects";
import { GET_PROJECTS } from "../utils/queries";

// const Home = () => {
//   const { loading, error, data } = useQuery(GET_PROJECTS);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const projects = data.projects || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-10 my-3">
//           <Projects projects={projects} />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main className="main-content">
      <section className="intro">
        <h6 className="intro-title">Welcome</h6>
        <p className="intro-text">
          Creative professional with a passion for blending design and
          development to craft captivating digital experiences. Bringing a
          diverse background in graphic design, product advertisement, and
          digital production to the table, while having completed a full stack
          development program and actively adding to my development artilery,
          I'm enthusiastic about collaborating with the minds of tomorrow to
          transform the ideas of today into immersive digital solutions that
          resonate with audiences.
        </p>
      </section>

      {/* <div className="col-12 col-md-10 my-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Projects projects={projects} title="View some of my fav's below" />
        )}
      </div> */}
    </main>
  );
};

export default Home;
