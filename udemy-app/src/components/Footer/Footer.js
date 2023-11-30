import React from 'react'
import "./Footer.css";

function Footer() {
  return (
<div className="in-container-3">
  <div className="footer">
    <div className="footer-content">
      <div className="footer-list">
        <div>
          <li>Udemy Business</li>
          <li>Teach on Udemy</li>
          <li>Get the app</li>
          <li>About us</li>
          <li>Contact us</li>
        </div>
        <div>
          <li>Careers</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
          <li>Investors</li>
        </div>
        <div>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Cookie settings</li>
          <li>Sitemap</li>
          <li>Accessibility statement</li>
        </div>
      </div>
      <div className="footer-lang">
        <button className="footer-lang-btn"> <i className="fa-solid fa-globe" />  English </button>
      </div>
    </div>
    <div className="footer-brand">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" width="100px" alt />
      <p>© 2022 Udemy, Inc.</p>
    </div>
  </div>
</div>

  )
}

export default Footer