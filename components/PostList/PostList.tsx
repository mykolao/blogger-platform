import PostItem from "components/PostList/PostItem";
import styled from "styled-components";
import { TPostList } from "types";

interface Props {
  posts: TPostList;
}

const Grid = styled.section`
  margin: 24px 24px 0 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px 32px;
`;

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Grid>
      {posts.map((post) => (
        <PostItem key={post.id} value={post} />
      ))}
    </Grid>
  );
};
