import React from "react";
import { NavLink } from "react-router";
import { getNavLinkClass } from "../../utils/activeNavLinks";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className={getNavLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getNavLinkClass} to="/jobs">
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className={getNavLinkClass} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={getNavLinkClass} to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className={getNavLinkClass} to="/demo-login">
          Demo-Login
        </NavLink>
      </li>
      <li>
        <NavLink className={getNavLinkClass} to="/demo-register">
          Demo-Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Ant Coder </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {currentUser ? (
            <NavLink className="btn btn-outline" to="user-profile">User Profile</NavLink>
          ) : (
            <>
              <NavLink className="btn btn-ghost" to="/signup">
                Sign up
              </NavLink>
              <NavLink className="btn" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
