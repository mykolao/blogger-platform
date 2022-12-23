import { FC } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import styled from "styled-components";

import { blogAPI } from "api/blogAPI";
import ArrowLink from "components/ArrowLink";
import BlogDetails from "components/BlogDetails";
import Divider from "components/Divider";
import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import routes from "routes";
import { TBlog } from "types/TBlog";

interface Props {
  blog: TBlog;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const queryId = context.query.id as string;
  const blog = await blogAPI.getBlog(queryId);

  return {
    props: {
      blog
    }
  };
};

const Container = styled.div`
  margin: 0 0 0 24px;
`;

const Blog: FC<Props> = ({ blog }) => {
  const { name } = blog;

  const title = `${name} | Blogger;`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle title="Blogs" subtitle={name} />
          <Divider />
          <ArrowLink href={routes.blogs()}>Back to blogs</ArrowLink>
          <BlogDetails value={blog} />
        </Container>
      </Layout>
    </>
  );
};

export default Blog;
