import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <h3>Scan the QR code to contact me.</h3>
        <img src="./assets/QRcode_resume.png" alt="QR code" />
        <h3>Find my <a href="https://drive.google.com/file/d/10xu0Fi6BC47EzvGTHN0EHX5CAUxCqD1T/view?usp=sharing">Resume </a>here..</h3>
      </div>
    </div>
  );
}