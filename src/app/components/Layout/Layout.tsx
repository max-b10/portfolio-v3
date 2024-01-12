import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

type DefaultLayoutProps = PropsWithChildren<{
  pageTitle?: string;
}>;

const Layout: FC<DefaultLayoutProps> = ({
  children,
  pageTitle = "layout test",
}) => {
  return (
    <>
      <div className="flex justify-content-center align-items-center h-screen">
        {pageTitle}
      </div>
      <div className={styles.mainWrapper}>{children}</div>
    </>
  );
};

export default Layout;
