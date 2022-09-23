import { FC } from "react"
import { NavLink } from "react-router-dom"
import classes from "./index.module.scss"

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.activeLink : " "
              }
            >
              Home
            </NavLink>
            <span className={classes.hoverLine}></span>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="cities"
              className={({ isActive }) =>
                isActive ? classes.activeLink : " "
              }
            >
              Cities
            </NavLink>
            <span className={classes.hoverLine}></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
