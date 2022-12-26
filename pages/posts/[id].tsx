import { postAPI } from "api";
import ArrowLink from "components/ArrowLink";
import Divider from "components/Divider";
import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import PostDetails from "components/PostDetails";
import { GetServerSideProps } from "next";
import Head from "next/head";
import routes from "routes";
import styled from "styled-components";
import { TPost } from "types";

interface Props {
  post: TPost;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const postId = context.query.id as string;
  const post = await postAPI.getPost(postId);

  return {
    props: {
      post
    }
  };
};

const Container = styled.div`
  margin: 0 0 0 24px;
`;

const Post: React.FC<Props> = ({ post }) => {
  const { title } = post;

  const pageTitle = `${title} | Blogger`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle title="Posts" subtitle={title} />
          <Divider />
          <ArrowLink href={routes.posts()}>Back to posts</ArrowLink>
          <PostDetails value={post} />
        </Container>
      </Layout>
    </>
  );
};
export default Post;
