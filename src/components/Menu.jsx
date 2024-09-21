"use client";
import React from "react";
import Furit1 from "../assets/fruits/apple.png";
import Furit2 from "../assets/fruits/orange.png";
import Furit3 from "../assets/fruits/avocado.png";
import Furit4 from "../assets/fruits/cherry.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FadeLeft } from "@/utility/animation";

const Menu = () => {
  const MenusData = [
    {
      id: 1,
      title: "Fresh Cherries",
      link: "/",
      price: "Rs0.00",
      img: Furit1,
      delay: 0.3,
    },
    {
      id: 2,
      title: "Fresh Cherries",
      link: "/",
      price: "Rs0.00",
      img: Furit2,
      delay: 0.6,
    },
    {
      id: 3,
      title: "Fresh Cherries",
      link: "/",
      price: "Rs0.00",
      img: Furit3,
      delay: 0.9,
    },
    {
      id: 4,
      title: "Fresh Cherries",
      link: "/",
      price: "Rs0.00",
      img: Furit4,
      delay: 1.2,
    },
  ];
  return (
    <>
      <section>
        <div className='container pt-12 pb-20'>
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='text-2xl font-bold text-left pb-10 uppercase'
          >
            Meet My Fitness Program
          </motion.h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {MenusData.map((menu) => (
              <motion.div
                key={menu.id}
                variants={FadeLeft(menu.delay)}
                initial='hidden'
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                className='bg-white rounded-3xl px-4 py-2 
                    shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around
                    items-center gap-3'
              >
                <Image
                  key={menu.id}
                  src={menu.img}
                  alt='plans image'
                  width={60}
                  className='mb-4 scale-110 transform -translate-y-6'
                />
                <h1 className='text-lg font-semibold'>{menu.title}</h1>
                <p className='text-lg font-semibold text-secondary'>
                  {menu.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
