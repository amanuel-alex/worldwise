import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";
import style from "./Logo.module.css";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="./icon.png" className={style.logo} /> <h1>WorldWise</h1>
      </Link>
      <ul>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
