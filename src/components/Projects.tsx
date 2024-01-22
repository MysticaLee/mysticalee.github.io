import getProjects from '../data/Projects';
import Card from './projects/Card';

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center">
      <div>Projects</div>
      <div>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
}
