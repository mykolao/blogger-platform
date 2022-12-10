import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavLinkStyled } from "components/Navbar/NavLink/NavLink.styled";

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

export const NavLink = ({ value, path, iconSrc }: Props) => {
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

  return (
    <NavLinkStyled
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      isActive={isActive}
    >
      <Link href={path}>
        <div className="navLink-group">
          {iconSrc && <Image src={iconSrc} alt={"nav"} />}
          {value}
        </div>
        <div className="navLink-border" />
      </Link>
    </NavLinkStyled>
  );
};
