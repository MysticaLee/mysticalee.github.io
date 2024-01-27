import { useState } from 'react';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

import { Project } from '../../types/Projects.types';

export default function Card({ project }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl shadow-md shadow-custom-white">
      <img className="h-56 w-full" src={project.src} />

      <div className="px-6 py-4">
        <h1 className="mb-2 text-2xl font-bold">{project.name}</h1>
        <p className="text-base text-custom-primary">{project.description}</p>
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
            <div
              className="has-tooltip mb-2 inline-block cursor-pointer rounded-full bg-custom-tertiary text-sm font-semibold text-custom-white hover:bg-custom-secondary"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <>
                  <IconChevronUp />
                  <span className="tooltip -right-[120%] -top-9 px-3 py-1">
                    Minimize
                  </span>
                </>
              ) : (
                <>
                  <IconChevronDown />
                  <span className="tooltip -right-[100%] -top-9 px-3 py-1">
                    Expand
                  </span>
                </>
              )}
            </div>
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
        <button className="rounded-lg border border-custom-secondary px-4 py-2 font-bold text-white hover:bg-custom-secondary">
          <a href={project.repository} target="_blank">
            GitHub
          </a>
        </button>
        {project?.url && (
          <button className="rounded-lg bg-custom-primary px-4 py-2 font-bold text-custom-black hover:bg-custom-secondary">
            <a href={project.url} target="_blank">
              Demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

type CardProps = {
  project: Project;
};
