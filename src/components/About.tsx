import sablayPic from "../assets/sablay.jpg";
import { ABOUT_PARAGRAPHS } from "../data/data"; // Adjust path to your data.ts file

// Helper function to convert **text** to styled <span> elements
function renderFormattedText(text: string) {
  const parts = text.split("**");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-medium text-slate-200">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function About() {
  const [firstParagraph, ...remainingParagraphs] = ABOUT_PARAGRAPHS;

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:relative md:top-auto md:mx-0 md:w-auto lg:sr-only lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      {/* TOP ROW: Profile Image + 1st Paragraph */}
      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[auto_1fr]">
        {/* CHANGED: Added mx-auto sm:mx-0 to center ONLY the photo wrapper on mobile */}
        <div className="relative h-44 w-40 shrink-0 sm:h-56 sm:w-52 mx-auto sm:mx-0">
          {/* Static image container with a thicker, clearer border */}
          <div className="h-full w-full overflow-hidden rounded-lg border-[3px] border-slate-600 bg-[#112240] shadow-xl">
            <img
              src={sablayPic}
              alt="Trixia Mae Banzon"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side 1st Paragraph (Justified) */}
        <div className="text-[17px] leading-7 text-slate-400 text-justify">
          <p>{renderFormattedText(firstParagraph)}</p>
        </div>
      </div>

      {/* BOTTOM ROW: Remaining Paragraphs (Justified) */}
      <div className="mt-6 space-y-4 text-[17px] leading-7 text-slate-400 text-justify">
        {remainingParagraphs.map((paragraph, index) => (
          <p key={index}>{renderFormattedText(paragraph)}</p>
        ))}
      </div>
    </section>
  );
}