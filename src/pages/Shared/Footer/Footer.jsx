import React from "react";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white text-base-content">
      <div>
        <img src={logo} alt="" className="" />
        <p>
          Edwin Diaz is a software and web technologies engineer,
          <br /> a life coach trainer who is also a serial .
        </p>
      </div>
      <div>
        <span className="footer-title">About</span>

        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Acessbility</a>
      </div>
    </footer>
  );
};

export default Footer;
