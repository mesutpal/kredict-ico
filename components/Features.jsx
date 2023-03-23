import React from "react";

const Features = ({ styles }) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureBlock}>
        <div className={styles.featureCard}>
          <p className={styles.featureIcon}>
            <i className="las la-cube"></i>
          </p>
          <h4 className={styles.featureHead}>DECENTRALISED SYSTEM</h4>
          <p className={styles.featureText}>
            A technical failure can paralyze all affiliate networks on a
            centralized platfotrm, until the cause is detected and rectified the
            system.
          </p>
        </div>
        <div className={styles.featureCard}>
          <p className={styles.featureIcon}>
            <i className="las la-shield-alt"></i>
          </p>
          <h4 className={styles.featureHead}>BANKS PAYMENT SYSTEMS</h4>
          <p className={styles.featureText}>
            Up to 45% of a merchant&apos;s budget is spent on commissions
            charged by a number of brokers, including banks, payment systems.
          </p>
        </div>
        <div className={styles.featureCard}>
          <p className={styles.featureIcon}>
            <i className="las la-project-diagram"></i>
          </p>
          <h4 className={styles.featureHead}>CPA NETWORKS</h4>
          <p className={styles.featureText}>
            Affiliate networks have to pay for using existing platforms on a
            monthly basis or spend money on developing proprietary platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
