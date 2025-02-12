import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Optional for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - BankAccountUI - <Link to="/privacy">Privacy</Link></p>
    </footer>
  );
};

export default Footer;
