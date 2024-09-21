"use client";
import React from "react";
import Banners from "../assets/model.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "@/utility/animation";
import Image from "next/image";

const BannerThree = () => {
  const bgStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no - repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <>
      <section className='container mb-12'>
        <div
          style={bgStyle}
          className='grid grid-cols-1 md:grid-cols-2 
        space-y-6 md:space-y-0 py-14 px-14 md:px-0 md:py-14 rounded-3xl bg-white'
        >
          {/* Banner image */}
          <div></div>
          {/* <motion.div
            className='flex justify-center items-center'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={Banners}
              alt='banner'
              width={600}
              className='md:max-w-[400px] object-cover h-full drop-shadow rounded-tr-3xl rounded-bl-3xl'
            />
          </motion.div> */}
          {/* Brand Info */}
          <div className='flex flex-col justify-center md:ml-32'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
              <motion.h1
                variants={FadeLeft(0.5)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl font-bold uppercase'
              >
                Why Choose Us
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.7)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                corrupti natus distinctio animi itaque eius tempore repellat!
                Non consequatur, laboriosam, quod soluta officia, excepturi
                tempore assumenda enim ab distinctio numquam?
              </motion.p>
              <motion.p
                variants={FadeLeft(0.9)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus rem quae odio iste mollitia laboriosam!
              </motion.p>
              {/* Button section */}
              <motion.div
                variants={FadeLeft(1.1)}
                initial='hidden'
                animate='visible'
                className='flex justify-center md:justify-start'
              >
                <button className='primary-btn'>Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerThree;
