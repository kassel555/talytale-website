"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A simple website can be ready in 2-4 weeks, while a full mobile app typically takes 8-12 weeks. Automation workflows often take 1-2 weeks. During our discovery call, we'll give you a realistic timeline based on your specific needs.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely! We love working with startups and understand the unique challenges of building from scratch. We can help you prioritize features for your MVP and build a foundation that scales as you grow.",
  },
  {
    question: "What if I only need one service, not all three?",
    answer:
      "No problem at all. While many clients benefit from our end-to-end approach, we're happy to help with just an app, just a website, or just automation. You'll still get the same quality and attention to detail.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "You'll have a dedicated point of contact throughout your project. We use a combination of regular video calls, Slack/email for quick questions, and project management tools so you always know the status. No radio silence, ever.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is just the beginning. We offer ongoing support and maintenance packages to keep your app updated, your website optimized, and your automations running smoothly. We're in this for the long haul with you.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your project's scope and complexity. We don't do one-size-fits-all quotes. After our discovery call, we'll provide a detailed proposal with transparent pricing and no hidden fees. Our goal is to deliver maximum value for your investment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-[5%] bg-secondary">
      <AnimatedSection className="text-center max-w-[700px] mx-auto mb-16">
        <span className="inline-block px-5 py-2 bg-accent/10 text-accent-bright rounded-full text-sm font-semibold mb-4 border border-accent/20">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary">
          Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, just ask.
        </p>
      </AnimatedSection>

      <div className="max-w-[800px] mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedSection key={faq.question} delay={index * 75}>
            <div className="bg-primary rounded-xl border border-accent/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <span
                  className={`text-accent-bright text-2xl transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
