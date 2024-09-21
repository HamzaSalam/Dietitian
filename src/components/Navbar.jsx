"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState();

  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Feedback",
      link: "/feedback",
    },
    {
      id: 3,
      title: "About",
      link: "/about",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      title: "Plans",
      link: "/plans",
    },
  ];

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='container flex items-center justify-between py-4 md:pt-4'
        >
          {/* Logo section */}
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-primary'>Dn</p>
            <p className='text-secondary'>Sabrina</p>
            <FaLeaf className='text-green-500' />
          </div>
          {/* menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className='text-xl'>
                  <Link
                    href={menu.link}
                    className='inline-block py-1 px-3 hover:text-primary
                       hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* mobile Hamburger Menu section */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
