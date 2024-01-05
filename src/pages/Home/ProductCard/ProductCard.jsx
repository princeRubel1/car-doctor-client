import React from "react";

const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-64 w-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-400">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
