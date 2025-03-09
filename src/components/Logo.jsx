import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.Logo}>
      <img src="./icon.png" alt="WorldWise logo" className={styles.logo} />
      <p className={styles.LogoText}>WorldWise</p>
    </div>
  );
}

export default Logo;
