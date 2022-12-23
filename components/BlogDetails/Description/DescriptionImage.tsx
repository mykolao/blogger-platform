import { FC } from "react";

import Image from "next/image";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const Container = styled.div`
  border-radius: 50%;
  background-color: #fff;

  padding: 64px 61px;

  max-width: 156px;
  max-height: 156px;

  border: 5px solid ${({ theme }) => theme.neutral_light_neg_10};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 26px;
  }
`;

export const DescriptionImage: FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
};
