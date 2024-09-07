import React from "react";

const Statistics = () => {

    const stats = [
        {
            figure: "800+",
            text: "Partners across African countries"
        },
        {
            figure: "93%",
            text: "Satisfaction rate from our customers."
        },
        {
            figure: "4.9",
            text: "Average customer ratings out of 5.00!"
        }
    ]
  return (
    <div className="flex justify-center items-center my-5">
     {stats.map((stat, index) => (<div className="flex m-3 w-1/6 items-center" key={index}>
        <p className="font-semibold text-4xl px-3">{stat.figure}</p>
        <p className="text-xs text-black opacity-50">{stat.text}</p>
     </div>))}
    </div>
  );
};

export default Statistics;
