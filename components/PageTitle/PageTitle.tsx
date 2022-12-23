import { FC } from "react";

import styled from "styled-components";

import { SubTitle } from "components/PageTitle/SubTitle";

interface Props {
  title: string;
  subtitle?: string;
}

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  margin-bottom: 8px;

  h3 {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const PageTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <h3>{title}</h3>
      {subtitle && <SubTitle value={subtitle} />}
    </Container>
  );
};
