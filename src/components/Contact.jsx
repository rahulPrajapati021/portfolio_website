import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Contact
        </h2>
        <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:rahulprajapati.pranton@gmail.com"
            className="p-6 rounded-xl border transition hover:shadow-lg flex items-start gap-4"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text)",
            }}
          >
            <Mail className="w-6 h-6" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                rahulprajapati.pranton@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rahul-prajapati-129783219/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border transition hover:shadow-lg flex items-start gap-4"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text)",
            }}
          >
            <Linkedin className="w-6 h-6" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                linkedin.com/in/rahul-prajapati-129783219
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rahulPrajapati021"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border transition hover:shadow-lg flex items-start gap-4"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text)",
            }}
          >
            <Github className="w-6 h-6" />
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                github.com/rahulPrajapati021
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
