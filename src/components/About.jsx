import React from "react";
import { motion } from "framer-motion";
import profile_pic from "../assets/images/profile_photo.jpg";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl font-bold 
            text-gray-900 dark:text-gray-100
          "
        >
          About Me
        </motion.h2>

        {/* Accent Underline */}
        <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>

        <div className="flex py-8 space-x-8 flex-wrap justify-center sm:justify-start">
          <img className="w-[250px] rounded-md border-2 shadow-xl/50" src={profile_pic} />

          {/* Content */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="
            mt-6 max-w-3xl pt-10 text-lg leading-relaxed
            text-gray-700 dark:text-gray-300
          "
          >
            Hi, I am Rahul, software engineer from Bhopal, India. 
            <br />
I am a self taught programmer, I started from programming <br /> microcontroller 
in engineering classes to making web applications. 
<br />
I enjoy learning new ways of writing better code & improve my skills.
<br />
I like to listen music, play chess & doom scrolling. 

          </motion.p>
        </div>
      </div>
    </section>
  );
}
