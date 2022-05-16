import React from "react";
import background from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <footer className=" py-8 space-y-8 text-base-content px-2 md:px-12 lg:px-24">
        <div className="footer">
          <div>
            <h2 className="text-2xl font-bold">Doctors Portal</h2>
            <p className="font-medium">+88 01711133311</p>
            <p className="font-medium">New York - 101010 Hudson</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div className="text-center">
          <p>Copyright © 2022 - All right reserved by Doctor Portal Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
