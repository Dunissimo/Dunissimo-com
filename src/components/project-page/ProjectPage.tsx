import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../utils/data.json";
import { useUrl } from "../../utils/hooks";

import back from "../../assets/logo/back.svg";
import Stack from "../stack/Stack";

const ProjectPage: FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.filter((pr) => pr.id === Number(id));

  const img = useUrl(project[0].img);
  const { description, gh_link, live_link, name, stack } = project[0];

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container text-center pt-8">
        <div className="flex items-start justify-center gap-4">
          <h2 className="text-4xl font-bold">{name}</h2>
          <img
            src={back}
            width={30}
            alt=""
            className="cursor-pointer transition-all hover:scale-105"
            onClick={clickHandler}
          />
        </div>
        <div className="my-4 flex justify-center gap-4">
          {stack.map((item) => (
            <Stack stackItem={item} />
          ))}
        </div>
        <div className="flex justify-center my-4">
          <img src={img} alt="" />
        </div>
        <p className="max-w-[50%] mx-auto my-4 text-xl">{description}</p>
        {gh_link ? (
          <a
            href={gh_link ? gh_link : location.pathname}
            className="text-blue-500 hover:underline"
          >
            Ссылка на GitHub
          </a>
        ) : (
          ""
        )}
        <br />
        <a href={live_link} className="text-blue-500 hover:underline">
          Ссылка для просмотра
        </a>
      </div>
    </>
  );
};

export default ProjectPage;
