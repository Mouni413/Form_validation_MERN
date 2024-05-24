import React from "react";
import "./index.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-card-1">
        <h1 className="card-title">ABOUT US</h1>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur.Neque diam nulla fusce
          hendrerit nec lorem dolor.
        </p>
        <div className="icon-container">
          <FaFacebook style={{ marginLeft: "10px" }} />
          <FaInstagram style={{ marginLeft: "10px" }} />
          <FaTwitter style={{ marginLeft: "10px" }} />
          <FaWhatsapp style={{ marginLeft: "10px" }} />
          <FaYoutube style={{ marginLeft: "10px" }} />
        </div>
      </div>
      <div className="footer-card-1">
        <h1 className="card-title">Programs</h1>
        <p className="card-description">+ Buy A Property</p>
        <p className="card-description">+ Calculate your Property</p>
        <p className="card-description">+ Rent a Property</p>
        <p className="card-description">+ Our Terms and Condition</p>
      </div>
      <div className="footer-card-1">
        <h1 className="card-title">SUPPORT</h1>
        <p className="card-description">About us</p>
        <p className="card-description">Terms & Conditions</p>
        <p className="card-description">Forums</p>
        <p className="card-description">Become a Teacher</p>
      </div>
      <div className="footer-card-1">
        <h1 className="card-title">CONTACT US</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <IoLocationOutline
            style={{ marginTop: "20px", marginRight: "10px", fontSize: "20px" }}
          />
          <pre className="card-description">
            321 queenberry street,
            <br />
            Embilipitiya 70200
            <br />
            Sri Lanka.
          </pre>
        </div>
        <div
          className="card-description"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <LiaPhoneVolumeSolid
            style={{
              marginRight: "10px",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
          <p>+94 71 123 4567</p>
        </div>
        <div
          className="card-description"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <MdOutlineEmail
            style={{
              marginRight: "10px",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
          <p>Support@brizmi.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
