import NavLink from "./NavLink";

import blogsIcon from "public/images/icon-blogs.svg";
import postsIcon from "public/images/icon-posts.svg";
import routes from "routes";
import styles from "styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <nav>
        <NavLink value="Blogs" path={routes.blogs()} iconSrc={blogsIcon} />
        <NavLink value="Posts" path={routes.posts()} iconSrc={postsIcon} />
      </nav>
    </aside>
  );
};

export default Navbar;
