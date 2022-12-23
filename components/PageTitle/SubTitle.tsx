import { FC } from "react";

import Image from "next/image";
import styled from "styled-components";

import arrowRight from "public/images/icon-arrow-right.svg";

interface Props {
  value: string;
}

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & img {
    margin: 6px;
  }

  & span {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
  }
`;

export const SubTitle: FC<Props> = ({ value }) => {
  return (
    <Container>
      <Image src={arrowRight} alt="arrow" />
      <span>{value}</span>
    </Container>
  );
};
