import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

const phoneNo = import.meta.env.VITE_API_PHONE_NO;
const mail = import.meta.env.VITE_API_EMAIL;
const Location = 'Podakkudi -614103, Thiruavarur'

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:1,y:-100}} transition={{duration:0.5}} className="my-10 text-center text-4xl">Get In Touch</motion.h2>
      <div className="text-center tracking-tighter flex items-center justify-center space-x-3">
        <div className="flex items-center space-x-2">
          <motion.a  whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-50}}
           transition={{duration:1}}
            href={`https://wa.me/${phoneNo}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp size={24} className="md:text-2xl text-xl" />
          </motion.a>
        </div>
        <div className="flex items-center space-x-2">
          <motion.a 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:50}}
           transition={{duration:1}}
            href={`mailto:${mail}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <IoIosMail size={24} className="md:text-2xl text-xl" />
          </motion.a>
        </div>
        <motion.div className="flex items-center space-x-2" whileInView={{opacity:1,y:0,x:0}}
           initial={{opacity:0,y:10}}
           transition={{duration:1}}>{Location}</motion.div>
      </div>
    </div>
  );
};

export default Contact;
