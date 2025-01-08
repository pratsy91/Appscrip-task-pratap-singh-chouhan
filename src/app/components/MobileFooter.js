'use client'
import { useState } from 'react';
import styles from './MobileFooter.module.css';

const MobileFooter = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const accordionData = [
    {
      title: 'METTA MUSE',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'QUICK LINKS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'FOLLOW US',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <footer className={styles.mobileFooter}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <h3 className={styles.title}>Be the first to know</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
        <div className={styles.emailSubscribe}>
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.callUs}>
          <span>Call us</span>
          <span>+1 234 567 8900</span>
        </div>
      </div>

      {/* Currency Section */}
      <div className={styles.currencySection}>
        <span>Currency</span>
        <span>USD $</span>
      </div>

      {/* Accordion Section */}
      <div className={styles.accordionSection}>
        {accordionData.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className={`${styles.arrow} ${openAccordion === index ? styles.open : ''}`}>
                ›
              </span>
            </button>
            <div className={`${styles.accordionContent} ${openAccordion === index ? styles.open : ''}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Section */}
      <div className={styles.paymentSection}>
        <p>METTA MUSE ACCEPTS</p>
        <div className={styles.paymentCards}>
          <i className="fab fa-google-pay"></i>
            <i className="fab fa-apple-pay"></i>
            <i className="fab fa-paypal"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-visa"></i>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <p>© 2023 METTA MUSE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default MobileFooter; 