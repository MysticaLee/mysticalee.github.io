export default function About() {
  return (
    <section id="about" className="min-h-[calc(100vh-64px)] scroll-m-16">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-custom-white md:text-5xl lg:text-6xl">
          About
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-white/60" />
      </div>
    </section>
  );
}
