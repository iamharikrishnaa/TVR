import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="section " id="contact">
      <div className="bg-Velvet rounded-md font-space-grotesk p-20 ">
        <div className="text-center bg-Velvet rounded-md w-full  max-w-[600px] mx-auto">
          <div className="sm:text-5xl text-white text-5xl font-bold mb-5">
            Wanna Join The Velvet Room
          </div>
          <p className="text-sm leading-7 text-white">
            Contact us to join the Velvet Room experience today
          </p>
          <motion.form
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5"
          >
            <button className="text-sm text-white bg-gold sm:p-3 p-2 shadow-md font-bold">
              Contact With Us
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
