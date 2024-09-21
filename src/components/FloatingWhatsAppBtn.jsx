"use client";
import React from "react";

const FloatingWhatsAppBtn = () => {
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello! I need assistance."; // Optional message

  const handleClick = () => {
    const message = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <button
      onClick={handleClick}
      className='fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105'
      style={{ zIndex: 1000 }}
    >
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
        alt='WhatsApp'
        className='w-8 h-8'
      />
    </button>
  );
};

export default FloatingWhatsAppBtn;
