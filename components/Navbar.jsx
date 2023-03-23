import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logoSection}>
            <Link href="/home">
              {/* <h1 className={styles.logoText}>Globus Coin</h1> */}
              <Image
                src="/kredict-white.png"
                width={100}
                height={100}
                alt="Globus Logo"
                className={styles.logoImage}
              />
            </Link>
          </div>
          <div className={styles.menuSection}>
            <ul className={styles.menu}>
              <li>
                <Link href="#about" className={styles.menuItem}>About
                </Link>
              </li>
              <li>
                <Link href="#token" className={styles.menuItem}>Token
                </Link>
              </li>
              <li>
                <Link href="#team" className={styles.menuItem}>Team
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className={styles.menuItem}>Roadmap
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.menuItem}>Contact
                </Link>
              </li>
            </ul>
            <a
              className={styles.connectBtn}
              id="connect-wallet-btn"
            //   onClick={() => ethEnabled(true)}
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
