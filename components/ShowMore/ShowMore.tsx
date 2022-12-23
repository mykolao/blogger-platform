import { FC } from "react";

import Image from "next/image";

import { ShowMoreStyled } from "components/ShowMore/ShowMore.styled";
import arrowIcon from "public/images/icon-arrow-down.svg";

interface Props {
  onClick?: () => void;
}

export const ShowMore: FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <ShowMoreStyled>
      <button onClick={handleClick}>
        <span>Show more</span>
        <Image src={arrowIcon} alt="arrow" />
      </button>
    </ShowMoreStyled>
  );
};
