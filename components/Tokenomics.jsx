import React from "react";

const Tokenomics = ({ styles }) => {
  return (
    <section className={styles.tokenomicsSection} id="token">
      <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
      <div className={styles.tokenomicsDetailsHolder}>
        <div className={styles.tokenomicsColumn}>
          <h4 className={styles.tokenDetailHead}>Token Name</h4>
          <p className={styles.tokenDetailText}>KREDICT</p>
          <h4 className={styles.tokenDetailHead}>Total Supply</h4>
          <p className={styles.tokenDetailText}>1,000,000,000,000,000</p>
          <h4 className={styles.tokenDetailHead}>Pre Sale Start Date</h4>
          <p className={styles.tokenDetailText}>1st Oct 2022</p>
          <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
          <p className={styles.tokenDetailText}>BNB</p>
        </div>
        <div className={styles.tokenomicsColumn}>
          <h4 className={styles.tokenDetailHead}>
            ICO Pre- Sale KREDICT Supply Launch
          </h4>
          <p className={styles.tokenDetailText}>200,000,000,000,000</p>
          <h4 className={styles.tokenDetailHead}>
            ICO Supply OF KREDICT launch
          </h4>
          <p className={styles.tokenDetailText}>200,000,000,000,000</p>
          <h4 className={styles.tokenDetailHead}>Soft cap</h4>
          <p className={styles.tokenDetailText}>4000 BNB</p>
          <h4 className={styles.tokenDetailHead}>ICO Start Date</h4>
          <p className={styles.tokenDetailText}>1st of Jan 2023</p>
        </div>
        <div className={styles.tokenomicsColumn}>
          <h4 className={styles.tokenDetailHead}>Pre Sale - 1st Phase</h4>
          <p className={styles.tokenDetailText}>1 BNB = 2,600,000,000 KDT</p>
          <h4 className={styles.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
          <p className={styles.tokenDetailText}>1 BNB = 1,300,000,000 KDT</p>
          <h4 className={styles.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
          <p className={styles.tokenDetailText}>1 BNB = 650,000,000 KDT</p>
          <h4 className={styles.tokenDetailHead}>Pre Sale- 4th phase</h4>
          <p className={styles.tokenDetailText}> 1 BNB = 325,000,000 KDT</p>
        </div>
      </div>
      <p>
        <small>
          <i>*All above Data is only for Sample</i>
        </small>
      </p>
    </section>
  );
};

export default Tokenomics;
