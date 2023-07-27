import { FC } from "react";
import { Link } from "react-router-dom";
import { useUrl } from "../../utils/hooks";

interface IProps {
  project: IProject;
}

const Project: FC<IProps> = ({ project }) => {
  const { id, name, img } = project;

  const imgLink = useUrl(img);

  return (
    <Link
      to={`/project/${id}`}
      className="project w-[100%] lg:w-[32%] bg-white text-black cursor-pointer transition-all shadow-project hover:scale-105 hover:shadow-md"
    >
      <div>
        <div className="screenshot h-[300px]">
          <img className="w-full h-full object-cover" src={imgLink} alt="" />
        </div>

        <div className="bg-gray-900 text-white description p-4">{name}</div>
      </div>
    </Link>
  );
};

export default Project;
