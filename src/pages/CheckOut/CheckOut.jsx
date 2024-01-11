import React, { useContext } from "react";
import img from "../../assets/images/banner/4.jpg";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, title, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,

      price: price,
    };
    console.log(booking);

    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service Book Successfully");
        }
      });
  };
  return (
    <div>
      <div className="hero mb-20 rounded-xl">
        <img src={img} className="w-full h-72" alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bol">Check Out</h1>
          </div>
        </div>
      </div>
      <div className="text-center text-3xl">
        <h2>
          Booking Service : <span className="text-red-500"> {title}</span>{" "}
        </h2>
      </div>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              placeholder="Name"
              className="input input-bbookinged"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              type="date"
              placeholder="Second Name"
              className="input input-bbookinged"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bbookinged"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bbookinged"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="booking Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
