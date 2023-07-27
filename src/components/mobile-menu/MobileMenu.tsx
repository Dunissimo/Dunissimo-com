import { FC, useState } from "react";

import "./index.css";
import { Link } from "react-router-dom";

const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">Обо мне</Link>
          </li>
          <li>
            <Link to="https://github.com/Dunissimo" target="_blank">
              Мой гитхаб
            </Link>
          </li>
          <li>
            <Link to="https://t.me/Dunissimmo" target="_blank">
              Мой телеграм
            </Link>
          </li>
          <li>
            <Link to="https://vk.com/junior_frontend" target="_blank">
              Мой вк
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`burger lg:hidden ${open ? "active" : ""}`}
        onClick={toggleOpen}
      >
        <span className="line "></span>
        <span className="line "></span>
        <span className="line "></span>
      </div>
    </>
  );
};

export default MobileMenu;
