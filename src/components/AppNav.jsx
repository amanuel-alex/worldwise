import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";
import style from "../page/Login.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/login" className={style.login}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
