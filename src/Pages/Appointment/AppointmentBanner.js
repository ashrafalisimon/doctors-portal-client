import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import background from "../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div
      className="hero min-h-full lg:min-h-min py-16 lg:py-28 md:px-12 lg:px-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="w-full px-2 md:px-0  md:max-w-lg lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div className="md:mr-32">
          <DayPicker
          className=" shadow-xl rounded-lg p-4"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
