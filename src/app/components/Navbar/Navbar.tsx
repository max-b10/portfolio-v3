import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import { navLinks } from "../../../menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
interface IconMapping {
  [key: string]: React.ReactNode;
}
const iconMapping: IconMapping = {
  GitHubIcon: <GitHubIcon className={styles.icon} />,
  LinkedInIcon: <LinkedInIcon className={styles.icon} />,
  EmailIcon: <EmailIcon className={styles.icon} />,
  LocalPhoneIcon: <LocalPhoneIcon className={styles.icon} />,
  PictureAsPdfIcon: <PictureAsPdfIcon className={styles.icon} />,
};
const Navbar: FC = () => {
  return (
    <nav className={`p-0 m-0 ${styles.nav}`}>
      <ul className="flex justify-content-center m-0 p-3">
        {navLinks.map((navLink) => (
          <a className="mx-5" key={`${navLink.title}`} href={navLink.url}>
            <li className={styles.listOptions}>
              {iconMapping[navLink.iconName]}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
