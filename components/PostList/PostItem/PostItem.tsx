import { PostItemImage } from "components/PostList/PostItem/PostItemImage";
import { TPost } from "types";

import placeholder from "public/images/placeholder.svg";
import { PostItemDetails } from "components/PostList/PostItem/PostItemDetails";

interface Props {
  value: TPost;
}

export const PostItem: React.FC<Props> = ({ value }) => {
  const { title } = value;

  return (
    <article>
      <PostItemImage src={placeholder} alt={title} />
      <PostItemDetails value={value} />
    </article>
  );
};
