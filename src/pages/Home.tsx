import { FC } from "react";
import Project from "../components/project/Project";
import data from "../utils/data.json";
import { IProject } from "../utils/interfaces";

const Home: FC = () => {
  return (
    <section className="container pt-8">
      <h1 className="text-4xl font-bold text-center">
        Денис Москвин (@Dunissimo)
      </h1>
      <p className="lg:w-1/2 text-center text-xl mx-auto mt-2">
        Это мой личный сайт, на котором Вы можете посмотреть мои проекты и
        прочитать краткую (или не очень) информацию обо мне. Я не стал брать
        шаблон из интернета и сделал всё просто. Как по мне, вышло хорошо.
      </p>

      <h2 className="text-4xl font-bold mt-8">Проекты</h2>
      <div className="projects-list mt-4">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap items-center gap-4">
          {data.projects
            .sort((a, b) => b.rating - a.rating)
            .map((project: IProject) => (
              <Project key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
