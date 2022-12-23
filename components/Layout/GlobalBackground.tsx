import styled from "styled-components";

const Styled = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  & .right {
    background-color: ${({ theme }) => theme.neutral_light_30};
  }
`;

const GlobalBackground = () => {
  return (
    <Styled>
      <div className="right" />
      <div className="left" />
    </Styled>
  );
};

export default GlobalBackground;
