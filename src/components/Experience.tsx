import getExperiences from '../data/Experiences';

export default function Experience() {
  const experiences = getExperiences();

  return (
    <section id="experience" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="my-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-6xl">
          Experience
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-black/60 dark:bg-custom-white/60" />
      </div>

      <div className="space-y-4 text-left">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <div className="block md:flex md:justify-between">
              <h2 className="text-lg font-bold md:text-xl">
                {experience.title}
              </h2>
              <h2 className="text-custom-black/80 dark:text-custom-white/60">
                {experience.duration}
              </h2>
            </div>
            <h3 className="text-custom-secondary dark:text-custom-primary">
              {experience.company}
            </h3>
            <ul className="list-inside list-disc">
              {experience.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
            <div className="mt-2 space-x-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="mb-2 inline-block rounded-full bg-custom-tertiary px-3 py-1 text-sm font-semibold text-custom-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
