import { FC } from "react";

import Link from "next/link";
import styled from "styled-components";

interface Props {
  value: string;
  href: string;
}

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 18px;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const BlogItemTitle: FC<Props> = ({ href, value }) => {
  return (
    <StyledLink href={href}>
      <h4>{value}</h4>
    </StyledLink>
  );
};
