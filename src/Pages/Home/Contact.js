import React from "react";
import background from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="text-center lg:px-24 md:py-28 py-4 space-y-4 md:space-y-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="">
        <h2 className="text-secondary font-bold text-xl">Contact Us</h2>
        <p className=" text-white text-4xl">Stay connected with us</p>
      </div>
      <form className="space-y-3">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xs"
          />
        </div>
        <div>
          <textarea className="textarea w-full max-w-xs" placeholder="Your message"></textarea>
        </div>
        <button className="btn btn-primary text-white font-bold px-8 bg-gradient-to-r from-secondary to-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
