import { FC } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import styled from "styled-components";

import { blogAPI } from "api/blogAPI";
import BlogList from "components/BlogList";
import Divider from "components/Divider";
import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import ShowMore from "components/ShowMore";
import { TBlogList } from "types/TBlogList";

interface Props {
  blogs: TBlogList;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await blogAPI.getBlogs();
  return {
    props: { blogs: res.items || [] }
  };
};

const Container = styled.div`
  margin: 0 0 0 24px;

  & .Blogs__show-more {
    margin-top: 48px;
  }
`;

const Blogs: FC<Props> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blogs | Blogger</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle title="Blogs" />
          <Divider />
          {/* TODO: Search and Sort */}
          <BlogList blogs={blogs} />
          <div className="Blogs__show-more">
            <ShowMore />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Blogs;
