import styled from "styled-components";

export const LayoutStyled = styled.div`
  position: absolute;
  top: 60px;

  width: 100%;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 60px);

  .app-container {
    width: ${({ theme }) => theme.appWidth};
    display: flex;

    main {
      background-color: ${({ theme }) => theme.grey};
      padding-top: 30px;
      width: 100%;
    }
  }
`;
