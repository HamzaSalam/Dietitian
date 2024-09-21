import React from "react";

const Plans = () => {
  const PricingCard = ({ title, price, features, bgColor }) => (
    <div
      className={`rounded-lg shadow-lg p-6 ${bgColor} text-white w-full sm:w-64 mx-4 mb-6 sm:mb-0`}
    >
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-4xl font-bold mb-2'>{price}</p>
        <p className='mb-4'>per month</p>
        <hr className='border-t-2 border-white mb-4' />
      </div>
      <ul className='mb-6'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center mb-2'>
            <i
              className={`fas ${
                feature.included ? "fa-check" : "fa-times"
              } mr-2`}
            ></i>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className='bg-white text-black font-bold py-2 px-4 rounded-full w-full'>
        SUBSCRIBE
      </button>
    </div>
  );

  const plans = [
    {
      title: "STARTER",
      price: "FREE",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Ut wisi enim ad minim veniam", included: true },
        { text: "Duis autem vel eum", included: true },
        { text: "Sed diam nonummy nibh", included: false },
        { text: "Vel illum dolore eu feugiat", included: false },
      ],
      bgColor: "bg-pink-500",
    },
    {
      title: "BUSINESS",
      price: "$9.99",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Ut wisi enim ad minim veniam", included: true },
        { text: "Duis autem vel eum", included: true },
        { text: "Sed diam nonummy nibh", included: true },
        { text: "Vel illum dolore eu feugiat", included: false },
      ],
      bgColor: "bg-orange-400",
    },
    {
      title: "PROFESSIONAL",
      price: "$19.99",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Ut wisi enim ad minim veniam", included: true },
        { text: "Duis autem vel eum", included: true },
        { text: "Sed diam nonummy nibh", included: true },
        { text: "Vel illum dolore eu feugiat", included: false },
      ],
      bgColor: "bg-blue-500",
    },
    {
      title: "PREMIUM",
      price: "$49.99",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Ut wisi enim ad minim veniam", included: true },
        { text: "Duis autem vel eum", included: true },
        { text: "Sed diam nonummy nibh", included: true },
        { text: "Vel illum dolore eu feugiat", included: true },
      ],
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center min-h-screen bg-secondary/10'>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default Plans;
