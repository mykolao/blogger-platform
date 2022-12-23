import axios from "axios";

import { TBlog } from "types";

const axiosInstance = axios.create({
  baseURL: "https://blogs-black.vercel.app/",
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity"
  }
});

const endpoint = "blogs";

interface IGetBlogsResponse {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: TBlog[];
}

const getBlogs = async () => {
  const res = await axiosInstance.get<IGetBlogsResponse>(endpoint);
  return res.data;
};

const getBlog = async (id: string) => {
  const url = `${endpoint}/${id}`;

  const res = await axiosInstance.get<TBlog>(url);
  return res.data;
};

export const blogAPI = { getBlogs, getBlog };
