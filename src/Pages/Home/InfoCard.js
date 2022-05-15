import React from "react";

const InfoCard = ({img, cardDep, bgClass, cardTittle }) => {
  return (
    <div className={`card card-side shadow-xl ${bgClass}`}>
      <figure className="pl-8">
        <img
          src={img}
          alt="icon"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-medium">{cardTittle}</h2>
        <p>{cardDep}</p>
      </div>
    </div>
  );
};

export default InfoCard;
