"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: "⚡",
    title: "Automation",
    tagline: "Track What Matters",
    keyword: "TRACK",
    description:
      "Custom n8n workflows that connect your tools and eliminate repetitive tasks, so you can focus on what matters.",
    benefits: [
      "Save hours every week on busywork",
      "Connect all your tools seamlessly",
      "Reduce errors from manual processes",
      "Scale operations without hiring",
      "Real-time data sync across platforms",
    ],
    gradient: "gradient-1",
  },
  {
    icon: "🌐",
    title: "Websites",
    tagline: "Tell Your Tale",
    keyword: "TELL",
    description:
      "Fast, beautiful websites that establish credibility, attract visitors, and convert them into customers.",
    benefits: [
      "Convert visitors into paying customers",
      "Look professional and credible online",
      "Load fast and rank well on Google",
      "Easy to update without developers",
      "Mobile-responsive on every device",
    ],
    gradient: "gradient-2",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    tagline: "Transform the Experience",
    keyword: "TRANSFORM",
    description:
      "Native and cross-platform mobile applications that put your business in your customers' pockets.",
    benefits: [
      "Reach customers wherever they are",
      "Turn ideas into revenue-generating products",
      "Stand out with polished, intuitive UX",
      "Native performance on iOS & Android",
      "App Store optimization included",
    ],
    gradient: "gradient-3",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-[5%] bg-secondary relative">
      <AnimatedSection className="text-center max-w-[700px] mx-auto mb-20">
        <span className="inline-block px-5 py-2 bg-accent/10 text-accent-bright rounded-full text-sm font-semibold mb-4 border border-accent/20">
          WHAT WE BUILD
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Track. Tell. Transform.
        </h2>
        <p className="text-lg text-text-secondary">
          Three services, one unified mission. We track your metrics, tell your story, and transform how you do business.
        </p>
      </AnimatedSection>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 150}>
            <div className="bg-primary p-10 rounded-2xl border border-accent/10 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col h-full">
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${service.gradient} scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300`}
              />

              <div
                className={`w-[60px] h-[60px] ${service.gradient} rounded-xl flex items-center justify-center text-3xl mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className={`text-lg font-medium mb-4 ${service.gradient} bg-clip-text text-transparent`}>
                {service.tagline}
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="text-text-secondary pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent-bright before:font-bold"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-block text-center px-6 py-3 border border-accent text-accent-bright rounded-lg font-semibold hover:bg-accent hover:text-white transition-all"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
