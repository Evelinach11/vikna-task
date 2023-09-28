import { painReasons, painDescription } from "../../data/health-data";

export const Health = () => {
  return (
    <div className="health">
      <div className="health-path">
        <p>Головна/Здоров`я</p>
      </div>
      <div className="header-cart">
        <h1 className="header-cart__title">Стомились від болю в спині?</h1>
        <img src="./img/back.jpg" alt="back" className="header-cart__img" />
        <div className="header-cart__textContainer">
          <h2 className="header-cart__painDescription">{painDescription}</h2>
          <h3 className="header-cart__painTitle">Причини болю</h3>
          {painReasons.map((item) => {
            return <h4 className="header-cart__painReason">{item}</h4>;
          })}
        </div>

        <h3 className="header-cart__result">
          Пройдіть тест і дізнайтесь причину!
        </h3>
        <h4 className="header-cart__result">
          В залежності від результатів,можливо запропонувати індивідуальні
          рекомендації для покращення стану спини
        </h4>

        <button className="header-cart__btn">Пройти тест</button>
      </div>
    </div>
  );
};
