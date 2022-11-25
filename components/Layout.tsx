import { FC, PropsWithChildren } from "react";

import Header from "./Header";
import Navbar from "./Navbar";

import styles from "styles/Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
