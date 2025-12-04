export default function ProjectCard({ title, desc, tech = [] }) {
  return (
    <article
      className="p-5 rounded-lg transition border"
      style={{
        background: "var(--card-bg)",
        color: "var(--text)",
        borderColor: "var(--card-border)",
      }}
    >
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
        {desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md border"
            style={{
              background: "var(--badge-bg)",
              color: "var(--badge-text)",
              borderColor: "var(--badge-border)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
