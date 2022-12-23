import Header from "components/Header";
import GlobalBackground from "components/Layout/GlobalBackground";
import { LayoutStyled } from "components/Layout/Layout.styled";
import Navbar from "components/Navbar";
import { ChildrenProp } from "types";

export const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <GlobalBackground />
      <Header />
      <LayoutStyled>
        <div className="app-container">
          <Navbar />
          <main>{children}</main>
        </div>
      </LayoutStyled>
    </>
  );
};
