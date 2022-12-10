import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.neutral_light_30};

  box-shadow: 0px 5px 20px rgba(29, 33, 38, 0.03),
    0px 1px 2px rgba(29, 33, 38, 0.1);

  header {
    width: ${({ theme }) => theme.appWidth};
    margin: 12px 8px;

    h1 {
      font-weight: 600;
      font-size: 26px;
      line-height: 36px;
    }
  }
`;
