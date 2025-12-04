import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="
        py-24  
        from-white to-slate-50 
        dark:from-[#0d1117] dark:to-[#0d1117]
      "
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className='flex flex-col items-center lg:items-start'>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="
              text-4xl sm:text-5xl font-bold 
              text-gray-900 dark:text-gray-100
            "
          >
            Rahul Prajapati
          </motion.h1>

          <p
            className="
              mt-4 text-lg max-w-xl 
              text-gray-700 dark:text-gray-300
            "
          >
            I build robust backend systems using{" "}
            <strong className="text-accent">Java Spring Boot</strong> or{" "}
            <strong className="text-accent">Node.js / Express.js</strong>.  
            I also craft frontend experiences with React.js and Tailwind.
          </p>

          <div className="mt-6 flex gap-4">
            
            {/* Resume Button */}
            <a
              href="/Rahul_Prajapati_Resume_2211.pdf"
              className="
                inline-block px-6 py-2.5 rounded-md 
                bg-[var(--accent)] text-white font-medium 
                shadow hover:opacity-90 transition
              "
            >
              Download Resume
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="
                inline-block px-6 py-2.5 rounded-md font-medium
                border border-neutral-300 dark:border-neutral-700
                bg-white dark:bg-[#111821]
                text-gray-800 dark:text-gray-200
                hover:bg-neutral-100 dark:hover:bg-[#1a2332]
                transition
              "
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="
              inline-block rounded-2xl p-8 
              shadow-lg border 
              bg-white dark:bg-[#111821]
              border-gray-200 dark:border-gray-700
            "
          >
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
              Full-Stack Developer
            </p>

            <h3 className="mt-2 font-semibold text-gray-900 dark:text-gray-100">
              Java · Spring Boot · Node · React
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Git • Docker • Databases
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
