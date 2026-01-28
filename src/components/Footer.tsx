import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Mobile Apps", href: "#services" },
    { label: "Websites", href: "#services" },
    { label: "Automation", href: "#services" },
  ],
  company: [
    { label: "How We Work", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { label: "in", href: "#", title: "LinkedIn" },
  { label: "𝕏", href: "#", title: "Twitter/X" },
  { label: "ig", href: "#", title: "Instagram" },
  { label: "gh", href: "#", title: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 px-[5%] border-t border-accent/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-extrabold gradient-text mb-4">
            talytale
          </h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            One partner for all your digital needs. Mobile apps, websites, and automation workflows that help your business thrive.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                title={social.title}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-text-secondary border border-accent/10 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-3">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Resources</h4>
          <ul className="space-y-3">
            {footerLinks.resources.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 pb-8 border-t border-accent/10 text-center text-text-secondary text-sm">
        <p>© 2026 Talytale. All rights reserved.</p>
      </div>
    </footer>
  );
}
