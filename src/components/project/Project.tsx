import { FC } from "react";
import { Link } from "react-router-dom";

import img from "../../assets/todopng.png";

import "./index.css";

const Project: FC = () => {
  return (
    <Link
      to="/project/1"
      className="project lg:w-[30%] bg-white text-black border cursor-pointer  hover:shadow-md"
    >
      <>
        <div className="screenshot border-b">
          <img src={img} alt="" />
        </div>

        <div className="description p-4">Description</div>
      </>
    </Link>
  );
};

export default Project;
