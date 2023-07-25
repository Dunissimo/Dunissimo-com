import { FC } from "react";
import Project from "../components/project/Project";
import data from "../utils/data.json";

const Home: FC = () => {
  return (
    <>
      <div className="projects-list mt-8">
        <div className="container flex flex-col lg:flex-row justify-between flex-wrap items-center gap-4">
          {data.projects.map((project: IProject) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
