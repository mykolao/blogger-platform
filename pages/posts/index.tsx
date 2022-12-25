import Head from "next/head";

import Layout from "components/Layout";
import { TPostList } from "types";
import { GetServerSideProps } from "next";
import { postAPI } from "api";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import Divider from "components/Divider";
import PostList from "components/PostList";

interface Props {
  posts: TPostList;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await postAPI.getPosts();
  const posts = res.items ?? [];

  return {
    props: { posts }
  };
};

const Container = styled.div`
  margin: 0 0 0 24px;
`;

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | Blogger</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle title="Posts" />
          <Divider />
          {/* TODO: Sort */}
          <PostList posts={posts} />
        </Container>
      </Layout>
    </>
  );
};

export default Posts;
