import React from 'react';
import {
  Grid,
  Column,
  Tile
} from 'carbon-components-react';
import {
  Location,
  Camera,
  UserMultiple
} from '@carbon/icons-react';

function About() {
  return (
    <Grid fullWidth className="bx--grid--full-width">
      {/* Page Header */}

      <Column sm={4} md={8} lg={16}>
        <h1>About Our Studio</h1>
        <p style={{ marginBottom: '2rem' }}>
          We are a professional photo studio committed to capturing timeless moments
          with creativity and precision.
        </p>
      </Column>


      {/* Main Content */}

      {/* About Text */}
      <Column sm={4} md={8} lg={16}>
        <Tile style={{ marginBottom: '1rem' }}>
          <Camera size={20} style={{ marginBottom: 8 }} />
          <h4>What We Do</h4>
          <p>
            We specialize in studio photography, outdoor shoots, passport photos,
            events, and professional editing. Our goal is to deliver high-quality
            images that tell your story.
          </p>
        </Tile>

        <Tile>
          <UserMultiple size={20} style={{ marginBottom: 8 }} />
          <h4>Why Choose Us</h4>
          <p>
            We combine modern equipment, skilled editing, and a friendly environment
            to ensure every client leaves satisfied.
          </p>
        </Tile>
      </Column>

      {/* Location Info */}
      <Column sm={4} md={4} lg={16} style={{ marginTop: 20 }}>
        <Tile>
          <Location size={20} style={{ margin: 8 }} />
          <h4>Our Location</h4>
          <p>
            Kyebando, opposite Pimba Secondary School<br />
            Near Kalerwe
          </p>
        </Tile>
      </Column>

      {/* Google Map */}
      <Column sm={4} md={4} lg={16} style={{ marginTop: 20 }}>
        <Tile>
          <h4>Find Us on the Map</h4>
          <div style={{ marginTop: '1rem' }} >
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps?q=Kyebando%20opposite%20Pimba%20Secondary%20School%20near%20Kalerwe&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Tile>
      </Column>

    </Grid>
  );
}

export default About;
