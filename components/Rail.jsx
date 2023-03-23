import React from "react";

const Rail = ({ styles }) => {
  return (
    <section className={styles.railSection}>
      <div className={styles.railColumn}>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>HIGH SPEED AND LOW COSTS</h3>
            <p className={styles.railText}>
              Immediate funding without third-parties. Smart contracts
              autonomously perform funding - collect and release payments
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>FAIR DEALS ONLY</h3>
            <p className={styles.railText}>
              Open-source smart contract ensures fair and transparent deals
              between merchants and affiliates
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>PROTECTION FROM HACKING</h3>
            <p className={styles.railText}>
              On a decentralized platform, all user accounts are independent; if
              one account is hacked, this won&apos;t breach the security of.
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>COST EFFECTIVE</h3>
            <p className={styles.railText}>
              Scale economy through decentralization leading to significant
              decrease in transaction fees
            </p>
          </div>
        </div>
      </div>
      <div className={styles.railColumn}>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>NO MORE MIDDLE MEN</h3>
            <p className={styles.railText}>
              Transactions are verified by distributed nodes, and anyone can
              join or leave the network as they please without disrupting the
              network&apos;s ability to form consensus on transactions.
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>EASY ENTRY AND FAIR COMPETITION</h3>
            <p className={styles.railText}>
              Any one can join, and Fair for everyone without any partiality
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>GLOBAL P2P TRADE FINANCING</h3>
            <p className={styles.railText}>
              The peer-to-peer architecture of blockchain allows all
              cryptocurrencies to be transferred worldwide, without the need of
              any middle-man or intermediaries or central server
            </p>
          </div>
        </div>
        <div className={styles.railCard}>
          <i className="las la-caret-left"></i>
          <div>
            <h3 className={styles.railHead}>REAL-TIME DATABASE</h3>
            <p className={styles.railText}>
              Every Transaction and Updates are real time and directly pulled
              from Smart Contracts lying on Blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rail;
