export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-layout">

        {/* CONTACT DETAILS */}
        <div className="contact-info">

          {/* EMAIL */}
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:shivanandinfo7@gmail.com">
                shivanandinfo7@gmail.com
              </a>
            </p>
          </div>

          {/* MOBILE */}
          <div className="contact-card">
            <h3>Mobile</h3>
            <p>
              <a href="tel:+918084126115">
                +91 80841 26115
              </a>
            </p>
          </div>

          {/* WHATSAPP */}
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=918084126115&text=Hi%20Shivanand%20Kumar%20Singh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

        </div>

        {/* LIVE MAP */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5747612704304!2d73.28001637474917!3d22.294092543121465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fdab15f0356d3%3A0x631c8c27a3aaf918!2sPavlepur%2C%20Gujarat%20390019!5e0!3m2!1sen!2sin!4v1765738966421!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Live Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
