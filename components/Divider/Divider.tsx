import styled from "styled-components";

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.neutral_light_neg_10};
  border: none;
`;
