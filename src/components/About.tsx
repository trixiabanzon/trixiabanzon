import sablayPic from "../assets/sablay.jpg";
import testiPic from "../assets/DSC00056.jpg";
import diplomaPic from "../assets/diploma.jpg";

import { useState } from "react";

const carouselImages = [
  {
    src: testiPic,
    alt: "Testimonial Photo",
  },
  {
    src: sablayPic,
    alt: "UPLB Sablay",
  },
  {
    src: diplomaPic,
    alt: "Diploma",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(1); // Default center slide

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      {/* 3D COVERFLOW CAROUSEL */}
      <div className="mb-8 overflow-visible py-3 w-full">
        {/* 3D Perspective Stage */}
        <div 
          className="relative flex items-center justify-center h-48 sm:h-60 w-full"
          style={{ perspective: "1000px" }}
        >
          {carouselImages.map((image, index) => {
            const offset = index - activeIndex;

            let transformStyle = "";
            let zIndex = 0;
            let opacity = 0.4;

            if (offset === 0) {
              // Active Center Card
              transformStyle = "translateX(0%) rotateY(0deg) scale(1) translateZ(0px)";
              zIndex = 20;
              opacity = 1;
            } else if (offset === -1 || (offset > 0 && activeIndex === 0 && index === carouselImages.length - 1)) {
              // Left Card
              transformStyle = "translateX(-72%) rotateY(25deg) scale(0.78) translateZ(-80px)";
              zIndex = 10;
              opacity = 0.65;
            } else if (offset === 1 || (offset < 0 && activeIndex === carouselImages.length - 1 && index === 0)) {
              // Right Card
              transformStyle = "translateX(72%) rotateY(-25deg) scale(0.78) translateZ(-80px)";
              zIndex = 10;
              opacity = 0.65;
            } else {
              // Hidden outer cards
              transformStyle = `translateX(${offset > 0 ? "120%" : "-120%"}) rotateY(${offset > 0 ? "-35deg" : "35deg"}) scale(0.5)`;
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="absolute w-40 sm:w-52 h-44 sm:h-56 cursor-pointer rounded-2xl overflow-hidden bg-[#112240] shadow-xl transition-all duration-500 ease-out"
                style={{
                  transform: transformStyle,
                  zIndex: zIndex,
                  opacity: opacity,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Body Text matching Brittany Chiang's text-slate-400 (#94a3b8) and highlighted text-slate-200 */}
      <div className="space-y-4 text-[17px] leading-7 text-slate-400 text-justify">
        <p>
          Hello there! I'm Trixia, a Computer Science graduate from the{" "}
          <span className="font-medium text-slate-200">
            University of the Philippines Los Baños
          </span>{" "}
          specializing in full-stack web development. My primary focus lies in building scalable backends using {" "}
          <span className="font-medium text-slate-200">Node.js</span> and {" "} 
          <span className="font-medium text-slate-200">Express.js</span>, while crafting responsive interfaces with{" "}
          <span className="font-medium text-slate-200">Tailwind CSS</span>.
        </p>

        <p>
          At the core of everything I build, I strive to write maintainable code that delivers smooth user experiences. To achieve this, I stay curious and adaptable, constantly exploring modern technologies and applying best practices to keep applications fast and reliable.
        </p>
      </div>
    </section>
  );
}