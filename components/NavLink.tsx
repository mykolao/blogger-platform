import { FC, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "styles/NavLink.module.scss";

interface Props {
  value: string;
  path: string;
  iconSrc?: string;
}

const comparePaths = (p1: string, p2: string): boolean => {
  const [base1] = p1.split("/").filter((s) => !!s.length);
  const [base2] = p2.split("/").filter((s) => !!s.length);

  return base1 === base2;
};

const NavLink: FC<Props> = ({ value, path, iconSrc }) => {
  const { asPath } = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(comparePaths(path, asPath));

  useEffect(() => {
    if (isHovered || comparePaths(path, asPath)) {
      if (!isActive) setIsActive(true);
    } else {
      if (isActive) setIsActive(false);
    }
  }, [isHovered, asPath, isActive, path]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const classNames = `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <div
      className={classNames}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={styles.group}>
        {iconSrc && <Image src={iconSrc} alt={"nav"} />}
        <Link href={path}>{value}</Link>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default NavLink;
