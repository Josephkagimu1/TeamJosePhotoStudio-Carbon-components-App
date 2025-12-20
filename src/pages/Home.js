import { Grid, Column, Content, Button, Tile, Modal, TextInput, DatePicker, DatePickerInput } from 'carbon-components-react';
import { useState } from 'react';

import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';

import pic from "../img/camera.jfif";

function Home() {
  const [open, setOpen] = useState(false);

  // code for working submit button
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.date) {
      alert("Please fill in all required fields");
      return;
    } 

    // Emailjs code for working email
    emailjs.send(
    "service_e6weclj",
    "template_fnalaln",
    {
      name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
    },
    "user_nGPqSzoWYlmQPCVPejEAd"
  )
  .then(() => {
    alert("Booking sent successfully!");
    setOpen(false);
  })
  .catch(() => {
    alert("Failed to send booking. Try again.");
  });


    console.log("Booking submitted:", form);

    setForm({ name: "", email: "", phone: "", date: "" });
    setOpen(false);
  };

  return (
    <Content style={{ marginTop: "2rem" }}>
      {/* Hero Section */}
      <Grid fullWidth className="hero-section">
        <Column lg={8} md={4} sm={4}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Capture Your Best Moments
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Professional photography studio for portraits, weddings, events,
            and commercial shoots.
          </p>
          <Button kind="primary" onClick={() => setOpen(true)}>Book a Session</Button>
        </Column>
        <Column lg={8} md={4} sm={4} style={{width: 400}}>
          <Tile >
            <img src={pic} alt="pic" style={{width: 400}} />
            
          </Tile>
        </Column>
      </Grid>

      {/* Booking Modal */}
      <Modal
        open={open}
        modalHeading="Book a Photography Session"
        primaryButtonText="Submit Booking"
        secondaryButtonText="Cancel"
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={handleSubmit}
      >
         <TextInput
          id="name"
          labelText="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginBottom: "1rem" }}
        />

        <TextInput
          id="email"
          labelText="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ marginBottom: "1rem" }}
        />

        <TextInput
          id="phone"
          labelText="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ marginBottom: "1rem" }}
        />


        <DatePicker
          datePickerType="single"
          onChange={(dates) => setForm({ ...form, date: dates[0] })}
        >
          <DatePickerInput
            id="date"
            labelText="Preferred Date"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
      </Modal>


      {/* Services Section */}
      <Grid className="services-section" style={{ marginTop: "3rem" }}>
        <Column lg={16} md={8} sm={4}>
          <h2 style={{ marginBottom: "1.5rem" }}>Our Services</h2>
        </Column>


        <Column lg={5} md={4} sm={4}>
          <Tile>
            <h4>Portrait Photography</h4>
            <p>Studio and outdoor portraits with professional lighting.</p>
          </Tile>
        </Column>


        <Column lg={5} md={4} sm={4}>
          <Tile>
            <h4>Wedding Photography</h4>
            <p>Capture every special moment of your big day.</p>
          </Tile>
        </Column>


        <Column lg={5} md={4} sm={4}>
          <Tile>
            <h4>Commercial Shoots</h4>
            <p>High-quality images for brands and businesses.</p>
          </Tile>
        </Column>
      </Grid>


      {/* Call to Action */}
      <Grid className="cta-section" style={{ marginTop: "3rem" }}>
        <Column lg={16} md={8} sm={4} style={{ textAlign: "center" }}>
          <h2>Ready to create something beautiful?</h2>
          <p style={{ margin: "1rem 0" }}>
            Contact us today and let’s bring your vision to life.
          </p>
          <Button kind="secondary" as={Link} to="/contact" >Contact Us</Button>
        </Column>
      </Grid>

      

    </Content>
  );
}

export default Home;
