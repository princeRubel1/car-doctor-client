import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
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
          <p className="flex  items-center">
            Price :<LuIndianRupee className="" /> {price}
          </p>
          <Link to={`/checkout/${_id}`} className="text-2xl">
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
