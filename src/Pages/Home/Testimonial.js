import React from "react";
import quote from '../../assets/icons/quote.svg'
import people01 from '../../assets/images/people1.png'
import people02 from '../../assets/images/people2.png'
import people03 from '../../assets/images/people3.png'
import Review from "./Review";
const Testimonial = () => {
    const rewiews = [
        {
            _id: "01",
            name: "Winson Herry",
            country: "California",
            description:
              "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people01,

        },
        {
            _id: "02",
            name: "Winson Herry",
            country: "California",
            description:
              "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people02,

        },
        {
            _id: "03",
            name: "Winson Herry",
            country: "California",
            description:
              "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people03,

        },
    ]
  return (
    <section className="px-2 md:px-12 lg:px-24 md:py-28 py-4 md:space-y-16">
      <div className="flex justify-between">
        <div>
          <h2 className="text-secondary font-bold text-xl">Testimonial</h2>
          <p className="text-accent text-4xl">What Our Patients Says</p>
        </div>
        <div>
            <img className="w-24 md:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                rewiews.map(review=> <Review key={review._id} review={review}></Review> )
            }
      </div>
    </section>
  );
};

export default Testimonial;
