import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <main className="mx-auto w-[min(1100px,calc(100%-48px))]">
      <Hero />
      <About />
    </main>
  );
}