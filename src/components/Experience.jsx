import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Technical Associate — ZKTeco India",
    period: "Aug 2023 - Feb 2025",
    bullets: [
      "Built REST APIs and middleware to integrate biometric devices with HRM systems",
      "Worked with Oracle, MSSQL and PostgreSQL",
      "Containerized apps using Docker and assisted in deployments on VPS/AWS"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container-custom">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Experience
        </h2>
        <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>

        <div className="mt-10 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-xl relative overflow-hidden
                bg-white dark:bg-[#111821]
                border border-gray-200 dark:border-gray-800
                shadow-sm hover:shadow-md transition
              "
            >
              {/* Accent left border */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent)]"></div>

              {/* Top row */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]"></span>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
