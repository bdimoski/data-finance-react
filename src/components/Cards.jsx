import React from "react";
import { plansData } from "../data";
const Cards = () => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-[1240] mx-auto p-10 grid md:grid-cols-3 gap-8">
        {plansData.map((plan) => (
          <div
            key={plan.id}
            className={`w-full ${
              plan.id === 2 ? "shadow-2xl" : "shadow-md"
            } flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="w-20 mx-auto h-16 mt-[-3rem] bg-white"
              src={plan.image}
              alt={plan.name}
            />
            <h2 className="text-xl font-bold text-center py-8">{plan.name}</h2>
            <p className="text-center text-2xl font-bold">${plan.price}</p>
            <div className="text-center font-small">
              {plan.features.map((feature) => (
                <p key={feature} className="py-1 border-b mx-8 mt-8">
                  {feature}
                </p>
              ))}
            </div>
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-3 mx-auto px-5 py-2">
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
