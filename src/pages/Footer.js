import React from "react";
import { Grid, Column } from "carbon-components-react";
import { Link } from "react-router-dom";
import "carbon-components/css/carbon-components.min.css";

export default function Footer() {
  return (
    <footer className="carbon-footer">
      <Grid fullWidth>
        {/* Brand */}
        <Column sm={4} md={4} lg={4}>
          <h4 className="footer-title">TeamJose PhotoStudio</h4>
          <p className="footer-text">
            Capturing moments, creating memories.  
            Photography, printing & media services.
          </p>
        </Column>

        {/* Navigation */}
        <Column sm={4} md={4} lg={4}>
          <h5 className="footer-title">Navigation</h5>
          <nav>
            <Link to="/home" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/services" className="footer-link">Gallery</Link>
            <Link to="/Samplephotos" className="footer-link">Wallpapers</Link>
            <Link to="/Otherproucts" className="footer-link">Other Products</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </nav>
        </Column>

        {/* Contact */}
        <Column sm={4} md={4} lg={4}>
          <h5 className="footer-title">Contact</h5>
          <p className="footer-text">
            📍 Uganda <br />
            📞 +256 754 151 093 <br />
            ✉️ kagimujoseph00@gmail.com
          </p>
        </Column>
      </Grid>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} TeamJose PhotoStudio. All rights reserved.
      </div>
    </footer>
  );
}
