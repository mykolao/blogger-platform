import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { useDateFormat } from "hooks";
import placeholder from "public/images/placeholder.svg";
import routes from "routes";
import { TPost } from "types";

interface Props {
  value: TPost;
}

const Container = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 18px;
`;

const ImageContainer = styled.div`
  height: 48px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 22px;
    height: 18px;
  }
`;

const Title = styled(Link)`
  display: block;

  font-weight: 600;
  font-size: 16px;
`;

const BlogName = styled(Link)`
  font-size: 14px;
`;

const Date = styled.p`
  font-size: 12px;
  line-height: 16px;

  margin-top: 5px;
  color: ${({ theme }) => theme.neutral_light_neg_60};
`;

export const PostItemDetails: FC<Props> = ({ value }) => {
  const { title, id, blogId, blogName, createdAt } = value;
  const { dateStr: date } = useDateFormat(createdAt);

  return (
    <Container>
      <ImageContainer>
        <Image src={placeholder} alt={title} />
      </ImageContainer>
      <div>
        <Title href={routes.posts(id)}>{title}</Title>
        <BlogName href={routes.blogs(blogId)}>{blogName}</BlogName>
        <Date>{date}</Date>
      </div>
    </Container>
  );
};
