"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Furit1 from "../../../public/images/contant.jpg";
import Furit2 from "../../../assets/fruits/apple.png";

const Feedback = () => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      review: "Great service and support!",
      image: Furit2, // Correct path for image
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Really happy with the work!",
      image: Furit1,
    },
    {
      id: 3,
      name: "Mark Taylor",
      review: "Exceptional experience!",
      image: "/mark.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className='bg-secondary/10'>
      <div className='max-w-4xl mx-auto p-4'>
        <h1 className='text-center m-12 text-xl uppercase font-semibold underline '>
          Our client
        </h1>
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className='flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 mb-6'
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left for even index, right for odd
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='w-full md:w-64 h-auto mb-4 md:mb-0 md:mr-6'>
              <Image
                src={client.image}
                alt={`${client.name}'s image`}
                width={1024} // Maximum width for large screens
                height={1280} // Aspect ratio maintained
                className='object-cover w-full h-auto' // Ensure image covers the container
              />
            </div>
            <div className='text-center md:text-left'>
              <h3 className='text-xl font-semibold'>{client.name}</h3>
              <p className='text-gray-600 mt-2'>{client.review}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
