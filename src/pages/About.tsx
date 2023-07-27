import { FC } from "react";

import img from "../assets/me.jpg";

const About: FC = () => {
  return (
    <div className="mx-4 lg:mx-0 lg:w-2/3 container pt-8">
      <div className="mb-8 lg:mb-0 lg:w-1/3 pl-4 lg:float-right flex flex-col justify-center items-center">
        <img src={img} alt="" className="max-h-[500px]" />
        <p className="text-center mt-4 opacity-75">
          Это я, но только сгенерированный нейросетью, достаточно сильно похоже.
          По моему мнению, у меня нет другой подходящей фотографии
        </p>
      </div>

      <div className="text-lg">
        <h2 className="font-bold text-xl mb-6">Story</h2>
        <p>
          Мне 17 лет (в марте будет 18, юху). Учусь в колледже по направлению
          "Информационные системы и программирование". Перешел на второй курс и
          жду не дождусь начала профильных предметов.
        </p>

        <p className="mt-4">
          Планирую из колледжа забрать базовые знания о компьютерах, сетях.
          Computer Science, короче говоря. Ну и алгоритмы туда же. В свободное
          от учебы время учу Frontend и не знаю бед (почти). Уже больше двух лет
          учу, с перерывами конечно. Проекты Вы видели на соседней странице.
        </p>

        <p className="mt-4">
          В общей сложности занимаюсь программированием около 3 лет. С чего всё
          началось-то?. С 7 лет я днями напролёт сидел за компом, играл в
          разное. Но в какой то момент захотелось создавать то, на что убивал
          много времени. В седьмом классе пробовал html+css (классные игры, да),
          но быстро потерял мотивацию. С начала восьмого я уже плотненько сел за
          C# (наконец-то игры!). Полгода сидел за этим творением Майков, в
          хорошем смысле. Даже хотели с другом в роли художника сделать свою
          игру. Но дальше прототипа не ушли. Наступил новый год и я решил
          бросить игры и пойти снова на фронт (надеюсь, шутка безопасная). И вот
          с того момента я в этом прекрасном мире перекрашивания кнопочек.
        </p>

        <p className="mt-4">
          На C# можно делать приложения для винды и в них тоже есть фронтенд.
          Также на нём пишут бэкенд, но тогда он меня не интересовал, а WPF
          приложения не вкатили. Так что меня ждал JS.
        </p>

        <p className="mt-4">
          Шарписты, за текст выше не бейте, дело давнее, терминологию и всякие
          такие проблемы не знаю. Писал, как чувствовал.
        </p>

        <h2 className="font-bold text-xl my-6">Опыт</h2>

        <p className="mt-4">
          С историей ознакомились, теперь опыт. С вёрсткой всё хорошо, адаптив
          для меня не страшное слово, немного могу в семантику. Уверенно владею
          JavaScript'ом, осталось разобраться во всех интересных мелочах, но это
          уже любопытство, а не рабочая задача. Раз с JS все хорошо, то и с
          библиотеками разобраться не сложно, какие то готовые решения я не
          часто использовал, ведь я учился и хотел писать свои велосипеды. Но
          при желании могу изучить нужную либу. Давно уже перешел на TypeScript,
          таковы тенденции, да и после C# мне больше интересен именно TS.
        </p>

        <p className="mt-4">
          С React также проблем особых нет, с философией разобрался,
          компонентный подход понял и не вижу для него замены, очень удобно. Как
          и с JS, есть желание углубиться внутрь и понять всё. Работал с
          экосистемой: роутинг с react-router; Менеджмент состояния с Redux (+
          RTK, хотя из за RTK забыл весь синтаксис простого Redux, но это
          исправимо чтением документации) и недавно начал пробовать Zustand;
          Стилизация (MUI, Ant Design, Tailwind); Работа с API, пробовал и с
          обычным fetch, и с axios, а также с react/rtk query (хотя в последних
          пока не совсем разобрался, идея понятна и логична, все круто, но пока
          не вкатился), также чуток разбирался с react-saga, но опыта совсем
          мало.
        </p>

        <p className="mt-4">
          Насчёт коммерческого опыта. Он есть, но небольшой. Побывал в небольшом
          стартапе, где я был единственным фронтендером, что грустно, ведь мне
          хочется команду + более опытных коллег. Там я занимался переносом с
          нативного JS на React и внедрением новых фич. Проработал недолго, у
          стартапа начались проблемы с финансами, как я понял. Это был сервис по
          анализу телеграм каналов.
        </p>

        <p className="mt-4">
          Участвовал в олимпиаде по веб-разработке и занял второе место (нужно
          было за 4 часа сделать сайт по выданной тематике, никаких библиотек и
          фреймворков). Помогал новичкам с обучением, это не совсем менторство,
          но все же. Мне понравилась роль преподавателя, в какой то степени. Но
          я понял, что эффективно учить одновременно максимум до 5 человек,
          дальше уже сложно.
        </p>

        <h2 className="font-bold text-xl my-6">Итог</h2>
        <p className="mt-4">
          Много текста вышло, но зато всё искренне. Буду рад оценке моего
          "сайта-портфолио", особенно по части дизайна. А также наконец уже
          начать получать настоящий опыт в коммерческой разработке.
        </p>
      </div>
    </div>
  );
};

export default About;