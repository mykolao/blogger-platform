import { FC } from "react";

import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 180px;

  background-color: #fff;
`;

export const PostItemImage: FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
};
