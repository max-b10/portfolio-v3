import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import { navLinks } from "../../../menu";

const Navbar: FC = () => {
  return (
    <div className={styles.nav}>
      <ul className="flex">
        {navLinks.map((navLink) => (
          <li key={`${navLink.title}`}>{navLink.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
