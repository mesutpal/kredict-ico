import Image from "next/image";
import React from "react";

const Team = ({ styles }) => {
  return (
    <section className={styles.teamSection} id="team">
      <h3 className={styles.teamHeader}>Team</h3>
      <div className={styles.teamBlock}>
        <div className={styles.teamCard}>
          <Image width={100} height={100} src="/leo.jpeg" alt="team-member" />
          <h4 className={styles.teamName}>Abhi M </h4>
          <p className={styles.teamDes}>CEO </p>
          <p>
            Entrepreneur with zeal and passion for blockchain and solutions it
            can bring for the brave new world
          </p>
        </div>
        <div className={styles.teamCard}>
          <Image
            width={100}
            height={100}
            src="/rabbit.jpeg"
            alt="team-member"
          />
          <h4 className={styles.teamName}>N Tri </h4>
          <p className={styles.teamDes}>Blockchain Developer </p>
          <p>
            With immense knowledge in blockchain, Web 3 and Web 2 technologies .
          </p>
        </div>
        <div className={styles.teamCard}>
          <Image width={100} height={100} src="/wolf.jpeg" alt="team-member" />
          <h4 className={styles.teamName}>Aak T </h4>
          <p className={styles.teamDes}>Finance and Market</p>
          <p>
            Creative mind with enthusiastic new view and aproach towards the new
            blockchain maarket needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
