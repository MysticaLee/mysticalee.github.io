import { useState } from 'react';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

import { Project } from '../../types/Projects.types';

export default function Card({ project }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-8 max-w-sm overflow-hidden rounded-lg shadow-md shadow-white md:max-w-md lg:max-w-lg">
      <div className="px-6 py-4">
        <text className="mb-2 text-xl font-bold">{project.name}</text>
        <p className="text-base text-custom-primary">{project.description}</p>
      </div>
      <div className="flex items-center justify-center px-6 pb-1 pt-4">
        {project.tech.slice(0, 3).map((t) => (
          <span className="mb-2 mr-2 inline-block rounded-full bg-custom-tertiary px-3 py-1 text-sm font-semibold text-custom-white">
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span
            className="mb-2 inline-block cursor-pointer rounded-full bg-custom-tertiary text-sm font-semibold text-custom-white hover:bg-custom-secondary"
            onClick={() => setOpen(!open)}
          >
            {open ? <IconChevronUp /> : <IconChevronDown />}
          </span>
        )}
      </div>
      <div>
        {open &&
          project.tech
            .slice(3, project.tech.length)
            .map((t) => (
              <span className="mb-2 mr-2 inline-block rounded-full bg-custom-tertiary px-3 py-1 text-sm font-semibold text-custom-white">
                {t}
              </span>
            ))}
      </div>
      <div className="flex justify-center space-x-2 px-6 pb-4 pt-1">
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
