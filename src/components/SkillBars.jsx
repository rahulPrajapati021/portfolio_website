import React from "react";

export default function SkillBars({ value }) {
  return (
    <div className="flex gap-1 ml-2">
      {[1, 2, 3, 4, 5].map((v) => (
        <div
          key={v}
          className={`
            h-3 w-3 rounded-sm 
            transition 
            ${v <= value 
              ? "bg-[var(--accent)]" 
              : "bg-gray-400 dark:bg-gray-200"
            }
          `}
        />
      ))}
    </div>
  );
}
