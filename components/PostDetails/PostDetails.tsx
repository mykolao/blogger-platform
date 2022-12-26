import { BlogPreview } from "components/PostDetails/BlogPreview";
import { PostImage } from "components/PostDetails/PostImage";
import { useDateFormat } from "hooks";
import styled from "styled-components";
import { TPost } from "types";

interface Props {
  value: TPost;
}

const Section = styled.section``;

const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;

  padding-top: 28px;
`;

const Date = styled.span`
  padding-top: 8px;
  display: block;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;

  color: ${({ theme }) => theme.neutral_dark_30};
`;

const Paragraph = styled.p`
  padding-top: 30px;
`;

export const PostDetails: React.FC<Props> = ({ value }) => {
  const { blogId, blogName, title, createdAt, content } = value;

  const { dateStr, timeStr } = useDateFormat(createdAt);

  const date = `${dateStr} at ${timeStr}`;

  return (
    <Section>
      <BlogPreview {...{ blogId, blogName }} />
      <Title>{title}</Title>
      <Date>{date}</Date>
      <PostImage alt={title} />
      <Paragraph>{content}</Paragraph>
    </Section>
  );
};
