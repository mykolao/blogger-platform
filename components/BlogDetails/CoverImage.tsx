import { FC } from "react";

import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
}

const Container = styled.div`
  margin: 12px -24px 0 -24px;
  height: 312px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  & img {
    width: 77px;
    height: 63px;
  }
`;

export const CoverImage: FC<Props> = ({ src }) => {
  return (
    <Container>
      <Image src={src} alt="Blog Cover" />
    </Container>
  );
};
