import { FC } from "react";

import styled from "styled-components";

interface Props {
  date: string;
}

const Paragraph = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;

  margin-top: 32px;

  & span {
    color: #797476;
  }
`;

const formatDate = (date: Date) => {
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return [month, day, year].join(".");
};

export const CreationDate: FC<Props> = ({ date }) => {
  const dateValue = formatDate(new Date(date));

  return (
    <Paragraph>
      <span>Blog creation date:</span> {dateValue}
    </Paragraph>
  );
};
