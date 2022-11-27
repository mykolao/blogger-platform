import { FC } from "react";

import Image from "next/image";

import arrowIcon from "public/images/icon-arrow-down.svg";
import styles from "styles/ShowMoreBtn.module.scss";

interface Props {
  onClick?: () => void;
}

const ShowMoreBtn: FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        <span>Show more</span>
        <Image src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
};

export default ShowMoreBtn;
