import getEducations from '../data/Educations';

export default function Education() {
  const educations = getEducations();

  return (
    <section id="education" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-black/60 dark:bg-custom-white/60" />
        <h1 className="my-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-6xl">
          Education
        </h1>
      </div>

      <div className="space-y-4 text-left">
        {educations.map((education) => (
          <div key={education.id}>
            <div className="block md:flex md:justify-between">
              <h2 className="text-lg font-bold md:text-xl">
                {education.school}
              </h2>
              <h2 className="text-custom-black/80 dark:text-custom-white/60">
                {education.duration}
              </h2>
            </div>
            <h3 className="text-custom-secondary dark:text-custom-primary">
              {education.title}
            </h3>
            <ul className="list-inside list-disc">
              {education.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
