import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-64 w-80" />
      </figure>
      <div className="card-body px-10">
        <h2 className="card-title tex-bold">{title}</h2>

        <div
          style={{ color: "#FF3811" }}
          className="card-actions flex items-center"
        >
          <p>Price : ${price}</p>
          <Link to="/service" className="text-2xl">
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
