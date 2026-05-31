import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8o33fv",
        "template_s9bzqcq",
        form.current,
        "lCAAmsA6Hl6KuXaFo",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong. Try again.");
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contect;
