import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import { navLinks } from "../../../menu";

const Navbar: FC = () => {
  return (
    <nav className={`p-0 m-0 ${styles.nav}`}>
      <ul className="flex justify-content-center m-0 p-4">
        {navLinks.map((navLink) => (
          <li className={`mx-3 ${styles.listOptions}`} key={`${navLink.title}`}>
            {navLink.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
