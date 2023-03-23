import Link from "next/link";
import React from "react";

const WhitePaper = ({ styles }) => {
  return (
    <section className={styles.whitepaperSection} id="whitepaper">
      <div className={styles.whitepaperBlock}>
        <div className={styles.whitepaperTextSection}>
          <h2 className={styles.whitepaperHead}>Whitepaper</h2>
          <p className={styles.whitepaperText}>
            Total of 1 quadrillion (1,000,000,000,000,000) KREDICTs will be
            minted through Smart contract and deployed through Binance Smart
            Chain . We will be selling 20% of the tokens in presale which will
            be done in 4 phases which will run max for 92 days . 1st presale for
            45 days and rest 3 pre-sales for 15 days each. If the Pre-Sale
            phases goals are reached before time, we will start next phase of
            pre sale within 24 hours. We have kept the investment amount to
            minimum 0.1 BNB for our presale which will make easy for most of the
            retail investors to invest. We will not accept any FIAT currencies
            during the Pre-Sale as we firmly believe in digital currencies and
            that&apos;s why working on building a ecosystem based on blockchain
            and crypto assets and crypto currencies.
          </p>
        </div>
        <div className={styles.whitepaperActionSection}>
          <Link href="/" target="_blank">
            Read Online
          </Link>
          <Link href="/" target="_blank" download>
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
