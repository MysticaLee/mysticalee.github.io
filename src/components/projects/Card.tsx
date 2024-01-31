import { useState } from 'react';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

import Project from '../../interfaces/Projects.interface';

export default function Card({ project }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl shadow-md shadow-custom-black dark:shadow-custom-white">
      <img
        className="h-56 w-full rounded-t-xl shadow-sm shadow-custom-black dark:shadow-custom-white"
        src={project.src}
      />

      <div className="px-6 py-4">
        <h1 className="mb-2 text-lg font-bold md:text-2xl">{project.name}</h1>
        <p className="text-sm text-custom-secondary dark:text-custom-primary md:text-base">
          {project.description}
        </p>
      </div>

      <div className="px-6 pb-1 pt-4">
        <div className="flex flex-wrap items-center justify-center space-x-2">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="mb-2 inline-block rounded-full bg-custom-tertiary px-3 py-1 text-sm font-semibold text-custom-white"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <button
              className="has-tooltip mb-2 inline-block rounded-full bg-custom-tertiary text-sm font-semibold text-custom-white hover:bg-custom-secondary"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? <IconChevronUp /> : <IconChevronDown />}
              <span className="tooltip">{open ? "Minimize" : "Expand"}</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-2">
          {open &&
            project.tech.slice(3, project.tech.length).map((t) => (
              <span
                key={t}
                className="mb-2 inline-block rounded-full bg-custom-tertiary px-3 py-1 text-sm font-semibold text-custom-white"
              >
                {t}
              </span>
            ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 px-6 pb-4 pt-1">
        <button className="rounded-lg border border-custom-secondary px-4 py-2 font-bold hover:bg-custom-hover dark:border-custom-hover">
          <a href={project.repository} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </button>
        {project?.url && (
          <button className="rounded-lg bg-custom-secondary px-4 py-2 font-bold text-custom-white hover:bg-custom-hover dark:bg-custom-primary dark:text-custom-black dark:hover:bg-custom-hover">
            <a href={project.url} target="_blank" rel="noreferrer">
              Demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

interface CardProps {
  project: Project;
}
