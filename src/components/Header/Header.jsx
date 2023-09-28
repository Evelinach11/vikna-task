import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1 className="header-title">ТВІЙLIFE</h1>
      <header>
        <nav>
          <ul className="header">
            <li>
              <Link to="/health" className="header-link">
                Здоров`я
              </Link>
              <img
                src="./img/arrow-down.png"
                alt="Logo"
                className="header-img"
              />
            </li>
            <li>
              <Link to="/house" className="header-link">
                Дім і побут
              </Link>
              <img
                src="./img/arrow-down.png"
                alt="Logo"
                className="header-img"
              />
            </li>
            <li>
              <Link to="/food" className="header-link">
                Харчування
              </Link>
              <img
                src="./img/arrow-down.png"
                alt="Logo"
                className="header-img"
              />
            </li>
            <li>
              <Link to="/routine" className="header-link">
                Дім і побут
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
