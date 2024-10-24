import { useState } from "react";
import styles from "./ContactUs.module.css";
import MailIcon from "../../assets/ic_round-mail.png";
import CallIcon from "../../assets/ic_round-call.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className={styles.section}>
      <h1>CONTACT US</h1>
      <div className={styles.sectionForm}>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <button>SEND</button>
        </form>
        <div className={styles.contactInfo}>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={MailIcon} alt="mail-icon" />
            upskilling.eg1@gmail.com
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={CallIcon} alt="call-icon" />
            +20 115 493 2137
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
