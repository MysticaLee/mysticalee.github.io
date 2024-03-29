import getProjects from '../../data/Projects';
import Card from './Card';

export default function Projects() {
  const projects = getProjects();

  return (
    <section id="projects" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-black/60 dark:bg-custom-white/60" />
        <h1 className="my-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-6xl">
          Projects
        </h1>
      </div>
      <div className="my-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
