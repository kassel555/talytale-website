import Link from "next/link";
import AppShowcase from "./AppShowcase";

export default function Hero() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section className="min-h-screen flex items-center px-[5%] pt-32 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-1/2 -right-1/5 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full animate-pulse-glow" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Track. Tell.
            <br />
            <span className="gradient-text">Transform.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl">
            We tally the numbers that drive your business. We tell the stories that win customers. That&apos;s TalyTale — apps, websites, and automation from one expert team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Link
              href="#contact"
              className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all text-center text-lg"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-transparent text-text-primary border-2 border-accent rounded-lg font-semibold hover:bg-accent hover:-translate-y-0.5 transition-all text-center text-lg"
            >
              See Our Work
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-4xl font-extrabold gradient-1 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* App Showcase */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <AppShowcase />
        </div>
      </div>
    </section>
  );
}
