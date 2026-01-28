"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, challenges, and vision. This deep dive ensures we build exactly what you need.",
  },
  {
    number: 2,
    title: "Strategy",
    description:
      "Based on our discovery, we recommend the right mix of solutions — whether that's an app, a website, automation, or all three.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Our expert team brings your vision to life with clean code, beautiful design, and regular updates so you always know where we are.",
  },
  {
    number: 4,
    title: "Launch & Support",
    description:
      "We don't disappear after launch. Ongoing support, optimization, and updates ensure your digital presence keeps performing.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-[5%] bg-secondary">
      <AnimatedSection className="text-center max-w-[700px] mx-auto mb-20">
        <span className="inline-block px-5 py-2 bg-accent/10 text-accent-bright rounded-full text-sm font-semibold mb-4 border border-accent/20">
          HOW WE WORK
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          A Process Built for Results
        </h2>
        <p className="text-lg text-text-secondary">
          Transparent, collaborative, and focused on delivering real value at every step.
        </p>
      </AnimatedSection>

      <div className="max-w-[1000px] mx-auto relative">
        {/* Timeline line - desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-bright -translate-x-1/2" />

        <div className="space-y-16">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={index * 200}
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 bg-primary p-8 rounded-xl border border-accent/10">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-[50px] h-[50px] bg-accent rounded-full flex items-center justify-center font-extrabold text-xl shadow-[0_0_0_10px_var(--secondary)] z-10">
                  {step.number}
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
