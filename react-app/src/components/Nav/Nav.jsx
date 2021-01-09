import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className={styles.nav}>
      <Link to="/">
        <img
        id={styles.logo}
          src="https://portal.unic.ac.cy/assets/app/media/unic/logo-mask.png"
          alt="logo"
        />
      </Link>
      <nav className={styles.links}>
        <h4><Link style={{textDecoration:"none", color: 'inherit'}} to="/dashboard">Dashboard</Link></h4>
        <h4><Link style={{textDecoration:"none", color: 'inherit'}} to="/finance">Finance</Link></h4>
        <a href="/finance">Test2</a>
        <h4><Link style={{textDecoration:"none", color: 'inherit'}} to="/courses">Courses</Link></h4>
        <h4><Link style={{textDecoration:"none", color: 'inherit'}} to="/careers">Careers</Link></h4>
      </nav>
    </header>
  );
}
export default Nav;
