"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Working with Talytale was a game-changer. They built our app, redesigned our website, and automated our client onboarding — all working together perfectly. Couldn't imagine going back to juggling multiple vendors.",
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "GrowthLoop",
  },
  {
    quote:
      "The team truly understood our vision from day one. They delivered a beautiful mobile app that our customers love, and the ongoing support has been exceptional. Highly recommend.",
    name: "Marcus Johnson",
    role: "Head of Product",
    company: "FinTrack",
  },
  {
    quote:
      "Our workflow automations alone save us 20+ hours a week. Combined with the website they built, our lead generation has tripled. The ROI has been incredible.",
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "ScaleUp Agency",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-[5%] bg-primary">
      <AnimatedSection className="text-center max-w-[700px] mx-auto mb-16">
        <span className="inline-block px-5 py-2 bg-accent/10 text-accent-bright rounded-full text-sm font-semibold mb-4 border border-accent/20">
          CLIENT STORIES
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-lg text-text-secondary">
          Don&apos;t just take our word for it — hear from businesses we&apos;ve helped transform.
        </p>
      </AnimatedSection>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={testimonial.name} delay={index * 150} animation="scale">
            <div className="bg-secondary p-8 rounded-2xl border border-accent/10 flex flex-col h-full">
              {/* Quote mark */}
              <div className="text-5xl text-accent/30 font-serif leading-none mb-4">
                &ldquo;
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-1 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-text-secondary text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
