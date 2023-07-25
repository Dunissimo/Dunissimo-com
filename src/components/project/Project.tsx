import { FC } from "react";

import img from "../../assets/todopng.png";
import { Link } from "react-router-dom";

const Project: FC = () => {
  return (
    <Link
      to="/project/1"
      className="lg:w-[30%] border cursor-pointer shadow hover:shadow-md"
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
