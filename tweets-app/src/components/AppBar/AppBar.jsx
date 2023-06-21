import { NavLink } from "react-router-dom";
import './Styles_AppBar.scss'

export const AppBar = () => {
  const {PUBLIC_URL}= process.env
  return (
    <div className="AppBar-container">
      <ul className="AppBar-list">
        <li className="AppBar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-class" : "AppBar-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="AppBar-item">
          <NavLink
            to="/tweets"
            className={({ isActive }) =>
              isActive ? "active-class" : "AppBar-link"
            }
          >
            Tweets
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
