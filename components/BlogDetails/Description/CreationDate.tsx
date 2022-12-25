import { useDateFormat } from "hooks";
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

export const CreationDate: FC<Props> = ({ date }) => {
  const { dateStr: dateValue } = useDateFormat(date);

  return (
    <Paragraph>
      <span>Blog creation date:</span> {dateValue}
    </Paragraph>
  );
};
