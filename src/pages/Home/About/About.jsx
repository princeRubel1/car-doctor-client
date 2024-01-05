import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-80 mb-40">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 h-4/5 rounded-lg  shadow-2xl" />
          <img
            src={parts}
            className="w-2/3 absolute right-8 top-1/2 border-white border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h3 className="text-3xl mb-4 text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <div className="mb-4 mt-10">
            <p className="py-6 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              rthe majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
