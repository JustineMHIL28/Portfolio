// Developer: Justine M. Hilario

import React from 'react'; // Importing React library
import '../styles/Footer/Footer-Responsive.scss'; // Importing styles for the Footer component

function Footer() {
  return (
    <footer className="footer"> {/* Main footer element with a class name */}
      <div className="footer-content"> {/* Container for footer content */}
        <p> &copy; 2024 JustineMHil28. All rights reserved.</p> {/* Copyright information */}
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component for use in other parts of the application
