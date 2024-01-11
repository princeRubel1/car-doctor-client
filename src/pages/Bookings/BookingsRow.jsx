import React from "react";

const BookingsRow = ({ booking, handleDelete, handleApprove }) => {
  const { _id, img, customerName, service, price, date, email, status } =
    booking;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-circle btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={img} />
                  </div>
                </div>
                <div className="ml-10">
                  <div className="font-bold">{customerName}</div>
                </div>
              </div>
            </td>
            <td>
              <h2>{service}</h2>
            </td>
            <td>
              <h2>{price}</h2>
            </td>
            <td>
              <p>{date}</p>
            </td>
            <th>
              {status === "confirm" ? (
                <span className="text-purple-400 ">Confirmed</span>
              ) : (
                <button onClick={() => handleApprove(_id)} className="btn ">
                  please confirm
                </button>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingsRow;
