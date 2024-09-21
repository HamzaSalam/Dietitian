"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='bg-primary/10  py-12 mt-12'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='container flex justify-between items-center'
      >
        {/* Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Dn</p>
          <p className='text-secondary'>Sabrina</p>
          <FaLeaf className='text-green-500' />
        </div>
        {/* section */}
        <div className='flex-row justify-center items-center'>
          <p>Copyright 2024 Dn Sabrina. All rights reserved.</p>
          <p className='text-center'>
            <Link href='#'>Privacy Policy</Link> |{" "}
            <Link href='#'>Terms and Services</Link>
          </p>
        </div>
        {/* Socail icon section */}
        <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
