import { PostItem } from "components/BlogDetails/PostList/PostItem";
import styled from "styled-components";
import { TPostList } from "types";

interface Props {
  posts: TPostList;
}

const Section = styled.section`
  padding-top: 48px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
`;

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Section>
      {posts.map((post) => (
        <PostItem key={post.id} value={post} />
      ))}
    </Section>
  );
};
