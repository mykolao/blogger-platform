import { axiosInstance } from "api/axiosInstance";
import { IApiResponse } from "api/types";
import { TPostList } from "types";

const endpoint = "posts";

type TResponse = IApiResponse<TPostList>;

const getPosts = async () => {
  const res = await axiosInstance.get<TResponse>(endpoint);
  return res.data;
};

export const postAPI = { getPosts };
