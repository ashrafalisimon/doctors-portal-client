import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from '../../assets/images/treatment.png'
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: "01",
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: "02",
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: "03",
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="px-2 gap-4 md:px-12 lg:px-24 md:py-28 py-4 md:space-y-32">
      <div className="text-center">
        <h2 className="text-secondary font-bold text-xl">OUR SERVICES</h2>
        <p className="text-accent text-4xl">Services We Provide</p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen md:px-16">
        <div className="hero-content flex-col lg:flex-row md:space-x-16">
          <img
            src={treatment}
            className="max-w-xs md:max-w-lg lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary text-white font-bold px-8 bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
