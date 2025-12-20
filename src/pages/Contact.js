import React from 'react';
import {
  Grid,
  Column,
  Tile,
  TextInput,
  TextArea,
  Button
} from 'carbon-components-react';
import { Email, Chat } from '@carbon/icons-react';

import cameraman from "../img/10.jfif";

function Contact() {
  return (
    <Grid fullWidth className="bx--grid--full-width">
      {/* <Row > */}
      <Column sm={4} md={8} lg={8}>
        <h2>We would love to hear from you </h2>
        <p style={{ marginBottom: '2rem' }}>
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

        <Tile style={{ marginTop: '1rem' }}>
          <Email size={20} style={{ marginBottom: 8 }} />
          <h4>Email</h4>
          <a href="mailto:kagimujoseph00@gmail.com">
            kagimujoseph00@gmail.com
          </a>
        </Tile>

        <Column lg={8} md={4} sm={4} style={{ width: 400 }}>
          <Tile >
            <img src={cameraman} alt="pic" style={{ width: 400 }} />

          </Tile>
        </Column>


      </Column>

      <Column sm={4} md={8} lg={16} style={{ padding: 40 }} >
        <h1>Contact Us</h1>
        <p>What can we help you in ?</p>
      </Column>

      {/* Contact Form */}
      <Column sm={4} md={8} lg={8}>
        <Tile>
          <form>
            <TextInput
              id="name"
              labelText="Full Name"
              placeholder="Enter your name"
              style={{ marginBottom: '1rem' }}
            />

            <TextInput
              id="email"
              labelText="Email Address"
              placeholder="Enter your email"
              style={{ marginBottom: '1rem' }}
            />

            <TextArea
              id="message"
              labelText="Message"
              placeholder="Type your message here"
              rows={4}
              style={{ marginBottom: '1rem' }}
            />

            <Button kind="primary" type="submit">
              Send Message
            </Button>
          </form>
        </Tile>
      </Column>
      {/* </Row> */}
    </Grid>
  );
}

export default Contact;
