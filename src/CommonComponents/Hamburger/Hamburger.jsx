import "./Hamburger.css";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  const expand = show
    ? "navlinks display__hamburger"
    : "navlinks display__none";

  return (
    <div className="hamburger__topnav">
      <a
        href="#href"
        className={"hamburger__icon "}
        id="hamburger__hamicon"
        onClick={() => setShow(!show)}
      >
        <i className="material-icons hamburger__icon-i">menu</i>
      </a>
      <a href="#href" className="hamburger__link"></a>
      <div className={expand}>
        <NavLink to="/" onClick={() => setShow(!show)}>
          <i className="material-icons hamburger__nav-icon">grid_view</i>
          <label className="hamburger__label-nav">Account Summary</label>
        </NavLink>
        <NavLink to="/transaction" onClick={() => setShow(!show)}>
          <i className="material-icons hamburger__nav-icon">sync_alt</i>
          <label className="hamburger__label-nav">Transaction</label>
        </NavLink>
        <NavLink to="/fundTransfer" onClick={() => setShow(!show)}>
          <i className="material-icons hamburger__nav-icon">currency_rupee</i>
          <label className="hamburger__label-nav">Fund Transfer</label>
        </NavLink>
        <NavLink to="/cards" onClick={() => setShow(!show)}>
          <i className="material-icons hamburger__nav-icon">payment</i>
          <label className="hamburger__label-nav">Cards</label>
        </NavLink>
        <NavLink to="/billAndRecharge" onClick={() => setShow(!show)}>
          <i className="material-icons hamburger__nav-icon">receipt</i>
          <label className="hamburger__label-nav">Bill & Recharge</label>
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Hamburger;
