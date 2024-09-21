"use client";
import Image from "next/image";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeronPng from "../assets/fruit-plate.png";
import leafPng from "../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../utility/animation.jsx";

const Hero = () => {
  return (
    <>
      <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
          {/* Brand Info */}
          <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
              <motion.h1
                variants={FadeRight(0.6)}
                initial='hidden'
                animate='visible'
                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose
                     font-averia'
              >
                Welcome To
                <br />
                Diet <span className='text-secondary'>Planner!</span>
              </motion.h1>
              <motion.p
                variants={FadeRight(0.9)}
                initial='hidden'
                animate='visible'
                className='text-2xl tracking-wide'
              >
                A healthy diet provides the body with essentail nutrition
              </motion.p>
              <motion.p
                variants={FadeRight(1.2)}
                initial='hidden'
                animate='visible'
                className='text-gray-400'
              >
                get guidance for weight loss / weight gain
                Diets,PCOD,Diabetes,Hypertension
              </motion.p>
              {/* Button section */}
              <motion.div
                variants={FadeRight(1.5)}
                initial='hidden'
                animate='visible'
                className='flex justify-center md:justify-start'
              >
                <button className='primary-btn flex items-center gap-2'>
                  <span>
                    <IoBagHandleOutline />
                  </span>
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero images */}
          <motion.div
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='flex justify-center items-center'
          >
            <Image src={HeronPng} alt='plate' className='drop-shadow'></Image>
          </motion.div>
          {/* Leaf images */}
          <motion.div
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='absolute top-14 md:top-0 right-1/2
                blur-sm opacity-80 rotate-[40deg] '
          >
            <Image
              src={leafPng}
              alt='leaf'
              className='w-full md:max-w-[300px]'
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
