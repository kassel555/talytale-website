"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-[5%] bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Tell Your Tale?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Let&apos;s discuss your project. Book a free strategy call or send us a message — we&apos;ll help you track success and tell your story.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Book a Call Option */}
          <AnimatedSection animation="slide-right">
            <div className="bg-secondary p-8 md:p-12 rounded-3xl border border-accent/20 h-full flex flex-col">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📞
              </div>
              <h3 className="text-2xl font-bold mb-4">Book a Strategy Call</h3>
              <p className="text-text-secondary mb-8 flex-grow">
                Schedule a free 30-minute call. We&apos;ll discuss your goals, explore what&apos;s possible, and see if we&apos;re a good fit.
              </p>

              <div className="space-y-4">
                <Link
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg text-center hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all"
                >
                  Schedule Your Call
                </Link>
                <p className="text-text-secondary text-sm text-center">
                  No commitment required
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-accent/10">
                <p className="text-sm text-text-secondary mb-4">What to expect:</p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-bright">✓</span>
                    Discuss your business goals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-bright">✓</span>
                    Explore solution options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-bright">✓</span>
                    Get a rough timeline & budget
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form Option */}
          <AnimatedSection animation="slide-left">
            <div className="bg-secondary p-8 md:p-12 rounded-3xl border border-accent/20 h-full">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                ✉️
              </div>
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <p className="text-text-secondary mb-8">
                Prefer email? Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>

              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
