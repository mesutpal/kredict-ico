import React from "react";
import Image from "next/image";

const About = ({ styles }) => {
  return (
    <>
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
          <Image width={300} height={280} src="/about.gif" alt="image" />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Meet Future KREDICT</h3>
          <p className={styles.aboutText}>
            We will strive to make KREDICTChain as one of the prominent way
            Blockchain will be used in different areas of business and economy
            as well as social welfare and other major areas of technology
          </p>
          <p className={styles.aboutText}>
            <i className="las la-arrow-right"></i>KREDICTChain Blockchain
          </p>
          <p className={styles.aboutText}>
            <i className="las la-arrow-right"></i>Multicurrency Wallet
          </p>
          <p className={styles.aboutText}>
            <i className="las la-arrow-right"></i>Defi Exchange
          </p>
        </div>
      </section>
      <section className={styles.futureSection}>
        <h3>Future Products</h3>
        <div className={styles.futureItemBlock}>
          <ul className={styles.futureColumn}>
            <li>
              <i className="las la-star"></i>KREDICTChain Blockchain
            </li>
            <li>
              <i className="las la-star"></i>Multicurrency Wallet
            </li>
            <li>
              <i className="las la-star"></i>Defi Exchange
            </li>
            <li>
              <i className="las la-star"></i>MultiVerse and MetaVerse
            </li>
            <li>
              <i className="las la-star"></i>Audit Platform for KREDICTChain
            </li>
            <li>
              <i className="las la-star"></i>NFT Marketplace
            </li>
          </ul>
          <ul className={styles.futureColumn}>
            <li>
              <i className="las la-star"></i>P2P Exchange
            </li>
            <li>
              <i className="las la-star"></i>Decentralized Marketplace for
              Products
            </li>
            <li>
              <i className="las la-star"></i>Social Networking Platform with
              Short videos feature
            </li>
            <li>
              <i className="las la-star"></i>Online Education Platform
            </li>
            <li>
              <i className="las la-star"></i>Dating App
            </li>
            <li>
              <i className="las la-star"></i>Browser
            </li>
          </ul>
          <ul className={styles.futureColumn}>
            <li>
              <i className="las la-star"></i>Financial and Insurance Services
              Platform
            </li>
            <li>
              <i className="las la-star"></i>Travel, Hotel and Holiday Booking
              Platform
            </li>
            <li>
              <i className="las la-star"></i>Payment Wallet
            </li>
            <li>
              <i className="las la-star"></i>Taxi, Bike and Vehicle Hailing
              Platform
            </li>
            <li>
              <i className="las la-star"></i>Asset Based Platform for Real State
              and other assets
            </li>
            <li>
              <i className="las la-star"></i>Services Platform
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Vision and Mission</h3>
          <p className={styles.aboutText}></p>
          <div className={styles.aboutText}>
            <i className="las la-lock"></i>
            <h2>Vision</h2>
            To be at the forefront of new era of technology and innovations
            which serves next generation of human life , so they can live with
            more freedom and less fear.
          </div>
          <div className={styles.aboutText}>
            <i className="las la-lock"></i>
            <h2>Mission</h2>
            Is to give best products and services to users by exploring all
            possible frontiers in new technology and innovations, and also being
            socially responsible to our planet and our societies.
          </div>
          <div className={styles.aboutText}>
            <i className="las la-lock"></i>
            <h2>Solution</h2>
            We have planned a ecosystem of new solutions which will help users
            to save their assets as well as trade and use them for different
            services in the coming years. Also we will keep on researching on
            how we can reinvent the wheel in a way that blockchain can be used
            in most of the areas of day to day life and how it can be used for
            betterment of humankind and users of the technology.
          </div>
        </div>
        <div className={styles.aboutImageSection}>
          <Image width={300} height={320} src="/vision-illustration.svg" alt="image" />
        </div>
      </section>
    </>
  );
};

export default About;
