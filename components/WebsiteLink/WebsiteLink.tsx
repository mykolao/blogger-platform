import { FC } from "react";

import styled from "styled-components";

interface Props {
  text: string;
  href: string;
}

const formatURL = (value: string, length = 50) => {
  if (value.length <= length) return value;

  return `${value.substring(0, length)}...`;
};

const Span = styled.span`
  font-size: 14px;
  margin-top: 3px;
  color: ${({ theme }) => theme.neutral_dark_30};

  & a {
    color: ${({ theme }) => theme.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const WebsiteLink: FC<Props> = ({ text, href }) => {
  const urlText = formatURL(href);

  return (
    <Span>
      {`${text} `}
      <a href={href} target="_blank" rel="noreferrer">
        {urlText}
      </a>
    </Span>
  );
};
