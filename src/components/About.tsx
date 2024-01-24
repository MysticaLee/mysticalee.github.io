export default function About() {
  return (
    <section className="min-h-[calc(100vh-64px)]">
      <div className="mx-8 flex items-center justify-center space-x-8 md:mx-16 lg:mx-32 xl:mx-72">
        <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-custom-white md:my-8 md:text-5xl lg:text-6xl">
          About
        </h1>
        <hr className="h-0.5 flex-grow rounded border-0 bg-custom-white/60" />
      </div>
    </section>
  );
}
