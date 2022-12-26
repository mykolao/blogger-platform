import Image from "next/image";
import placeholder from "public/images/placeholder.svg";
import styled from "styled-components";

interface Props {
  src?: string;
  alt: string;
}

const Container = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  width: 100%;
  height: 420px;
`;

export const PostImage: React.FC<Props> = ({ src, alt }) => {
  const source = src ?? placeholder;

  return (
    <Container>
      <Image src={source} alt={alt} width={77} height={63} />
    </Container>
  );
};
