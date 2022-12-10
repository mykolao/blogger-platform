import { NavbarStyled } from "components/Navbar/Navbar.styled";
import NavLink from "components/Navbar/NavLink";
import blogsIcon from "public/images/icon-blogs.svg";
import postsIcon from "public/images/icon-posts.svg";
import routes from "routes";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <nav>
        <NavLink value="Blogs" path={routes.blogs()} iconSrc={blogsIcon} />
        <NavLink value="Posts" path={routes.posts()} iconSrc={postsIcon} />
      </nav>
    </NavbarStyled>
  );
};
