import React from "react";
import { useQuery } from "@apollo/client";
import Projects from "../components/Projects/index";
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
        <h2 className="intro-title">Welcome to My Portfolio</h2>
        <p className="intro-text">
          I'm a creative technologist with a passion for innovative solutions
          and cutting-edge technology. Explore my projects and get to know more
          about my work.
        </p>
      </section>

      <div className="col-12 col-md-10 my-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Projects projects={projects} title="View some of my fav's below" />
        )}
      </div>
    </main>
  );
};

export default Home;
