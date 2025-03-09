import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by world wise Inc
      </p>
    </footer>
  );
}

export default Footer;
