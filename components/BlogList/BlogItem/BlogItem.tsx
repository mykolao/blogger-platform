import { FC } from "react";

import styled from "styled-components";

import { BlogItemImage } from "components/BlogList/BlogItem/BlogItemImage";
import { BlogItemTitle } from "components/BlogList/BlogItem/BlogItemTitle";
import WebsiteLink from "components/WebsiteLink";
import placeholderImg from "public/images/placeholder.svg";
import routes from "routes";
import { TBlog } from "types/TBlog";

interface Props {
  value: TBlog;
}

const Container = styled.article`
  margin: 12px 11px;

  display: flex;
  gap: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

export const BlogItem: FC<Props> = ({ value }) => {
  const { id, name, description, websiteUrl } = value;

  return (
    <Container>
      <BlogItemImage src={placeholderImg} alt={name} />
      <div>
        <BlogItemTitle href={routes.blogs(id)} value={name} />
        <WebsiteLink href={websiteUrl} text="Website:" />
        <Description>{description}</Description>
      </div>
    </Container>
  );
};
