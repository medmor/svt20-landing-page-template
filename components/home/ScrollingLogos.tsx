"use client";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  const { theme } = useTheme();
  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 py-10 sm:py-16 ">
      <Marquee style={{ overflowX: 'visible' }} direction="left" autoFill pauseOnHover>
        {['Cours', 'Exercices', 'Examens', 'Quiz'].map((content, index) => (
          <div className="mx-6  text-xl" key={index}>
            <span className="rounded-lg border px-8 py-1">
              {content}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
