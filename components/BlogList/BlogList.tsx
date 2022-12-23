import { FC, Fragment } from "react";

import styled from "styled-components";

import BlogItem from "components/BlogList/BlogItem";
import Divider from "components/Divider";
import { TBlogList } from "types/TBlogList";

interface Props {
  blogs: TBlogList;
}

const Container = styled.section`
  margin: 24px 24px 0 0;
`;

export const BlogList: FC<Props> = ({ blogs }) => {
  return (
    <Container>
      {blogs.map((blog, i, arr) => (
        <Fragment key={blog.id}>
          <BlogItem value={blog} />
          {/* No Divider for the last item */}
          {i < arr.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Container>
  );
};
