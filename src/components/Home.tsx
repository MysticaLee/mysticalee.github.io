import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-64px)]">
      <div className="mt-10 flex min-h-[calc(100vh-144px)] flex-col items-center justify-center space-y-4 outline">
        <TypeAnimation
          sequence={[
            "Hi there",
            1000, // Waits 1s
            "I am Jasmine",
            1000, // Waits 1s
            "I am an Electrical Engineer",
            1000, // Waits 1s
            "I am an aspiring software developer",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2rem", display: "inline-block" }}
        />
        <a
          href="#projects"
          className="rounded-lg bg-custom-primary px-4 py-2 font-bold text-custom-black hover:bg-custom-secondary"
        >
          My Projects
        </a>
      </div>
    </section>
  );
}
