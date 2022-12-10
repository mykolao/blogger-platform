import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const NavLinkStyled = styled.div<Props>`
  height: 36px;
  margin-bottom: 9px;
  cursor: pointer;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
    color: ${({ theme, isActive }) => isActive && theme.accent};

    .navLink-group {
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 21px;
        height: 21px;
        filter: ${({ isActive }) =>
          isActive &&
          "invert(33%) sepia(87%) saturate(3160%) hue-rotate(324deg)brightness(99%) contrast(97%);"};
      }
    }

    .navLink-border {
      width: 2px;
      height: 36px;

      border-radius: 2px 0px 0px 2px;

      background: ${({ theme, isActive }) => isActive && theme.accent};
    }
  }
`;
