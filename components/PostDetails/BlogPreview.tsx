import Image from "next/image";
import Link from "next/link";
import routes from "routes";
import styled from "styled-components";
import { TPost } from "types";

import placeholder from "public/images/placeholder.svg";

interface Props extends Pick<TPost, "blogName" | "blogId"> {}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 36px;
`;

const Title = styled(Link)`
  font-weight: 600;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;

  height: 48px;
  aspect-ratio: 1;
`;

export const BlogPreview: React.FC<Props> = ({ blogName, blogId }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={placeholder} alt={blogName} width={22} height={18} />
      </ImageContainer>
      <Title href={routes.blogs(blogId)}>{blogName}</Title>
    </Container>
  );
};
