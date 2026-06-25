export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <p className="mb-4 font-mono text-sm font-semibold text-[#64ffda]">
        Hi, my name is
      </p>

      <h1 className="m-0 text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-none text-[#e6f1ff]">
        Trixia Mae Banzon.
      </h1>

      <h2 className="mt-3 mb-6 text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-[#8892b0]">
        I build web applications and backend systems.
      </h2>

      <p className="max-w-xl text-base leading-8 text-[#8892b0]">
        I’m a full-stack developer with a backend focus, interested in building
        reliable APIs, clean interfaces, and practical software systems.
      </p>

      <a
        href="#about"
        className="mt-8 w-fit rounded border border-[#64ffda] px-6 py-4 font-mono text-sm text-[#64ffda] transition hover:bg-[#64ffda]/10"
      >
        About me
      </a>
    </section>
  );
}