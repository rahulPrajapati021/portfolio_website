import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Middleware App — Biometric Sync",
    desc: "Node.js middleware to sync biometric device logs with HRM systems. Real-time sync for 100+ users. Queue-based retry and robust error handling.",
    tech: ["Node.js", "Express", "Oracle", "Docker"],
  },
  {
    title: "Kelsa.io Integration",
    desc: "Pipeline to push logs to Kelsa.io and improve reliability by 40%.",
    tech: ["Express", "MSSQL", "API Integration"],
  },
  {
    title: "BodSquad Gym Integration",
    desc: "Integrated biometric access for daily gym passes and deployment troubleshooting.",
    tech: ["API", "Integration", "Deployment"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
