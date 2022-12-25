import { axiosInstance } from "api/axiosInstance";
import { IApiResponse } from "api/types";

import { TBlog, TBlogList } from "types";

const endpoint = "blogs";

type TGetBlogsResponse = IApiResponse<TBlogList>;

const getBlogs = async () => {
  const res = await axiosInstance.get<TGetBlogsResponse>(endpoint);
  return res.data;
};

const getBlog = async (id: string) => {
  const url = `${endpoint}/${id}`;

  const res = await axiosInstance.get<TBlog>(url);
  return res.data;
};

export const blogAPI = { getBlogs, getBlog };
