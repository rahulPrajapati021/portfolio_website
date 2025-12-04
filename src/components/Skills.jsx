import React from 'react'
import SkillBars from './SkillBars'
import { motion } from 'framer-motion'

const groups = [
  { title: 'Languages', items: [{ name: 'Java', value: 4 }, { name: 'JavaScript', value: 3 }] },
  { title: 'Frontend', items: [{ name: 'React', value: 4 }, { name: 'Tailwind', value: 3 }, { name: 'HTML', value: 4 }, { name: 'CSS', value: 4 }] },
  { title: 'Backend', items: [{ name: 'Spring Boot', value: 3 }, { name: 'Express.js', value: 3 }] },
  { title: 'Databases', items: [{ name: 'PostgreSQL', value: 3 }, { name: 'MongoDB', value: 3 }] },
  { title: 'Tools', items: [{ name: 'Docker', value: 4 }, { name: 'Git', value: 3 }, { name: 'Postman', value: 4 }, { name: 'Maven', value: 2 }] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container-custom">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Skills
        </h2>
        <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-2xl
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-[#111821]
                shadow-sm hover:shadow-md transition
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>

              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="
                      flex items-center justify-between 
                      text-gray-700 dark:text-gray-300 text-sm
                    "
                  >
                    <span>{item.name}</span>
                    <SkillBars value={item.value} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
