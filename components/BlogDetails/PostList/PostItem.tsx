import styled from "styled-components";
import { TPost } from "types";
import placeholder from "public/images/placeholder.svg";
import Image from "next/image";
import Link from "next/link";
import routes from "routes";
import { useDateFormat } from "hooks";

interface Props {
  value: TPost;
}

const Article = styled.article``;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const Title = styled(Link)`
  display: block;

  font-weight: 600;
  font-size: 16px;

  padding-top: 18px;
`;

const Description = styled.p`
  font-size: 16px;
  padding-top: 12px;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.neutral_light_neg_60};

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;

  padding-top: 6px;
`;

export const PostItem: React.FC<Props> = ({ value }) => {
  const { id, title, shortDescription, createdAt } = value;

  const { dateStr } = useDateFormat(createdAt);

  return (
    <Article>
      <ImageContainer>
        <Image src={placeholder} alt={title} />
      </ImageContainer>
      <Title href={routes.posts(id)}>{title}</Title>
      <Description>{shortDescription}</Description>
      <Date>{dateStr}</Date>
    </Article>
  );
};
