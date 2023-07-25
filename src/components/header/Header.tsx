import { FC } from "react";

import gh from "../../assets/logo/gh.svg";
import tg from "../../assets/logo/tg.svg";
import vk from "../../assets/logo/vk.svg";
import { Link } from "react-router-dom";

import "./index.css";

const Header: FC = () => {
  return (
    <header className="header py-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold">Мои проекты</h1>

        <nav className="justify-self-start flex gap-4">
          <li className="list-none text-white hover:text-gray-400">
            <Link to="/">Главная</Link>
          </li>

          <li className="list-none text-white hover:text-gray-400">
            <Link to="/about">Обо мне</Link>
          </li>
        </nav>

        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/Dunissimo" target="_blank">
              <img
                className="transition-all hover:scale-105"
                width={35}
                src={gh}
                alt=""
              />
            </a>
          </li>

          <li>
            <a href="https://t.me/Dunissimmo" target="_blank">
              <img
                className="transition-all hover:scale-105"
                width={35}
                src={tg}
                alt=""
              />
            </a>
          </li>

          <li>
            <a href="https://vk.com/junior_frontend" target="_blank">
              <img
                className="transition-all hover:scale-105"
                width={35}
                src={vk}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
