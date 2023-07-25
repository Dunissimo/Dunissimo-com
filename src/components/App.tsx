import { FC } from "react";
import Header from "./header/Header";
import Project from "./project/Project";

const App: FC = () => {
  return (
    <>
      <Header />

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

export default App;
