const routes = {
  blogs: (param?: string) => {
    return param ? `/blogs/${param}` : `/blogs`;
  },
  posts: (param?: string) => {
    return param ? `/posts/${param}` : `/posts`;
  },
};

export default routes;
