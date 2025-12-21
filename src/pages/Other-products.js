import React from "react";
import {
  Content,
  Grid,
  Column,
  Tile,
} from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";

const services = [
  {
    title: "Phone Accessories",
    items: [
      "Phone covers (all models)",
      "Screen guards",
      "Phone chargers",
      "iPhone accessories",
      "Smart & Fantom USBs",
    ],
  },

  {
    title: "Custom Printing",
    items: [
      "T-shirts with personal photos & text",
      "All colors available",
      "Business cards",
      "Plastic IDs",
      "Document sealing",
    ],
  },

  {
    title: "Photography Products",
    items: [
      "Photo albums",
      "Photo frames",
      "Photo boards",
      "Large & small posters",
    ],
  },
  
  {
    title: "Media Services",
    items: [
      "Video editing",
      "Video coverage (events)",
      "Promotional videos",
      "Social media videos",
    ],
  },
  {
    title: "More Services",
    items: [
      "Posters (small & large sizes)",
      "Custom designs",
      "Bulk printing",
      "And many more...",
    ],
  },
];

export default function OtherProducts() {
  return (
    <Content>
      <h1 style={{ marginBottom: "0.5rem" }}>Other Products & Services</h1>
      <p style={{ marginBottom: "2rem", color: "#525252" }}>
        We offer a wide range of accessories, printing, and media services to
        meet all your personal and business needs.
      </p>

      <Grid fullWidth>
        {services.map((service, index) => (
          <Column key={index} lg={4} md={4} sm={4} style={{margin: 10}}>
            <Tile
              style={{
                marginBottom: "1.5rem",
                height: "100%",
              }}
            >
              <h3 style={{ marginBottom: "0.75rem" }}>
                {service.title}
              </h3>

              <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Tile>
          </Column>
        ))}
      </Grid>
    </Content>
  );
}
