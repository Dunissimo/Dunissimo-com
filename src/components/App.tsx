import { FC } from "react";
import Header from "./header/Header";
import Project from "./project/Project";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjectPage from "./project-page/ProjectPage";

const App: FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default App;
