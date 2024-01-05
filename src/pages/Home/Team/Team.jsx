import React from "react";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="mt-40 mb-40">
      <div className="text-center space-y-4">
        <h3 className="text-2xl text-red-400">Team</h3>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p style={{ color: "#737373" }}>
          the majority have suffered alteration in some form, by injected
          humour, or
          <br />
          randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="flex justify-evenly items-center mt-16">
          <div className="w-96 shadow-xl pb-10 rounded-xl">
            <div>
              <div className="px-10 pt-10 pb-4">
                <img src={team1} alt="" className="h-64 w-96 rounded-xl " />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-center">
                  Car Engine Plug
                </h2>
                <h4 className="text-xl">Engine Expert</h4>
                <div className="flex px-10 ml-24 space-x-3">
                  <p className="text-3xl">
                    <FaFacebook></FaFacebook>
                  </p>
                  <p className="text-3xl">
                    <FaInstagram></FaInstagram>
                  </p>
                  <p className="text-3xl">
                    <FaTwitter></FaTwitter>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-xl pb-10 rounded-xl">
            <div>
              <div className="px-10 pt-10 pb-4">
                <img src={team1} alt="" className="h-64 w-96 rounded-xl " />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-center">
                  Car Engine Plug
                </h2>
                <h4 className="text-xl">Engine Expert</h4>
                <div className="flex px-10 ml-24 space-x-3">
                  <p className="text-3xl">
                    <FaFacebook></FaFacebook>
                  </p>
                  <p className="text-3xl">
                    <FaInstagram></FaInstagram>
                  </p>
                  <p className="text-3xl">
                    <FaTwitter></FaTwitter>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-xl pb-10 rounded-xl">
            <div>
              <div className="px-10 pt-10 pb-4">
                <img src={team1} alt="" className="h-64 w-96 rounded-xl " />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-center">
                  Car Engine Plug
                </h2>
                <h4 className="text-xl">Engine Expert</h4>
                <div className="flex px-10 ml-24 space-x-3">
                  <p className="text-3xl">
                    <FaFacebook></FaFacebook>
                  </p>
                  <p className="text-3xl">
                    <FaInstagram></FaInstagram>
                  </p>
                  <p className="text-3xl">
                    <FaTwitter></FaTwitter>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
