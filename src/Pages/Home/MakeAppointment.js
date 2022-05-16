import React from "react";
import doctor from "../../assets/images/doctor.png";
import background from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section  className="" style={{ backgroundImage: `url(${background})` }}>
      <div className="md:px-16">
        <div className="flex justify-center items-center  md:space-x-16">
         <div className="flex-1 hidden lg:block">
         <img
            src={doctor}
            className="-mt-32"
          />
         </div>
          <div className="flex-1 py-2 space-y-2 md:space-y-4 px-2">
              <h4 className="text-xl font-semibold text-secondary">Appointment</h4>
            <h1 className="text-3xl text-white sm:text-5xl font-bold">
            Make an appointment Today
            </h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary text-white font-bold px-8 bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
