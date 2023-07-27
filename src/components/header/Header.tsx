import { FC } from "react";
import { Link } from "react-router-dom";

import gh from "../../assets/logo/gh.svg";
import tg from "../../assets/logo/tg.svg";
import vk from "../../assets/logo/vk.svg";

const Header: FC = () => {
  return (
    <header className="header py-4 shadow-header">
      <div className="container lg:flex">
        <h1 className="text-center mb-4 lg:mb-0 w-auto lg:max-w-[25%] lg:mr-4 text-3xl font-bold">
          Мои проекты
        </h1>

        <div className="w-[85%] desktop-menu mx-auto flex items-center justify-between">
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
      </div>
    </header>
  );
};

export default Header;
