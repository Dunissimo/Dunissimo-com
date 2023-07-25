import { FC } from "react";
import Project from "../components/project/Project";

const Home: FC = () => {
  return (
    <>
      <div className="projects-list mt-8">
        <div className="container flex flex-col lg:flex-row justify-between flex-wrap items-center gap-4">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
};

export default Home;
