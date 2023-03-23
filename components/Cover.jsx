import Link from "next/link";
import styles from "../styles/Cover.module.css";
import Image from "next/image";

const Cover = () => {
  // focusPresale
  function focusPresale() {}

  // buyButtonPressed
  function buyButtonPressed() {}

  // validateExchangeAmount
  function validateExchangeAmount(e) {}

  // copyAddress
  function copyAddress() {
    var copyText = document.getElementById("contract-address");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Address Copied to Clipboard");
  }

  return (
    <>
      <section className={styles.cover}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/cover-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.particlesWrapper}>
          <div id="particles-js"></div>
        </div>
        <div className={styles.tokenPresaleContainer}>
          <div
            className={styles.tokenPresaleContainerInner}
            id="presale-container"
          >
            <div className={styles.cardHeader}>
              <div className={styles.logoBlock}>
                <Image
                width={100}
                height={100}
                  src={"/about.gif"}
                  alt="token-image"
                  className={styles.tokenImagePrime}
                />
              </div>

              <div className={styles.primeBlock}>
                <h2 className={styles.tokenNamePrime}>
                  {/* {tokenData.tokenName} */}
                  Hello
                </h2>
                <p className={styles.exchangeMode}>
                  {/* {tokenData.tokenSymbol} */}$ / BNB
                </p>
                <a
                  target="_blank"
                  //  href={bscscanTokenUrl_}
                  href="/"
                  rel="noreferrer"
                >
                  View on Bscscan
                </a>
              </div>
              <div className={styles.badgeHeader}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  //   href={tokenData.smartContractAudit}
                  href="/"
                  className={styles.auditedBadge}
                  title="Smart Contract Audited"
                  id="audited"
                >
                  <i className="las la-check-circle"></i>Audited
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  //   href={tokenData.kycVerified}
                  href="/"
                  className={styles.verifiedBadge}
                  title="KYC Verified"
                  id="verified"
                >
                  <i className="las la-shield-alt"></i>Verified
                </a>
              </div>
            </div>
            <div className={styles.countdownContainer}>
              <div className={styles.countdownWrapper}>
                <p>
                  <span id="days"></span>
                </p>
                :
                <p>
                  <span id="hours"></span>
                </p>
                :
                <p>
                  <span id="minutes"></span>
                </p>
                :
                <p>
                  <span id="seconds"></span>
                </p>
              </div>
            </div>
            <div className={styles.actionBlockPrime}>
              <input
                type="number"
                className={styles.quantityInput}
                placeholder="Exchange Quantity"
                id="quantity"
                onChange={validateExchangeAmount}
              ></input>
              <small className={styles.balanceText}>
                Balance: <small id="balance-text"></small> BNB
              </small>
              <small id="notice-text" className={styles.noticeText}></small>
              <small id="error-text" className={styles.errorText}></small>
              <button
                className={styles.buyButton}
                onClick={buyButtonPressed}
                id="buy-button"
              >
                Buy
              </button>
            </div>

            <div className={styles.rateBlockPrime}>
              <p className={styles.currencyToToken}>
                1 BNB = <span id="rate">1000</span> $
                {/* {tokenData.tokenSymbol} */}
              </p>
            </div>
            <div className={styles.barBlockPrime}>
              <div className={styles.upperStatLine}>
                <p className={styles.upperStatCode} id="presale-status"></p>
                <p
                  className={styles.upperStatPercentage}
                  id="target-percentage"
                ></p>
              </div>
              <div className={styles.barActualPrime}>
                <div className="barRatePrime" id="bar-percentage"></div>
              </div>
              {/* width: ${percentage_}%; you have to add into style jsx .barRatePrime*/}
              <style jsx>
                {`
                  .barRatePrime {
                    height: 100%;
                    width: 0%;

                    border-radius: 10px;
                    background: linear-gradient(
                      to bottom,
                      rgb(255, 180, 60),
                      rgb(146, 90, 0)
                    );
                  }
                `}
              </style>
              <div className={styles.lowerStatLine}>
                <p className={styles.lowerStatCurrency} id="amount-raised"></p>
                <p className={styles.lowerStatToken}>
                  Hard Cap <span id="hard-cap">4000</span> BNB
                </p>
              </div>
            </div>
            <div className={styles.leastDetailBlockPrime}>
              <a
                className={styles.leastDetailTagPrime}
                // href={bscscanContractUrl_}
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                View Presale Smart Contract Address
              </a>
            </div>
          </div>
          <div className={styles.brandText}>
            <Link id="host" target="_blank" href="https://www.kredict.com">
              Powered by KREDICT
            </Link>
          </div>
        </div>

        <div className={styles.textSection}>
          <h2 className={styles.header}>KREDICT ICO</h2>
          <h4 className={styles.tag}>
            Kredict is a decentralized launchpad that allows users to launch
            their token and create their initial token sale with staking
            benefits to their holders and they don&apos;t require any Coding
            Knowledge For this.
          </h4>

          <div className={styles.actionWrapper}>
            <Link href="#whitepaper" className={styles.actionBtn}>
              Whitepaper
            </Link>
            <a className={styles.actionBtn} onClick={focusPresale}>
              Buy Now
            </a>
          </div>
        </div>
      </section>
      <div className={styles.contractNoteSection}>
        <p className={styles.contractNote}>
          You can buy KDT also by sending BNB directly to Presale Contract
        </p>
        <p id="contract-address" className={styles.contractAddress}>
          {/* {tokenData.presaleContract} */}
          Demo Text
        </p>
        <br />
        <a className={styles.actionBtnCopy} onClick={copyAddress}>
          Copy Address
        </a>
      </div>
    </>
  );
};

export default Cover;
