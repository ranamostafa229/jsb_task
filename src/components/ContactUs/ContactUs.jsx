import { useState } from "react";
import styles from "./ContactUs.module.css";
import MailIcon from "../../assets/ic_round-mail.png";
import CallIcon from "../../assets/ic_round-call.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://upskilling-egypt.com:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <h1>CONTACT US</h1>
      <div className={styles.sectionForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <button type="submit">SEND</button>
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
