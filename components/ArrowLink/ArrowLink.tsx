import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import arrowIcon from "public/images/icon-arrow-back.svg";
import { ChildrenProp } from "types";

interface Props extends ChildrenProp {
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 35px;

  & span {
    font-size: 14px;
  }
`;

export const ArrowLink: FC<Props> = ({ href, children }) => {
  return (
    <StyledLink href={href}>
      <Image src={arrowIcon} alt="Back" />
      <span>{children}</span>
    </StyledLink>
  );
};
