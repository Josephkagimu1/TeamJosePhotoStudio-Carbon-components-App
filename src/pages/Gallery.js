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
    src: "/images/pic (1).jfif",
    name: "home.jpg",
  },
  {
    id: 2,
    src: "/images/pic (2).jfif",
    name: "camera-1.jpg",
  },
  {
    id: 3,
    src: "/images/pic (3).jfif",
    name: "camera2.jpg",
  },
  {
    id: 4,
    src: "/images/pic (4).jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/pic (5).jfif",
    name: "Event-2.jpg",
  },
  {
    id: 4,
    src: "/images/pic (6).jfif",
    name: "Event-3.jpg",
  },
  {
    id: 4,
    src: "/images/pic (7).jfif",
    name: "Event-4.jpg",
  },
  {
    id: 4,
    src: "/images/pic (8).jfif",
    name: "background-1.jpg",
  },
  {
    id: 4,
    src: "/images/pic (9).jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/pic (10).jfif",
    name: "Event-1.jpg",
  },
  {
    id: 4,
    src: "/images/pic (11).jfif",
    name: "Event-1.jpg",
  },
 

];

function Gallery() {
  const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
  return (
    <Content>
      <h1 style={{ marginBottom: "1.5rem" }}>Recent tasks</h1>
      <h2 style={{ marginBottom: "2rem" }}>
        These are some of images took recently, Tap an image to view.
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
                {/* <Button
                  as="a"
                  href={img.src}
                  download={img.name}
                  kind="ghost"
                  size="sm"
                >
                  Download
                </Button> */}
              </div>

            </Tile>
          </Column>
        ))}
      </Grid>
    </Content>
  )
}

export default Gallery;
