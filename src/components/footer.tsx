import { socials } from "../lib/socials";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Stack", id: "stack" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-bg border-t border-border/20">
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* Brand + tagline */}
          <div className="space-y-3 max-w-xs">
            <span className="font-mono font-bold text-text-primary text-lg tracking-tight">
              BENJI<span className="text-accent">.</span>
            </span>
            <p className="text-text-muted text-[13px] leading-relaxed">
              Full-stack developer crafting performant, thoughtful digital
              experiences from Nigeria.
            </p>
          </div>

          {/* Navigation + Socials */}
          <div className="flex gap-16">
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-medium tracking-[4px] uppercase text-text-muted">
                Nav
              </h4>
              <div className="flex flex-col gap-1.5">
                {navLinks.map(({ name, id }) => (
                  <a
                    key={name}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-text-muted hover:text-text-secondary text-[13px] transition-colors duration-300 w-fit"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-medium tracking-[4px] uppercase text-text-muted">
                Socials
              </h4>
              <div className="flex flex-col gap-1.5">
                {socials.map((social) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-secondary text-[13px] transition-colors duration-300 w-fit flex items-center gap-2"
                  >
                    <social.icon size={12} strokeWidth="1.5" />
                    {social.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-text-muted/60 text-[11px] font-mono">
            &copy; {year} Benjamin Likita
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-text-muted/60 hover:text-text-muted text-[11px] font-mono transition-colors duration-300 cursor-pointer"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
