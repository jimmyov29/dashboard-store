import React from "react";

export const Card = (props) => {
  const {img,description, price, inventory} = props
  return (
    <div className=" bg-[#1f1d2b] p-8  rounded-xl flex flex-col items-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      ></img>
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">{price}</span>
      <p className="text-gray-600">{inventory} bowls available</p>
    </div>
  );
};

export default Card;