import Link from "next/link";
import React from "react";

const Footer = ({ styles }) => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.brandFooter}>
        <p className={styles.brandText}>Designed with</p>
        <p className={styles.heart}>
          <i className="las la-heart"></i>
        </p>
        <p className={styles.brandText}>by</p>
        <p className={styles.brandText}>
          <Link href="https://www.kredict.com" target="_blank">
            KREDICT
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
