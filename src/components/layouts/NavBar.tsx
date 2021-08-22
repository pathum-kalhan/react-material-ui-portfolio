import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useDispatch } from "react-redux";
import {  Link } from "react-router-dom";


import {  toggleDrawer } from "../../store/actions/authActions";

import "../../styles/util.scss";
import "../../styles/nav-bar.scss";



function NavBar() {
  let dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className="nav__toolbar">
          <div className="hamburger">
            <IconButton
              onClick={toggle}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div className="nav__links">
            <Link to="/" className="nav__link">
              home
            </Link>
            <Link to="/projects" className="nav__link">
              projects
            </Link>
            <Link
              className="nav__link"
              to={{
                pathname:
                  "https://docs.google.com/document/d/1RYeRGT4cNhCGVQDWJRnbQoOzkZXxxu26kCqw_iyoLkE/edit?usp=sharing",
              }}
              target="_blank"
            >
              cv
            </Link>
            <Link
              className="nav__link"
              to={{
                pathname:
                  "https://www.linkedin.com/in/pathum-kalhan-%F0%9F%9A%80-978336197",
              }}
              target="_blank"
            >
              linkedIn
            </Link>
            <Link
              className="nav__link"
              to={{
                pathname:
                  "https://stackoverflow.com/users/7346647/pathum-kalhan",
              }}
              target="_blank"
            >
              stackoverflow
            </Link>
            <Link
              className="nav__link"
              to={{
                pathname: "https://github.com/pathum-kalhan",
              }}
              target="_blank"
            >
              github
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
