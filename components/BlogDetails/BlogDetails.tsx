import { FC } from "react";

import styled from "styled-components";

import { CoverImage } from "components/BlogDetails/CoverImage";
import Description from "components/BlogDetails/Description";
import placeholder from "public/images/placeholder.svg";
import { TBlog } from "types/TBlog";

interface Props {
  value: TBlog;
}

const Container = styled.section`
  margin-top: 12px;
`;

export const BlogDetails: FC<Props> = ({ value }) => {
  // const { name } = value;

  return (
    <Container>
      <CoverImage src={placeholder} />
      <Description value={value} />
    </Container>
  );
};
