"use client";
import React from "react";
import BannerPng from "../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "@/utility/animation";
import Image from "next/image";

const BannerTwo = () => {
  return (
    <>
      <section className=''>
        <div
          className='container grid grid-cols-1 md:grid-cols-2 
        space-y-6 md:space-y-0 py-14 md:py-24'
        >
          {/* Brand Info */}
          <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
              <motion.h1
                variants={FadeUp(0.5)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='text-3xl lg:text-6xl font-bold uppercase'
              >
                Consultation
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
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
                variants={FadeUp(0.9)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus rem quae odio iste mollitia laboriosam!
              </motion.p>
              {/* Button section */}
              <motion.div
                variants={FadeUp(1.1)}
                initial='hidden'
                animate='visible'
                className='flex justify-center md:justify-start'
              >
                <button className='primary-btn'>Learn More</button>
              </motion.div>
            </div>
          </div>
          {/* Banner image */}
          <motion.div
            className='flex justify-center items-center'
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={BannerPng}
              alt='banner'
              className='md:max-w-[400px] object-cover h-full drop-shadow'
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BannerTwo;
