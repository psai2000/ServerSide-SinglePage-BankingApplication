import "./Navbar.css";
import "../Material-Icons.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div className="d-flex navlinks">
        <ul className="flex-fill" id="navigation__nav-bar">
          <li className="navigation__nav-list">
            <NavLink to={props.navPath}>
              <i className="material-icons navigation__nav-icon-desktop">
                {props.icon}
              </i>
              <label className="navigation__label-nav-desktop">
                {props.labelName}
              </label>
              <i className="material-icons navigation__arrow-icon-desktop">
                chevron_right
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
