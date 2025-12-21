import React, { useState } from "react";
import {
  Content,
  Grid,
  Column,
  Tile,
  Button,
  Modal,
} from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";

// Sample images (replace with your real images)
const images = [
  {
    id: 1,
    src: "/images/8.jfif",
    name: "home.jpg",
  },
  {
    id: 2,
    src: "/images/7.jfif",
    name: "camera-1.jpg",
  },
  {
    id: 3,
    src: "/images/6.jfif",
    name: "camera2.jpg",
  },
  {
    id: 4,
    src: "/images/5.jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/2.jfif",
    name: "Event-2.jpg",
  },
  {
    id: 4,
    src: "/images/3.jfif",
    name: "Event-3.jpg",
  },
  {
    id: 4,
    src: "/images/9.jfif",
    name: "Event-4.jpg",
  },
  {
    id: 4,
    src: "/images/back (1).jfif",
    name: "background-1.jpg",
  },
  {
    id: 4,
    src: "/images/back (1).jpg",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/back (2).jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/back (2).jpg",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/back (3).jpg",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/Fotógrafo.jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/Camera shutter Photos - Download Free High-Quality Pictures _ Freepik.jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/back-b.jfif",
    name: "Event-1.jpg",
  },

];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Content>
      <h1 style={{ marginBottom: "1.5rem" }}>Gallery</h1>
      <h2 style={{ marginBottom: "2rem" }}>
        These are some of suggested images for you to use freely. Tap an image to download.
      </h2>

      <Modal
        open={open}
        modalHeading={selectedImage?.name}
        primaryButtonText="Close"
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => setOpen(false)}
        passiveModal
      >
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.name}
            style={{
              width: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
        )}
      </Modal>

      <Grid fullWidth>
        {images.map((img) => (
          <Column key={img.id} lg={4} md={4} sm={4}>
            <Tile style={{ marginBottom: "1.5rem" }}>
              <img
                src={img.src}
                alt={img.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />

              <div style={{ display: "flex", gap: "0.5rem" }}>
                {/* View Button */}
                <Button
                  kind="secondary"
                  size="sm"
                  onClick={() => {
                    setSelectedImage(img);
                    setOpen(true);
                  }}
                >
                  View
                </Button>

                {/* Download Button */}
                <Button
                  as="a"
                  href={img.src}
                  download={img.name}
                  kind="ghost"
                  size="sm"
                >
                  Download
                </Button>
              </div>

            </Tile>
          </Column>
        ))}
      </Grid>
    </Content>
  );
}
