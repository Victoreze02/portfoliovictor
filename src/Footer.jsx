import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <p>© {currentYear} Ezemokwe Victor | All rights reserved</p>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100078948369601" target="_blank" className="fa fa-facebook"></a>

        <a href="https://wa.me/message/PSMWR3CDNZ67M1" target="_blank" className="fa fa-whatsapp"></a>

        <a href="https://x.com/EzemokweVictor" target="_blank" className="fa fa-twitter"></a>

        <a href="https://www.instagram.com/ezemokwev/" target="_blank" className="fa fa-instagram"></a>

        <a href="https://www.linkedin.com/in/victor-ezemokwe-97a350245" target="_blank" className="fa fa-linkedin"></a>


        <a href="https://www.youtube.com/@E-learningHub176" target="_blank" className="fa fa-youtube"></a>
        
      </div>
    </footer>
  );
}

export default Footer;