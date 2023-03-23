import Image from "next/image";
import React from "react";

const Why = ({ styles }) => {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyTextSection}>
        <h2 className={styles.whyHeader}>Why choose us?</h2>
        <p className={styles.whyAnswer}>
          As we all know that any company thrives on its Mission and Vision and
          can only become successful when it gets support of the people who
          believe in their Mission and Vision. We have put forward our Vision of
          future in front of you and we are very passionate to make a difference
          for current and future generation of humanity.
        </p>
        <div className={styles.whyAnswerPoint}>
          <h3>Authentic Brand</h3>
          <p>
            Our aim will be to be able to provide genuine value to the community
            is the first step toward developing a meaningful products and
            services and, as a result, a successful organisation.
          </p>
        </div>
        <div className={styles.whyAnswerPoint}>
          <h3>Comprehensive Platform</h3>
          <p>
            We prefer comprehensive platform for cryptocurrency enthusiasts
            rather than having too many platforms to achieve their goal of
            growing funds in the world of Blockchain
          </p>
        </div>
        <div className={styles.whyAnswerPoint}>
          <h3>Simple To Use</h3>
          <p>
            Our platform will be extremely simple to use, with only the
            necessary options for users and other stakeholders.
          </p>
        </div>
      </div>
      <div className={styles.whyImageSection}>
        <Image
          width={300}
          height={300}
          src="/kredict-k.png"
          alt="KREDICT icon"
        />
      </div>
    </section>
  );
};

export default Why;
