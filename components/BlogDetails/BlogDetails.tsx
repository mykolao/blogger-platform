import { FC } from "react";

import styled from "styled-components";

import { CoverImage } from "components/BlogDetails/CoverImage";
import Description from "components/BlogDetails/Description";
import placeholder from "public/images/placeholder.svg";
import { TBlog } from "types/TBlog";
import { TPostList } from "types";
import PostList from "components/BlogDetails/PostList";
import Divider from "components/Divider";

interface Props {
  value: TBlog;
  posts: TPostList;
}

const Container = styled.section`
  margin-top: 12px;
  margin-right: 24px;
`;

export const BlogDetails: FC<Props> = ({ value, posts }) => {
  return (
    <Container>
      <CoverImage src={placeholder} />
      <Description value={value} />
      <Divider />
      <PostList posts={posts} />
    </Container>
  );
};
