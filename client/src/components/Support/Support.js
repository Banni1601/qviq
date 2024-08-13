import React from "react";
import ".//Support.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//Component for Support

function Support() {
  const navigate = useNavigate();
  if (Cookies.get("p_token") === undefined) {
    return navigate("/login");
  }
  return (
        <div className="support-container">
          <header className="support-header">
            <h1>QVIQ Support</h1>
          </header>
    
          <main className="support-content">
            <section className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h3>How can I contact support?</h3>
                <p>You can contact support by emailing us at support@qviq.com or calling our support line at 9390016171.</p>
              </div>
              <div className="faq-item">
                <h3>What are the support hours?</h3>
                <p>Our support team is available 24/7 to assist you with any issues you may encounter.</p>
              </div>
            </section>
    
            <section className="contact-section">
              <h2>Contact Support</h2>
              <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
    
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
    
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
    
                <button type="submit">Submit</button>
              </form>
            </section>
          </main>
        </div>
      );
    };

export default Support;
