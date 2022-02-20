import React from "react";
import { NavLink } from "react-router-dom";
import "./style";

const Header = (props) => {
  const { links } = props;
  return (
    <div className="wbs-header">
      <div className="wbs-header__nav">
        {links.map((link, index) => {
          return (
            <NavLink
              key={index}
              exact
              className="wbs-header__nav__item"
              activeClassName="wbs-header__nav__item--selected"
              to={link.to}
            >
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
