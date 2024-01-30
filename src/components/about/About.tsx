import Skills from './Skills';

export default function About() {
  return (
    <section id="about" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-custom-white md:text-5xl lg:text-6xl">
          About
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-white/60" />
      </div>
      <div className="space-y-4 text-left">
        <p>
          👋 Hello! I&apos;m Jasmine and I graduated from the National
          University of Singapore (NUS) with a Bachelor of Engineering
          (Electrical Engineering) and a minor in Data Engineering. Although my
          background might seem somewhat unrelated to the web, I am always
          interested with technology, which led me to explore the dynamic realm
          of web development.
        </p>
        <p>
          My first hands-on experience with full-stack development was during my
          Final Year Project (FYP). As someone who likes to see how things come
          together and work together, this project provided me with an
          opportunity to create a website from both the front-end and back-end
          perspectives, sparking a newfound passion within me.
        </p>
        <p>
          While I may be at the beginning of my full-stack journey, I am
          enthusiastic and eager to embrace the challenges and growth that comes
          with this ever-evolving field. Currently, I am focusing on honing my
          skills through self-directed learning and exploring new hands-on
          projects with my developing expertise.
        </p>
        <Skills />
      </div>
    </section>
  );
}
