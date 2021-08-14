import React, { Component } from "react";
import { Link } from "react-router-dom";
import './footer.css';

export default class Footer extends Component {
  

  render() {
    return (
      <div className="footer">
          <div className="container footer__container">
            <div className="footer__inner">
                <div className="footer__address">
                    <Link to="/" className="footer__logo">VISTA.IO</Link>
                    <p>123-456-7890</p>
                    <p>Info@mysite.com</p>
                    <p>500 Terry Francois St</p>
                    <p>San Francisco, CA 94158</p>
                </div>
                <nav className="footer__nav">
                    <Link to="/" className="footer__nav-item">Home</Link>
                    <Link to="/" className="footer__nav-item">Solutions</Link>
                    <Link to="/" className="footer__nav-item">Vision</Link>
                    <Link to="/" className="footer__nav-item">Blog</Link>
                    <Link to="/" className="button button_red">Get Started</Link>
                </nav>
                <form className="footer__form">
                    <legend>Subscribe to Our Newsletter</legend>
                    <label htmlFor="footer-email">Email *</label>
                    <input type="email" id="footer-email" className="footer__email-input" />
                    <input type="submit" value="Submit" className="footer__submit-input" />
                </form>
                <div className="footer__socials">
                    <h3>Follow us on:</h3>
                    <div className="footer__socials-items">
                        <Link to="/instagram" className="footer__socials-item footer__socials-item-in"></Link>
                        <Link to="/facebook" className="footer__socials-item footer__socials-item-fb"></Link>
                        <Link to="/twitter" className="footer__socials-item footer__socials-item-tw"></Link>
                    </div>
                    <p>© 2023 by Vista.io. Proudly created by Ivashkin Kirill and Wix.com</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
}