import { FC } from "react";

import styled from "styled-components";

import { CreationDate } from "components/BlogDetails/Description/CreationDate";
import { DescriptionImage } from "components/BlogDetails/Description/DescriptionImage";
import { DescriptionText } from "components/BlogDetails/Description/DescriptionText";
import WebsiteLink from "components/WebsiteLink";
import placeholder from "public/images/placeholder.svg";
import { TBlog } from "types/TBlog";

interface Props {
  value: TBlog;
}

const Container = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 24px;
  margin-bottom: 23px;
  margin-right: 64px;
`;

const Content = styled.div``;

const Title = styled.h2`
  padding-top: 4px;
  font-weight: 600;
  font-size: 22px;
`;

export const Description: FC<Props> = ({ value }) => {
  const { name, createdAt, websiteUrl, description } = value;

  return (
    <Container>
      <DescriptionImage src={placeholder} alt={name} />
      <Content>
        <Title>{name}</Title>
        <CreationDate date={createdAt} />
        <WebsiteLink href={websiteUrl} text="Website:" />
        <DescriptionText>{description}</DescriptionText>
      </Content>
    </Container>
  );
};
