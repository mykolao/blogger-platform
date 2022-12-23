import styled from "styled-components";

export const ShowMoreStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin: 43px 0 43px 0;

  & button {
    background: none;

    border: 1px solid ${({ theme }) => theme.neutral_dark__neg_60};
    border-radius: 2px;

    padding: 8px 29px;

    display: flex;
    align-items: center;
    gap: 11px;

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
