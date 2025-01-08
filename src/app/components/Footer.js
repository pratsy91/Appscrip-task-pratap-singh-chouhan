const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <span className="currency-icon">🇺🇸</span> USD
          </p>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-middle">
        <div className="footer-links">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="social-media">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <i className="fab fa-google-pay"></i>
            <i className="fab fa-apple-pay"></i>
            <i className="fab fa-paypal"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-visa"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 