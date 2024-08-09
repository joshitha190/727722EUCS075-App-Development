import React from 'react';
import '../styles.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us through any of the methods below.</p>
      </div>
      
      <div className="contact-sections">
        <div className="contact-section contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <input type="text" name="subject" required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        <div className="contact-section office-locations">
          <h3>Our Office Locations</h3>
          <div className="location">
            <h4>Headquarters</h4>
            <p>123 Main Street, Anytown, USA</p>
            <iframe src="https://maps.google.com/maps?q=123%20Main%20Street,%20Anytown,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"></iframe>
          </div>
          
        </div>

        <div className="contact-section faq">
          <h3>Frequently Asked Questions</h3>
          <ul>
            <li><strong>How can I contact support?</strong> You can reach our support team at support@jobportal.com or call us at +123 456 7890.</li>
            <li><strong>Where are your offices located?</strong> Our offices are located in Anytown, Othertown, and the UK. Please see the detailed addresses above.</li>
            <li><strong>How do I apply for a job?</strong> You can apply for jobs directly through our portal by creating an account and submitting your resume.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

