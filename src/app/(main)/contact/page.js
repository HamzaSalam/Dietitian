"use client";
import { motion } from "framer-motion";

const Contact = () => {
  const bgstyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('https://cdn.pixabay.com/photo/2019/06/28/00/17/architecture-4303279_1280.jpg')",
  };
  return (
    <div className='flex justify-center items-center min-h-screen bg-secondary/10'>
      <div className='bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full md:w-3/4'>
        <div className='w-full md:w-1/2 bg-cover bg-center' style={bgstyle}>
          <div className='p-10 text-white '>
            <h2 className='text-lg mb-4'>Address</h2>
            <p className='mb-8'>
              Ash Lane 110
              <br />
              London, UK
            </p>
            <h2 className='text-lg mb-4'>Let's Talk</h2>
            <p className='mb-8'>0787878787</p>
            <h2 className='text-lg mb-4'>General Support</h2>
            <p>contact@example.com</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-10'>
          <h2 className='text-2xl font-bold mb-6 text-secondary'>CONTACT US</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700'>Name *</label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email *</label>
              <input
                type='email'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Phone *</label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Subject *</label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Message *</label>
              <textarea className='w-full px-3 py-2 border border-gray-300 rounded h-32'></textarea>
            </div>
            <button type='submit' className='w-full primary-btn'>
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
