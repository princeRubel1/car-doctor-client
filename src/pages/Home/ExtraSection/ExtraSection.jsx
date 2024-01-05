import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const ExtraSection = () => {
  return (
    <div className="bg-black text-white h-60 flex justify-evenly items-center mt-40 mb-40 rounded-xl">
      <div className="flex items-center">
        <div>
          <h4 className="text-5xl mr-5">
            <FaBusinessTime />
          </h4>
        </div>
        <div>
          <h3 className="text-xl">We are open monday-friday</h3>
          <h4 className="text-2xl font-semibold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h4 className="text-4xl mr-5">
            <MdOutlineWifiCalling3 />
          </h4>
        </div>
        <div>
          <h3 className="text-xl">Have a question?</h3>
          <h4 className="text-2xl font-semibold">+2546 251 2658</h4>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h4 className="text-4xl mr-5">
            <FaMapLocationDot />
          </h4>
        </div>
        <div>
          <h3 className="text-xl">Need a repair? our address</h3>
          <h4 className="text-2xl font-semibold">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
