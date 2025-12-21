import React, { useState } from "react";
import {
  Grid,
  Column,
  Tile,
  TextInput,
  TextArea,
  Button,
  InlineLoading,
} from "carbon-components-react";
import { Email, Chat } from "@carbon/icons-react";
import emailjs from "@emailjs/browser";

import cameraman from "../img/10.jfif";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      )
      
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Grid fullWidth className="bx--grid--full-width">
      {/* Header */}
      <Column sm={4} md={8} lg={8}>
        <h2>We would love to hear from you</h2>
        <p style={{ marginBottom: "2rem" }}>
          Reach out using the details below or send us a message.
        </p>
      </Column>

      {/* Contact Info */}
      <Column sm={4} md={8} lg={16}>
        <Tile>
          <Chat size={20} style={{ marginBottom: 8 }} />
          <h4>WhatsApp</h4>
          <a
            href="https://wa.me/256754151093"
            target="_blank"
            rel="noopener noreferrer"
          >
            +256 754 151 093
          </a>
        </Tile>

        <Tile style={{ marginTop: "1rem" }}>
          <Email size={20} style={{ marginBottom: 8 }} />
          <h4>Email</h4>
          <a href="mailto:kagimujoseph00@gmail.com">
            kagimujoseph00@gmail.com
          </a>
        </Tile>

        <Column lg={8} md={4} sm={4} style={{ width: 400 }}>
          <Tile>
            <img src={cameraman} alt="pic" style={{ width: "100%" }} />
          </Tile>
        </Column>
      </Column>

      {/* Form Title */}
      <Column sm={4} md={8} lg={16} style={{ padding: 40 }}>
        <h1>Contact Us</h1>
        <p>What can we help you with?</p>
      </Column>

      {/* Contact Form */}
      <Column sm={4} md={8} lg={8}>
        <Tile>
          <form onSubmit={handleSubmit}>
            <TextInput
              id="name"
              labelText="Full Name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ marginBottom: "1rem" }}
            />

            <TextInput
              id="email"
              labelText="Email Address"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              style={{ marginBottom: "1rem" }}
            />

            <TextArea
              id="message"
              labelText="Message"
              placeholder="Type your message here"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              style={{ marginBottom: "1rem" }}
            />

            {loading ? (
              <InlineLoading description="Sending message..." />
            ) : (
              <Button kind="primary" type="submit">
                Send Message
              </Button>
            )}

            {success && (
              <p style={{ color: "green", marginTop: "1rem" }}>
                Message sent successfully ✅
              </p>
            )}
          </form>
        </Tile>
      </Column>
    </Grid>
  );
}

export default Contact;
