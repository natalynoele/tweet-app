import { Link, NavLink } from "react-router-dom";
import './Styles_AppBar.scss'

export const AppBar = () => {
  return (
    <div className="AppBar-container">
      <ul className="AppBar-list">
        <li className="AppBar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "lactive-class" : "AppBar-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="AppBar-item">
          <NavLink
            to="/tweets"
            className={({ isActive }) =>
              isActive ? "lactive-class" : "AppBar-link"
            }
          >
            Tweets
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
