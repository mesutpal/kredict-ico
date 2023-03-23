import Link from "next/link";
import React from "react";

const Contact = ({ styles }) => {

    const submitForm = () => {}

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactSocialSide}>
        <h3 className={styles.contactHeader}>Contact Us</h3>
        <div className={styles.contactSocialBlock}>
          <Link href="mailto:support@kredict.com" target="_blank">
            <i className="las la-envelope"></i>support@kredict.com
          </Link>
          <Link href="https://t.me/kredict" target="_blank">
            <i className="lab la-telegram"></i>Telegram
          </Link>
          <Link href="https://twitter.com/kredictofficial" target="_blank">
            <i className="lab la-twitter-square"></i>Twitter
          </Link>
          <Link
            href="https://www.instagram.com/kredict_official/"
            target="_blank"
          >
            <i className="lab la-instagram"></i>Instagram
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCCP3Ce_X8U-_lkvC9xREGQA"
            target="_blank"
          >
            <i className="lab la-youtube"></i>YouTube
          </Link>
        </div>
      </div>
      <div className={styles.contactFormSide}>
        <div className={styles.contactForm}>
          <input
            type="text"
            id="name"
            required
            autoComplete="off"
            placeholder="Full Name"
          />
          <input
            type="email"
            id="email"
            required
            autoComplete="off"
            placeholder="Email"
          />
          <input
            type="text"
            id="telegram"
            required
            autoComplete="off"
            placeholder="Telegram"
          />
          <input
            type="text"
            id="message"
            required
            autoComplete="off"
            placeholder="Message"
          />
          <button className={styles.submitBtn} onClick={submitForm}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
