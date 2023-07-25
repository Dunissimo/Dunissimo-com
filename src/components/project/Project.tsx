import { FC } from "react";

import img from "../../assets/todopng.png";

const Project: FC = () => {
  return (
    <article className="lg:w-[30%] border cursor-pointer shadow hover:shadow-md">
      <div className="screenshot border-b">
        <img src={img} alt="" />
      </div>

      <div className="description p-4">Description</div>
    </article>
  );
};

export default Project;
