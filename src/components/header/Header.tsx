import { FC } from "react";

import gh from "../../assets/logo/gh.svg";
import tg from "../../assets/logo/tg.svg";
import vk from "../../assets/logo/vk.svg";
import { Link } from "react-router-dom";

import "./index.css";
import MobileMenu from "../mobile-menu/MobileMenu";

const Header: FC = () => {
  return (
    <header className="header py-4">
      <div className="container flex justify-between items-center">
        <h1 className="lg:w-[15%] text-3xl font-bold">Мои проекты</h1>

        <div className="w-[85%] desktop-menu hidden lg:flex items-center justify-between">
          <nav>
            <ul className="flex gap-4">
              <li className="list-none text-white hover:text-gray-400">
                <Link to="/">Главная</Link>
              </li>

              <li className="list-none text-white hover:text-gray-400">
                <Link to="/about">Обо мне</Link>
              </li>
            </ul>
          </nav>

          <ul className="flex gap-4">
            <li>
              <Link to="https://github.com/Dunissimo" target="_blank">
                <img
                  className="transition-all hover:scale-105"
                  width={35}
                  title="Мой гитхаб"
                  src={gh}
                  alt="Мой гитхаб"
                />
              </Link>
            </li>

            <li>
              <Link to="https://t.me/Dunissimmo" target="_blank">
                <img
                  className="transition-all hover:scale-105"
                  width={35}
                  title="Моя телега"
                  src={tg}
                  alt="Моя телега"
                />
              </Link>
            </li>

            <li>
              <Link to="https://vk.com/junior_frontend" target="_blank">
                <img
                  className="transition-all hover:scale-105"
                  width={35}
                  title="Мой вк"
                  src={vk}
                  alt="Мой вк"
                />
              </Link>
            </li>
          </ul>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
