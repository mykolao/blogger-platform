import { FC } from "react";

import { PostItemDetails } from "components/PostList/PostItem/PostItemDetails";
import { PostItemImage } from "components/PostList/PostItem/PostItemImage";
import placeholder from "public/images/placeholder.svg";
import { TPost } from "types";

interface Props {
  value: TPost;
}

export const PostItem: FC<Props> = ({ value }) => {
  const { title } = value;

  return (
    <article>
      <PostItemImage src={placeholder} alt={title} />
      <PostItemDetails value={value} />
    </article>
  );
};
