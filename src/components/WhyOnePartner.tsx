"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: "🔗",
    title: "No Integration Nightmares",
    description:
      "Everything we build works together seamlessly. Your app, website, and automations share the same architecture and data flow.",
  },
  {
    icon: "🚀",
    title: "Faster Time to Market",
    description:
      "One team means zero handoff delays. We move fast because we understand your entire project from day one.",
  },
  {
    icon: "✨",
    title: "Consistent Quality",
    description:
      "Same high standards across every touchpoint. Your brand looks and feels cohesive whether customers find you on mobile, web, or email.",
  },
  {
    icon: "💬",
    title: "Simpler Communication",
    description:
      "One point of contact, total clarity. No more coordinating between agencies or explaining your vision multiple times.",
  },
];

export default function WhyOnePartner() {
  return (
    <section className="py-32 px-[5%] bg-primary">
      <AnimatedSection className="text-center max-w-[700px] mx-auto mb-16">
        <span className="inline-block px-5 py-2 bg-accent/10 text-accent-bright rounded-full text-sm font-semibold mb-4 border border-accent/20">
          THE ADVANTAGE
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Why Businesses Choose a Single Digital Partner
        </h2>
        <p className="text-lg text-text-secondary">
          Working with one team for all your digital needs isn&apos;t just convenient — it&apos;s strategically smarter.
        </p>
      </AnimatedSection>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <AnimatedSection
            key={benefit.title}
            delay={index * 100}
            animation={index % 2 === 0 ? "slide-right" : "slide-left"}
          >
            <div className="bg-secondary p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 flex gap-6 h-full">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
