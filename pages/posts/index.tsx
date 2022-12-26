import { FC } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import styled from "styled-components";

import { postAPI } from "api";
import Divider from "components/Divider";
import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import PostList from "components/PostList";
import { TPostList } from "types";

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

const Posts: FC<Props> = ({ posts }) => {
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
